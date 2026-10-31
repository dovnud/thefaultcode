// Public contact address (Cloudflare Email Routing forwards it). Clear it to hide the Contact page links.
export const CONTACT_EMAIL = 'contact@thefaultcode.com';

/** "2026-10-23" -> "Oct 23, 2026" (UTC-safe). */
export function fmtDate(iso: string): string {
  const d = new Date(iso + 'T12:00:00Z');
  return isNaN(+d) ? iso : d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' });
}

export const SITE_URL = 'https://thefaultcode.com';
/** Shown on the request form and stored with each row. Do not reword without updating functions/_lib/validate.js. */
export const CONSENT_TEXT = "We'll only use your email for this request.";
/** Public Turnstile site key. The secret is the Pages env var TURNSTILE_SECRET, never this file. */
export const TURNSTILE_SITE_KEY: string = import.meta.env.PUBLIC_TURNSTILE_SITE_KEY || '0x4AAAAAAFtqDGEwH-mD2HM8';
export const EDITORIAL = 'The Fault Code editorial team';
/** Organization node reused in Article / WebSite / Dataset schema. No sameAs: add only profiles that really exist (see about.astro). */
export const ORG = { '@type': 'Organization', '@id': `${SITE_URL}/#organization`, name: 'The Fault Code', url: `${SITE_URL}/`, email: CONTACT_EMAIL };
/** Editorial author: an organization, never a made-up person. */
export const EDITORIAL_AUTHOR = { '@type': 'Organization', name: EDITORIAL, url: `${SITE_URL}/about/`, parentOrganization: { '@id': ORG['@id'] } };

/** Google Analytics 4 measurement ID (property "The Fault Code"). ONE value: override with the PUBLIC_GA_ID env var, or set to '' to disable. Only emitted in production builds. */
export const GA_MEASUREMENT_ID: string = import.meta.env.PUBLIC_GA_ID ?? 'G-HV4LDVBLNM';
