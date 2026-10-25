// Rule-based mapping from a code's own causes / steps / parts list to the parts-and-tools guides, plus Amazon link builders.
// Nothing here invents content: a guide is attached to a code only when the code's own text mentions that part or check.
import { PARTS, partBySlug, type Part } from '../data';
import { amazonLink, amazonAsinLink, affiliates } from '../config/affiliates';
import { catOf, type CodeData } from '../config/categories';

export const BRAND_NAMES = ['Goodman', 'Trane', 'Carrier', 'Rheem', 'Lennox', 'LG', 'Samsung', 'Whirlpool', 'Bosch', 'GE'];

/** partKey in a code's JSON -> guide slug (keys with no guide, such as gas-valve, are omitted on purpose). */
const KEY_TO_SLUG: Record<string, string> = {
  'flame-sensor': 'flame-sensor', 'steel-wool': 'flame-sensor', igniter: 'hot-surface-igniter', 'pressure-switch': 'pressure-switch',
  'pressure-hose': 'pressure-switch-hose', inducer: 'inducer-motor', 'blower-motor': 'blower-motor', capacitor: 'run-capacitor',
  'control-board': 'control-board', fuse: 'control-board', 'limit-switch': 'limit-and-rollout-switches', 'rollout-switch': 'limit-and-rollout-switches',
  thermostat: 'thermostat', filter: 'hvac-air-filter', 'washer-cleaner': 'washer-cleaner', 'he-detergent': 'he-detergent',
  'washer-fill-hose': 'washer-inlet-hoses', 'washer-drain-hose': 'washer-drain-hose', 'dishwasher-descaler': 'dishwasher-descaler',
  'dishwasher-salt': 'dishwasher-salt', 'dishwasher-detergent': 'dishwasher-detergent', 'dishwasher-fill-hose': 'dishwasher-supply-line',
  'dishwasher-drain-hose': 'dishwasher-drain-hose',
};
export const slugForKey = (k: string) => KEY_TO_SLUG[k];

type Rule = [slug: string, cats: string[], re: RegExp];
const H = ['furnaces'], HA = ['furnaces', 'ac'], W = ['washers'], D = ['dishwashers'];
const RULES: Rule[] = [
  ['flame-sensor', H, /flame (sensor|signal|current|sens)|oxide/i],
  ['hot-surface-igniter', H, /igniter/i],
  ['pressure-switch', H, /pressure switch|prove switch/i],
  ['pressure-switch-hose', H, /(pressure|switch).*(hose|tubing|tube)|(hose|tubing).*(pressure|switch)/i],
  ['inducer-motor', H, /inducer|draft (motor|blower)/i],
  ['blower-motor', H, /blower|circulator/i],
  ['run-capacitor', HA, /capacitor/i],
  ['control-board', H, /control board|\bfuse\b/i],
  ['limit-and-rollout-switches', H, /\blimit\b|rollout/i],
  ['thermostat', HA, /thermostat/i],
  ['hvac-air-filter', HA, /\bfilters?\b(?![\s-]*drier)/i],
  ['coil-cleaning', ['ac'], /\bcoils?\b/i],
  ['multimeter', ['furnaces', 'ac', 'washers', 'dishwashers'], /\bohms?\b|microamp|continuity|\bvolts?\b|voltage|resistance (of|between|across|check)|electrical resistance/i],
  ['washer-drain-pump-filter', W, /pump filter|drain filter|debris filter/i],
  ['washer-drain-hose', W, /drain hose|standpipe/i],
  ['washer-inlet-hoses', W, /(inlet|supply|fill|water|hot and cold) hoses?|hoses (go|are)|\bfaucets?\b|supply valves?|water taps?/i],
  ['washer-cleaner', W, /tub clean|washer cleaner|clean washer|affresh/i],
  ['he-detergent', W, /detergent|suds/i],
  ['leveling-tools', ['washers', 'dishwashers'], /not level|unlevel|(is|are) level|level (on|it|the)|levell?ing|a level\b/i],
  ['dishwasher-filter-cleaning', D, /\bfilters?\b/i],
  ['dishwasher-drain-hose', D, /drain hose|air gap|high loop|disposal|disposer/i],
  ['dishwasher-supply-line', D, /inlet hose|supply line|water supply|supply hose|shut-?off valve|supply valve/i],
  ['dishwasher-descaler', D, /limescale|descal|\bscale\b/i],
  ['dishwasher-salt', D, /softening salt|\bsalt\b/i],
  ['dishwasher-detergent', D, /detergent|suds|dish soap/i],
];

/** Parts whose Amazon links may appear on a CODE page (things a homeowner can reasonably do). Everything else gets the guide link only. */
const CODE_SHOP = new Set(['flame-sensor', 'hot-surface-igniter', 'pressure-switch-hose', 'hvac-air-filter', 'thermostat', 'coil-cleaning', 'nut-driver-set', 'leveling-tools',
  'washer-drain-pump-filter', 'washer-drain-hose', 'washer-inlet-hoses', 'washer-cleaner', 'he-detergent', 'dishwasher-filter-cleaning', 'dishwasher-drain-hose',
  'dishwasher-supply-line', 'dishwasher-descaler', 'dishwasher-salt', 'dishwasher-detergent']);

