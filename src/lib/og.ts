// Open Graph / Twitter card specs: one entry per page path. Rendered to 1200x630 PNG at build by src/pages/og/[...path].png.ts.
import { getCollection } from 'astro:content';
import { CATEGORIES, catOf, codePath, groupCodes, typeLabel } from '../config/categories';
import { PARTS } from '../data';

export type OgSpec = { kind: 'code' | 'text'; kicker: string; title: string; sub?: string; big?: string; alt: string };
const clip = (s: string, n: number) => (s.length <= n ? s : s.slice(0, n - 1).replace(/\s+\S*$/, '') + '…');

/** Page path -> image URL path. '/' -> /og/home.png, '/goodman/ee6/' -> /og/goodman/ee6.png */
export const ogPath = (pathname: string) => `/og/${pathname === '/' ? 'home' : pathname.replace(/^\/|\/$/g, '')}.png`;

let memo: Promise<Map<string, OgSpec>> | null = null;
export function ogSpecs(): Promise<Map<string, OgSpec>> { return (memo ??= build()); }

async function build() {
  const m = new Map<string, OgSpec>();
  const codes = (await getCollection('codes')).filter(c => !c.data.example).map(c => c.data);
  const guides = await getCollection('guides');
  const groups = groupCodes(codes);
  const text = (path: string, kicker: string, title: string, sub: string, alt?: string) =>
    m.set(path, { kind: 'text', kicker, title, sub, alt: alt ?? `The Fault Code: ${title}. ${sub}` });
  text('/', 'Fault code field manual', 'Furnace, washer, dishwasher & AC error codes', `${codes.length} codes in plain English, each linked to the manufacturer manual it came from.`);
  text('/codes/', 'Code index', 'All error codes', `${codes.length} furnace, washer, dishwasher and AC codes, searchable.`);
  text('/guides/', 'Field guides', 'Troubleshooting guides', 'Furnace, washer, dishwasher and AC guides from manufacturer documentation.');
  text('/about/', 'About', 'How The Fault Code works', 'Every code is taken from a manufacturer manual or official support page, linked on each page.');
  text('/contact/', 'Contact', 'Contact The Fault Code', 'Corrections and questions.');
  text('/privacy/', 'Privacy', 'Privacy policy', 'Stored email requests, analytics, and how to ask for deletion.');
  text('/terms/', 'Terms', 'Terms of use', 'Information only, not professional advice.');
  text('/affiliate-disclosure/', 'Disclosure', 'Affiliate disclosure', 'How links that may earn us a commission are marked.');
  text('/parts/', 'Parts and tools', 'Parts and tools guides', `${PARTS.length} guides to the parts, tools and supplies named in the manuals.`);
  text('/data/', 'Open data', 'Fault code dataset', `${codes.length} codes with brand, category, meaning and source link. CSV and JSON download.`);
  for (const c of CATEGORIES) {
    const n = codes.filter(x => catOf(x).slug === c.slug).length;
    text(c.hub, c.name, `${c.name} error codes`, `${n} codes from official manufacturer documentation.`);
    text(`/parts/for/${c.slug}/`, 'Parts and tools', `Parts and tools for ${c.noun} codes`, 'What each part is, how to choose and test it, when to call a pro.');
  }
  for (const g of groups) {
    text(g.href, g.cat.name, `${g.brand} ${g.cat.noun} error codes`, `${g.codes.length} codes, each linked to the ${g.brand} source document.`);
    text(`/parts/for/${g.cat.slug}/${g.brandSlug}/`, 'Parts and tools', `Parts and tools for ${g.brand} ${g.cat.noun} codes`, `Which ${g.brand} codes name each part, tool or supply.`);
  }
  for (const e of codes) {
    const t = typeLabel(e);
    m.set(codePath(e), { kind: 'code', kicker: `${e.brand} ${t} fault code`, big: e.code, title: clip(e.meaning.replace(/\.$/, ''), 120),
      alt: `${e.brand} ${t} code ${e.code}: ${clip(e.meaning.replace(/\.$/, ''), 110)}. The Fault Code.` });
  }
  for (const g of guides) text(`/guides/${g.id}/`, 'Field guide', g.data.title, clip(g.data.answer, 120));
  for (const p of PARTS) text(`/parts/${p.slug}/`, `Parts and tools · ${p.kind}`, p.name, clip(p.summary, 120));
  return m;
}
