/** Shared rules for POST /api/subscribe. No I/O. */

export const CONSENT_TEXT = "We'll only use your email for this request.";
export const PURPOSES = ['fix', 'reminder'];
export const RATE_LIMIT_PER_HOUR = 5;
export const EMAIL_CAP_PER_DAY = 10;

const EMAIL =
  /^[a-z0-9](?:[a-z0-9._%+-]{0,62}[a-z0-9])?@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)+$/;

const PATH = /^\/[a-z0-9/-]+\/$/;

export function isHoneypot(data) {
  if (!data || typeof data !== 'object') return false;
  const value = data.company;
  if (typeof value === 'string') return value.trim() !== '';
  return value != null && value !== '';
}

function cleanLabel(value, max) {
  if (value == null || value === '') return '';
  if (typeof value !== 'string') return null;
  const text = value.replace(/[\u0000-\u001f\u007f]/g, '').trim();
  if (!text) return '';
  if (text.length > max) return null;
  if (!/^[A-Za-z0-9][A-Za-z0-9 .&/'+-]*$/.test(text)) return null;
  return text;
}

/**
 * @param {unknown} data
 * @returns {{ ok: true, value: { email: string, page_url: string, purpose: string, extra: Record<string, string | number>, consent_text: string, turnstileToken: string } } | { ok: false, message: string }}
 */
export function validateSubmission(data) {
  if (!data || typeof data !== 'object' || Array.isArray(data)) {
    return { ok: false, message: 'Check the form and try again.' };
  }
  const body = /** @type {Record<string, unknown>} */ (data);

  const emailRaw = typeof body.email === 'string' ? body.email.trim().toLowerCase() : '';
  if (!emailRaw || emailRaw.length > 254 || emailRaw.includes('..') || !EMAIL.test(emailRaw)) {
    return { ok: false, message: 'Enter a valid email address.' };
  }

  const purpose = body.purpose;
  if (purpose !== 'fix' && purpose !== 'reminder') {
    return { ok: false, message: 'Check the form and try again.' };
  }

  const pageUrl = body.page_url;
  if (typeof pageUrl !== 'string' || pageUrl.length > 300 || pageUrl.includes('//') || !PATH.test(pageUrl)) {
    return { ok: false, message: 'Check the form and try again.' };
  }

  const agreed = body.consent === true || body.consent === 'yes' || body.consent === 'true';
  if (!agreed || body.consent_text !== CONSENT_TEXT) {
    return { ok: false, message: 'Confirm that we may store this request.' };
  }

  /** @type {Record<string, string | number>} */
  const extra = {};
  if (purpose === 'fix') {
    for (const key of ['brand', 'code', 'equipment']) {
      const clean = cleanLabel(body[key], 60);
      if (clean === null) return { ok: false, message: 'Check the form and try again.' };
      if (clean) extra[key] = clean;
    }
  } else {
    const topic = body.topic;
    if (topic !== 'filter' && topic !== 'maintenance' && topic !== 'both') {
      return { ok: false, message: 'Choose what the reminder request is for.' };
    }
    const days = Number(body.interval_days);
    if (days !== 30 && days !== 60 && days !== 90 && days !== 180) {
      return { ok: false, message: 'Choose a reminder interval.' };
    }
    extra.topic = topic;
    extra.interval_days = days;
  }

  const token = body['cf-turnstile-response'];
  const turnstileToken = typeof token === 'string' ? token : '';
  if (turnstileToken.length > 2048) {
    return { ok: false, message: 'The check did not pass. Try again.' };
  }

  return {
    ok: true,
    value: {
      email: emailRaw,
      page_url: pageUrl,
      purpose,
      extra,
      consent_text: CONSENT_TEXT,
      turnstileToken,
    },
  };
}

const SITE_HOSTS = new Set(['thefaultcode.com', 'www.thefaultcode.com', 'thefaultcode.pages.dev']);

export function originAllowed(origin, requestHost) {
  if (!origin) return false;
  let url;
  try {
    url = new URL(origin);
  } catch {
    return false;
  }
  if (url.protocol !== 'https:' && url.protocol !== 'http:') return false;
  return hostAllowed(url.hostname, requestHost);
}

/** Hostnames that may solve Turnstile or send the form. Local hosts only match a local request. */
export function hostAllowed(hostname, requestHost) {
  const localRequest = requestHost === 'localhost' || requestHost === '127.0.0.1';
  const localHost = hostname === 'localhost' || hostname === '127.0.0.1';
  if (localHost || localRequest) return localHost && localRequest;
  if (SITE_HOSTS.has(hostname)) return true;
  return hostname.endsWith('.thefaultcode.pages.dev') && hostname.length < 120 && !hostname.includes('..');
}
