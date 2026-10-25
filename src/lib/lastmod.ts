// Per-URL last-modified dates for the sitemap and visible "updated" lines.
// Codes and guides: their own `updated` field. Hubs and indexes: the newest `updated` among the codes/guides they list.
// Static pages and the parts guides (which live in code): last git commit date of the source file, kept in src/data/lastmod.json.
import { readFileSync, readdirSync } from 'node:fs';
import { groupCodes, codePath } from '../config/categories';
import { HVAC_PARTS } from '../data/hvac';
import manifest from '../data/lastmod.json';

const read = (dir: string) => readdirSync(dir).map(f => ({ f, s: readFileSync(`${dir}/${f}`, 'utf8') }));
const max = (xs: string[]) => xs.filter(Boolean).sort().pop() ?? '';
const M = manifest as Record<string, string>;

let memo: Map<string, string> | null = null;
export function lastmodMap() {
  if (memo) return memo;
  const m = new Map<string, string>();
  const codes = read('src/content/codes').map(x => JSON.parse(x.s)).filter(c => !c.example);
  const guides = read('src/content/guides').map(x => ({ id: x.f.replace(/\.md$/, ''), updated: (x.s.match(/"?updated"?:\s*"?(\d{4}-\d\d-\d\d)/) ?? [])[1] ?? '' }));
  const codesMax = max(codes.map(c => c.updated));
  const partsMax = max([M['src/data/hvac.ts'], M['src/data/appliance.ts']]);
  m.set('/', max([codesMax, ...guides.map(g => g.updated)]));
  m.set('/codes/', codesMax); m.set('/data/', codesMax);
  m.set('/guides/', max(guides.map(g => g.updated)));
  for (const g of guides) m.set(`/guides/${g.id}/`, g.updated);
  for (const c of codes) m.set(codePath(c), c.updated);
  for (const g of groupCodes(codes)) {
    const d = max(g.codes.map(c => c.updated));
    m.set(g.href, d);
    m.set(`/parts/for/${g.cat.slug}/${g.brandSlug}/`, max([d, partsMax]));
  }
  for (const slug of ['furnaces', 'washers', 'dishwashers', 'ac']) {
    const d = max(codes.filter(c => groupCodes([c])[0]?.cat.slug === slug).map(c => c.updated));
    m.set(`/${slug}/`, d); m.set(`/parts/for/${slug}/`, max([d, partsMax]));
  }
  m.set('/parts/', max([partsMax, codesMax]));
  const hv = new Set(HVAC_PARTS.map(p => p.slug));
  return (memoParts(m, hv), (memo = m));
}
function memoParts(m: Map<string, string>, hv: Set<string>) {
  for (const slug of partSlugs) m.set(`/parts/${slug}/`, hv.has(slug) ? M['src/data/hvac.ts'] : M['src/data/appliance.ts']);
  for (const [path, f] of Object.entries({ '/about/': 'about', '/contact/': 'contact', '/privacy/': 'privacy', '/terms/': 'terms', '/affiliate-disclosure/': 'affiliate-disclosure' })) {
    const d = M[`src/pages/${f}.astro`]; if (d) m.set(path, d);
  }
}
import { TOOL_PARTS, WASHER_PARTS, DW_PARTS } from '../data/appliance';
const partSlugs = [...HVAC_PARTS, ...TOOL_PARTS, ...WASHER_PARTS, ...DW_PARTS].map(p => p.slug);

export const lastmodFor = (path: string) => lastmodMap().get(path);
/** Newest content date across the whole site (for About / Dataset "last updated"). */
export const siteUpdated = () => lastmodMap().get('/')!;
