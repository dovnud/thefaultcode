import { readFileSync } from 'node:fs';
import { SITE_URL } from '../config/site';

/** Markdown body of a guide, with root-relative links made absolute. */
export function guideBody(id: string): string {
  const raw = readFileSync(`src/content/guides/${id}.md`, 'utf8');
  const i = raw.indexOf('\n---\n');
  return (i >= 0 ? raw.slice(i + 5) : raw).trim().replace(/\]\(\//g, `](${SITE_URL}/`);
}
