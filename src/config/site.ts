// Public contact address (Cloudflare Email Routing forwards it). Clear it to hide the Contact page links.
export const CONTACT_EMAIL = 'contact@thefaultcode.com';

/** "2026-10-23" -> "Oct 23, 2026" (UTC-safe). */
export function fmtDate(iso: string): string {
  const d = new Date(iso + 'T12:00:00Z');
  return isNaN(+d) ? iso : d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' });
}
