import { originAllowed, hostAllowed, isHoneypot, validateSubmission, RATE_LIMIT_PER_HOUR, EMAIL_CAP_PER_DAY, SITE, SHARED_SITE_DEFAULT } from '../_lib/validate.js';

const SCHEMA = [
  `CREATE TABLE IF NOT EXISTS subscribers (
    email TEXT NOT NULL,
    page_url TEXT NOT NULL,
    purpose TEXT NOT NULL,
    extra TEXT NOT NULL,
    consent_text TEXT NOT NULL,
    created_at TEXT NOT NULL,
    ip_hash TEXT NOT NULL,
    site TEXT NOT NULL DEFAULT '${SHARED_SITE_DEFAULT}',
    PRIMARY KEY (email, purpose)
  )`,
  `CREATE TABLE IF NOT EXISTS subscribe_hits (
    ip_hash TEXT NOT NULL,
    created_at TEXT NOT NULL
  )`,
  `CREATE INDEX IF NOT EXISTS subscribe_hits_lookup ON subscribe_hits (ip_hash, created_at)`,
];

let schemaReady;

async function ensureSchema(db) {
  if (!schemaReady) {
    schemaReady = applySchema(db).catch((err) => {
      schemaReady = undefined;
      throw err;
    });
  }
  return schemaReady;
}

async function applySchema(db) {
  await db.batch(SCHEMA.map((sql) => db.prepare(sql)));
  const info = await db.prepare('PRAGMA table_info(subscribers)').all();
  const rows = info?.results || info || [];
  if (!rows.some((col) => col.name === 'site')) {
    await db.prepare(`ALTER TABLE subscribers ADD COLUMN site TEXT NOT NULL DEFAULT '${SHARED_SITE_DEFAULT}'`).run();
  }
}

/** @internal tests reset the once-per-isolate schema promise */
export function resetSchemaForTests() {
  schemaReady = undefined;
}

