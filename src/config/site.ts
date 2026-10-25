// Public contact address (Cloudflare Email Routing forwards it). Clear it to hide the Contact page links.
export const CONTACT_EMAIL = 'contact@thefaultcode.com';

/** "2026-10-23" -> "Oct 23, 2026" (UTC-safe). */
export function fmtDate(iso: string): string {
  const d = new Date(iso + 'T12:00:00Z');
  return isNaN(+d) ? iso : d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' });
}

export const SITE_URL = 'https://thefaultcode.com';
export const EDITORIAL = 'The Fault Code editorial team';
/** Organization node reused in Article / WebSite / Dataset schema. No sameAs: add only profiles that really exist (see about.astro). */
export const ORG = { '@type': 'Organization', '@id': `${SITE_URL}/#organization`, name: 'The Fault Code', url: `${SITE_URL}/`, email: CONTACT_EMAIL };
/** Editorial author: an organization, never a made-up person. */
export const EDITORIAL_AUTHOR = { '@type': 'Organization', name: EDITORIAL, url: `${SITE_URL}/about/`, parentOrganization: { '@id': ORG['@id'] } };