const clean = (s: string) => s.replace(/^Technician:\s*/i, '').trim();
const clip = (s: string, n = 170) => s.length <= n ? s : s.slice(0, n - 1).replace(/\s+\S*$/, '') + '…';

export type CodeGuide = { part: Part; why: string; tech: boolean; shop: boolean };

/** Guides that apply to this code, each with the code's own sentence that triggered it. */
export function guidesForCode(e: CodeData): CodeGuide[] {
  const cat = catOf(e).slug;
  const lines: string[] = [...e.causes, ...e.diySteps];
  const hit = new Map<string, string>();
  for (const [slug, cats, re] of RULES) {
    if (!cats.includes(cat)) continue;
    const l = lines.find(x => re.test(x));
    if (l) hit.set(slug, l);
  }
  for (const p of e.parts ?? []) {
    const slug = KEY_TO_SLUG[p.partKey];
    if (slug && !hit.has(slug) && partBySlug(slug)?.cats.includes(cat)) hit.set(slug, `Parts list for this code: ${p.name}`);
  }
  if ((hit.has('flame-sensor') || hit.has('hot-surface-igniter')) && cat === 'furnaces') hit.set('nut-driver-set', 'Panels and parts on a furnace are held by hex-head screws; a nut driver grips them without stripping.');
  const out: CodeGuide[] = [];
  for (const [slug, line] of hit) {
    const part = partBySlug(slug); if (!part) continue;
    const src = lines.find(x => x === line);
    out.push({ part, why: src ? clip(clean(line)) : line, tech: src ? /^Technician:/i.test(line) : false, shop: part.shop && CODE_SHOP.has(slug) });
  }
  // homeowner-actionable first, multimeter last
  const rank = (g: CodeGuide) => (g.part.slug === 'multimeter' ? 3 : !g.shop ? 2 : g.tech ? 1 : 0);
  return out.sort((a, b) => rank(a) - rank(b));
}

const NO_BRAND = new Set(['he-detergent', 'dishwasher-detergent', 'dishwasher-salt', 'furnace-filter-sizes', 'thermostat', 'coil-cleaning', 'leveling-tools']);
export const brandSearchOk = (p: Part) => p.kind !== 'tool' && !NO_BRAND.has(p.slug);
const hash = (s: string) => [...s].reduce((a, c) => (a * 31 + c.charCodeAt(0)) >>> 0, 7);
export type Link = { href: string; label: string; kind: 'asin' | 'search' };

const otherBrand = (txt: string, brand?: string) => BRAND_NAMES.some(b => b !== brand && new RegExp(`\\b${b}\\b`).test(txt));
export const asinLinks = (p: Part, max = 99): Link[] => p.asins.slice(0, max).map(a => ({ href: amazonAsinLink(a.asin), label: a.label, kind: 'asin' as const }));
export const searchLink = (term: string, label: string): Link => ({ href: amazonLink(term), label, kind: 'search' });

/** Compact link set for one guide on a code or brand page: <=2 product links, 1 brand search, 2 rotated generic searches. */
export function compactLinks(p: Part, brand: string | undefined, seed: string): Link[] {
  if (!affiliates.amazon.enabled || !p.shop) return [];
  const out: Link[] = [...asinLinks(p, 2)];
  const generic = p.terms.filter(x => !otherBrand(`${x.label} ${x.term}`) );
  if (brand && brandSearchOk(p)) out.push(searchLink(`${brand} ${p.noun}`, `${brand} ${p.noun}`));
  const g = generic.length ? generic : [];
  const start = g.length ? hash(seed + p.slug) % g.length : 0;
  for (let i = 0; i < Math.min(2, g.length); i++) { const t = g[(start + i) % g.length]; out.push(searchLink(t.term, t.label)); }
  const seen = new Set<string>(); return out.filter(l => !seen.has(l.href) && seen.add(l.href));
}

/** Every link for the full guide page, grouped. */
export function fullLinks(p: Part, brands: string[]) {
  if (!affiliates.amazon.enabled || !p.shop) return { products: [] as Link[], searches: [] as Link[], byBrand: [] as Link[] };
  const products = asinLinks(p);
  const searches = p.terms.filter(t => !BRAND_NAMES.some(b => new RegExp(`\\b${b}\\b`).test(`${t.label} ${t.term}`))).map(t => searchLink(t.term, t.label));
  const byBrand = !brandSearchOk(p) ? [] : brands.map(b => searchLink(`${b} ${p.noun}`, `${b} ${p.noun}`));
  return { products, searches, byBrand };
}

export const partUrl = (slug: string) => `/parts/${slug}/`;
export const partsCatUrl = (cat: string) => `/parts/for/${cat}/`;
export const partsBrandUrl = (cat: string, brand: string) => `/parts/for/${cat}/${brand}/`;
export { PARTS, partBySlug };

/** slug -> codes (from `codes`) whose own text triggers that guide. */
export function usage(codes: CodeData[]) {
  const m = new Map<string, { part: Part; codes: CodeData[] }>();
  for (const c of codes) for (const g of guidesForCode(c)) {
    if (g.part.slug === 'nut-driver-set') continue;
    const x = m.get(g.part.slug) ?? { part: g.part, codes: [] }; x.codes.push(c); m.set(g.part.slug, x);
  }
  return m;
}