function escapeHtml(text) {
  return String(text).replace(/[&<>"]/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[ch]));
}

function wantsHtml(request) {
  const type = request.headers.get('content-type') || '';
  const accept = request.headers.get('accept') || '';
  return type.includes('application/x-www-form-urlencoded') && !accept.includes('application/json');
}

function corsHeaders(origin) {
  return {
    'access-control-allow-origin': origin,
    'access-control-allow-methods': 'POST, OPTIONS',
    'access-control-allow-headers': 'content-type',
    vary: 'Origin',
  };
}

function respond(request, status, body, origin) {
  const headers = {
    'cache-control': 'no-store',
    'x-content-type-options': 'nosniff',
    ...(origin ? corsHeaders(origin) : {}),
  };
  if (status === 429) headers['retry-after'] = '3600';
  if (wantsHtml(request)) {
    headers['content-type'] = 'text/html; charset=utf-8';
    const title = body.ok ? 'Request stored' : 'Request not stored';
    const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>${title}</title></head><body><p>${escapeHtml(body.message)}</p><p><a href="/privacy/">Privacy</a></p></body></html>`;
    return new Response(html, { status, headers });
  }
  headers['content-type'] = 'application/json; charset=utf-8';
  return new Response(JSON.stringify(body), { status, headers });
}

async function readBody(request) {
  const claimed = Number(request.headers.get('content-length') || 0);
  if (claimed > 4096) return { error: 'too_large' };
  const type = request.headers.get('content-type') || '';
  const text = await request.text();
  if (text.length > 4096) return { error: 'too_large' };
  if (type.includes('application/json')) {
    try {
      return { data: JSON.parse(text) };
    } catch {
      return { error: 'bad_json' };
    }
  }
  if (type.includes('application/x-www-form-urlencoded')) {
    return { data: Object.fromEntries(new URLSearchParams(text).entries()) };
  }
  return { error: 'bad_type' };
}

function clientIp(request) {
  const cf = request.headers.get('cf-connecting-ip');
  if (cf && cf.length <= 80 && !/[\s,]/.test(cf)) return cf;
  return '';
}

async function hashIp(ip, salt) {
  const data = new TextEncoder().encode(`${salt}\n${ip || 'unknown'}`);
  const buf = await crypto.subtle.digest('SHA-256', data);
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

async function verifyTurnstile(token, secret, ip, purpose, requestHost) {
  if (!secret) return { ok: true, skipped: true };
  if (!token) return { ok: false };
  let result;
  try {
    const params = new URLSearchParams({ secret, response: token });
    if (ip) params.set('remoteip', ip);
    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      signal: AbortSignal.timeout(10000),
      body: params,
    });
    if (!response.ok) return { ok: false };
    result = await response.json();
  } catch {
    return { ok: false };
  }
  if (!result || result.success !== true) return { ok: false };
  if (result.action !== purpose) return { ok: false };
  if (typeof result.hostname !== 'string' || !hostAllowed(result.hostname, requestHost)) return { ok: false };
  return { ok: true };
}

function requestOrigin(request) {
  const origin = request.headers.get('origin');
  const requestHost = new URL(request.url).hostname;
  if (origin) return originAllowed(origin, requestHost) ? origin : false;
  const site = request.headers.get('sec-fetch-site');
  if (!site || site === 'same-origin' || site === 'same-site' || site === 'none') return '';
  return false;
}

const STORED = 'Request stored. Nothing was sent.';
const DUPLICATE = 'This request is already stored. Nothing was sent.';

export async function handleSubscribe(request, env) {
  const origin = requestOrigin(request);
  if (origin === false) return respond(request, 403, { ok: false, message: 'This request was rejected.' }, '');

  const parsed = await readBody(request);
  if (parsed.error) {
    return respond(request, 400, { ok: false, message: 'Check the form and try again.' }, origin);
  }
  if (isHoneypot(parsed.data)) {
    return respond(request, 200, { ok: true, stored: true, message: STORED }, origin);
  }

  const validated = validateSubmission(parsed.data);
  if (!validated.ok) return respond(request, 400, { ok: false, message: validated.message }, origin);
  const value = validated.value;

  const referer = request.headers.get('referer');
  if (referer) {
    try {
      const ref = new URL(referer);
      const requestHost = new URL(request.url).hostname;
      if (!hostAllowed(ref.hostname, requestHost) || ref.pathname !== value.page_url) {
        return respond(request, 400, { ok: false, message: 'Check the form and try again.' }, origin);
      }
    } catch {
      return respond(request, 400, { ok: false, message: 'Check the form and try again.' }, origin);
    }
  }

  const requestHost = new URL(request.url).hostname;
  const turnstile = await verifyTurnstile(value.turnstileToken, env.TURNSTILE_SECRET || '', clientIp(request), value.purpose, requestHost);
  if (!turnstile.ok) {
    return respond(request, 403, { ok: false, message: 'The check did not pass. Try again.' }, origin);
  }

  if (!env.DB || !env.IP_HASH_SALT) {
    return respond(request, 503, { ok: false, message: 'This request cannot be stored right now.' }, origin);
  }

  try {
    await ensureSchema(env.DB);
    const now = new Date();
    const createdAt = now.toISOString();
    const hourAgo = new Date(now.getTime() - 60 * 60 * 1000).toISOString();
    const dayAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000).toISOString();
    const ipHash = await hashIp(clientIp(request), env.IP_HASH_SALT);

    await env.DB.prepare('DELETE FROM subscribe_hits WHERE created_at < ?').bind(dayAgo).run();
    const hits = await env.DB.prepare('SELECT COUNT(*) AS n FROM subscribe_hits WHERE ip_hash = ? AND created_at > ?').bind(ipHash, hourAgo).first();
    if (Number(hits?.n || 0) >= RATE_LIMIT_PER_HOUR) {
      return respond(request, 429, { ok: false, message: 'Too many requests. Try again later.' }, origin);
    }
    const prior = await env.DB.prepare('SELECT COUNT(*) AS n FROM subscribers WHERE email = ? AND site = ? AND created_at > ?').bind(value.email, SITE, dayAgo).first();
    if (Number(prior?.n || 0) >= EMAIL_CAP_PER_DAY) {
      return respond(request, 429, { ok: false, message: 'Too many requests. Try again later.' }, origin);
    }

    await env.DB.prepare('INSERT INTO subscribe_hits (ip_hash, created_at) VALUES (?, ?)').bind(ipHash, createdAt).run();
    const inserted = await env.DB.prepare(
      `INSERT INTO subscribers (email, page_url, purpose, extra, consent_text, created_at, ip_hash, site)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)
       ON CONFLICT(email, purpose) DO NOTHING`,
    ).bind(value.email, value.page_url, value.purpose, JSON.stringify(value.extra), value.consent_text, createdAt, ipHash, SITE).run();
    const stored = Number(inserted?.meta?.changes ?? 0) > 0;
    return respond(request, 200, { ok: true, stored, message: stored ? STORED : DUPLICATE }, origin);
  } catch {
    return respond(request, 503, { ok: false, message: 'This request cannot be stored right now.' }, origin);
  }
}

export async function onRequestOptions(context) {
  const origin = requestOrigin(context.request);
  if (!origin) return new Response(null, { status: 403 });
  return new Response(null, { status: 204, headers: { ...corsHeaders(origin), 'cache-control': 'no-store' } });
}

export async function onRequestPost(context) {
  return handleSubscribe(context.request, context.env);
}
