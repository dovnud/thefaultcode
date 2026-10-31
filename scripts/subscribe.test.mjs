import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { CONSENT_TEXT, hostAllowed, isHoneypot, validateSubmission } from '../functions/_lib/validate.js';
import { handleSubscribe, resetSchemaForTests } from '../functions/api/subscribe.js';

test('consent text matches the public site config', () => {
  const site = readFileSync(new URL('../src/config/site.ts', import.meta.url), 'utf8');
  assert.match(site, /We'll only use your email for this request\./);
  assert.equal(CONSENT_TEXT, "We'll only use your email for this request.");
});

test('validate accepts a code-page request and drops nothing required', () => {
  const result = validateSubmission({
    email: 'Reader@Example.com',
    page_url: '/goodman/ee6/',
    purpose: 'fix',
    consent: true,
    consent_text: CONSENT_TEXT,
    brand: 'Goodman',
    code: 'EE6',
    equipment: 'furnace',
  });
  assert.equal(result.ok, true);
  if (!result.ok) return;
  assert.equal(result.value.email, 'reader@example.com');
  assert.deepEqual(result.value.extra, { brand: 'Goodman', code: 'EE6', equipment: 'furnace' });
});

test('validate accepts a reminder and rejects a bad interval', () => {
  const ok = validateSubmission({
    email: 'reader@example.com',
    page_url: '/guides/furnace-air-filter-guide/',
    purpose: 'reminder',
    consent: 'yes',
    consent_text: CONSENT_TEXT,
    topic: 'filter',
    interval_days: '90',
  });
  assert.equal(ok.ok, true);
  if (ok.ok) assert.deepEqual(ok.value.extra, { topic: 'filter', interval_days: 90 });
  const bad = validateSubmission({
    email: 'reader@example.com',
    page_url: '/guides/furnace-air-filter-guide/',
    purpose: 'reminder',
    consent: 'yes',
    consent_text: CONSENT_TEXT,
    topic: 'deals',
    interval_days: '7',
  });
  assert.equal(bad.ok, false);
});

test('validate rejects bad email, external urls, and a mismatched consent line', () => {
  const badEmail = validateSubmission({ email: 'not-an-email', page_url: '/goodman/ee6/', purpose: 'fix', consent: true, consent_text: CONSENT_TEXT });
  assert.equal(badEmail.ok, false);
  const badUrl = validateSubmission({ email: 'reader@example.com', page_url: 'https://evil.example/phish', purpose: 'fix', consent: true, consent_text: CONSENT_TEXT });
  assert.equal(badUrl.ok, false);
  const badConsent = validateSubmission({ email: 'reader@example.com', page_url: '/goodman/ee6/', purpose: 'fix', consent: true, consent_text: 'Send me deals' });
  assert.equal(badConsent.ok, false);
});

test('localhost is not an allowed Turnstile host for production', () => {
  assert.equal(hostAllowed('localhost', 'thefaultcode.com'), false);
  assert.equal(hostAllowed('thefaultcode.com', 'thefaultcode.com'), true);
  assert.equal(hostAllowed('preview.thefaultcode.pages.dev', 'preview.thefaultcode.pages.dev'), true);
  assert.equal(isHoneypot({ company: 'filled' }), true);
  assert.equal(isHoneypot({ company: '' }), false);
});

function memoryDb() {
  const subscribers = [];
  const hits = [];
  function run(sql, args) {
    if (sql.startsWith('CREATE')) return { meta: { changes: 0 } };
    if (sql.startsWith('DELETE FROM subscribe_hits')) {
      const cut = args[0];
      const before = hits.length;
      for (let i = hits.length - 1; i >= 0; i -= 1) if (hits[i].created_at < cut) hits.splice(i, 1);
      return { meta: { changes: before - hits.length } };
    }
    if (sql.startsWith('INSERT INTO subscribe_hits')) {
      hits.push({ ip_hash: args[0], created_at: args[1] });
      return { meta: { changes: 1 } };
    }
    if (sql.startsWith('INSERT INTO subscribers')) {
      const row = { email: args[0], page_url: args[1], purpose: args[2], extra: args[3], consent_text: args[4], created_at: args[5], ip_hash: args[6] };
      if (subscribers.some((item) => item.email === row.email && item.purpose === row.purpose && item.page_url === row.page_url)) {
        return { meta: { changes: 0 } };
      }
      subscribers.push(row);
      return { meta: { changes: 1 } };
    }
    throw new Error(`unexpected run: ${sql}`);
  }
  function first(sql, args) {
    if (sql.includes('FROM subscribe_hits')) {
      return { n: hits.filter((hit) => hit.ip_hash === args[0] && hit.created_at > args[1]).length };
    }
    if (sql.includes('FROM subscribers')) {
      return { n: subscribers.filter((row) => row.email === args[0] && row.created_at > args[1]).length };
    }
    throw new Error(`unexpected first: ${sql}`);
  }
  function prepare(sql) {
    const stmt = {
      args: [],
      bind(...args) { stmt.args = args; return stmt; },
      run() { return Promise.resolve(run(sql, stmt.args)); },
      first() { return Promise.resolve(first(sql, stmt.args)); },
    };
    return stmt;
  }
  return {
    subscribers,
    hits,
    prepare,
    batch(stmts) { return Promise.all(stmts.map((stmt) => stmt.run())); },
  };
}

function post(body, headers = {}) {
  return new Request('https://thefaultcode.com/api/subscribe', {
    method: 'POST',
    headers: { 'content-type': 'application/json', origin: 'https://thefaultcode.com', ...headers },
    body: JSON.stringify(body),
  });
}

const fixBody = (page = '/goodman/ee6/') => ({
  email: 'reader@example.com',
  page_url: page,
  purpose: 'fix',
  consent: true,
  consent_text: CONSENT_TEXT,
  brand: 'Goodman',
  code: 'EE6',
  equipment: 'furnace',
});

test('stores a request, dedupes, and rate-limits', async () => {
  resetSchemaForTests();
  const db = memoryDb();
  const env = { DB: db, IP_HASH_SALT: 'test-salt' };
  const first = await handleSubscribe(post(fixBody()), env);
  assert.equal(first.status, 200);
  const firstBody = await first.json();
  assert.equal(firstBody.stored, true);
  assert.equal(firstBody.message, 'Request stored. Nothing was sent.');
  assert.equal(db.subscribers.length, 1);
  assert.equal(JSON.parse(db.subscribers[0].extra).code, 'EE6');
  assert.equal(db.subscribers[0].consent_text, CONSENT_TEXT);
  assert.match(db.subscribers[0].ip_hash, /^[a-f0-9]{64}$/);
  assert.equal(db.subscribers[0].ip_hash.includes('203.0.113.5'), false);

  const again = await handleSubscribe(post(fixBody(), { 'cf-connecting-ip': '203.0.113.5' }), env);
  const againBody = await again.json();
  assert.equal(again.status, 200);
  assert.equal(againBody.stored, false);
  assert.equal(db.subscribers.length, 1);

  for (let i = 0; i < 4; i += 1) {
    const response = await handleSubscribe(post(fixBody(`/carrier/${i}/`), { 'cf-connecting-ip': '203.0.113.5' }), env);
    assert.equal(response.status, 200);
  }
  const limited = await handleSubscribe(post(fixBody('/carrier/limited/'), { 'cf-connecting-ip': '203.0.113.5' }), env);
  assert.equal(limited.status, 429);
});

test('honeypot and a foreign origin store nothing', async () => {
  resetSchemaForTests();
  const db = memoryDb();
  const env = { DB: db, IP_HASH_SALT: 'test-salt' };
  const honey = await handleSubscribe(post({ ...fixBody(), company: 'acme' }), env);
  assert.equal(honey.status, 200);
  assert.equal(db.subscribers.length, 0);
  const foreign = await handleSubscribe(post(fixBody(), { origin: 'https://evil.example' }), env);
  assert.equal(foreign.status, 403);
  assert.equal(db.subscribers.length, 0);
});

test('turnstile is required when the secret is set', async () => {
  resetSchemaForTests();
  const db = memoryDb();
  const env = { DB: db, TURNSTILE_SECRET: 'secret', IP_HASH_SALT: 'test-salt' };
  const response = await handleSubscribe(post(fixBody()), env);
  assert.equal(response.status, 403);
  assert.equal(db.subscribers.length, 0);
});
