// Equipment categories. Furnaces keep their original URLs (/{brand}/ and /{brand}/{code}/);
// every other category lives under its own prefix (/washers/{brand}/{code}/ etc.) so brand slugs never collide.
import { DEALER_LOCATORS, APPLIANCE_SERVICE } from './affiliates';

export type CodeData = { brand: string; brandSlug: string; equipmentType: string; code: string; codeSlug: string; [k: string]: any };
export type Cat = {
  slug: 'furnaces' | 'washers' | 'dishwashers' | 'ac';
  hub: string;            // hub URL
  nav: string;            // short nav label
  name: string;           // heading label, e.g. "Washing machines"
  label: string;          // singular phrase used in titles and H1s, e.g. "washing machine"
  noun: string;           // singular noun used in sentences
  aliases: string;        // extra search words
  kind: 'hvac' | 'appliance';
  techTitle: string; techText: string;
  bar: [string, string];  // [label, message] safety strip
};

export const CATEGORIES: Cat[] = [
  { slug: 'furnaces', hub: '/furnaces/', nav: 'Furnaces', name: 'Furnaces', label: 'furnace', noun: 'furnace', aliases: 'furnace heater heating', kind: 'hvac',
    techTitle: 'Need a technician?',
    techText: "Gas, venting, wiring and control-board repairs should be done by a licensed HVAC pro. Your gas utility or the manufacturer's dealer locator are good places to start.",
    bar: ['Smell gas?', 'If you smell gas, leave the building and call your gas utility from outside.'] },
  { slug: 'washers', hub: '/washers/', nav: 'Washers', name: 'Washing machines', label: 'washing machine', noun: 'washing machine', aliases: 'washer washing machine laundry', kind: 'appliance',
    techTitle: 'Need a technician?',
    techText: "Motor, heater, sensor, door-lock and control-board repairs should be done by a qualified appliance technician. The manufacturer's own service-request page is a good place to start.",
    bar: ['Unplug first', 'Unplug the washer and turn off the water taps before you reach behind it, clean a filter or touch any hose.'] },
  { slug: 'dishwashers', hub: '/dishwashers/', nav: 'Dishwashers', name: 'Dishwashers', label: 'dishwasher', noun: 'dishwasher', aliases: 'dishwasher dishwashing', kind: 'appliance',
    techTitle: 'Need a technician?',
    techText: "Pump, heater, sensor, valve and control-board repairs should be done by a qualified appliance technician. The manufacturer's own service-request page is a good place to start.",
    bar: ['Power off first', 'Switch the dishwasher off at its breaker and let the tub cool before you clean a filter or reach into the base.'] },
  { slug: 'ac', hub: '/ac/', nav: 'AC & heat pumps', name: 'AC and heat pumps', label: 'AC and heat pump', noun: 'AC / heat pump', aliases: 'ac air conditioner conditioning heat pump condenser cooling', kind: 'hvac',
    techTitle: 'Need a technician?',
    techText: "Refrigerant, high-voltage wiring, compressor and control-board work must be done by a licensed HVAC technician. The manufacturer's dealer locator is a good place to start.",
    bar: ['High voltage', 'Outdoor units carry line voltage even when the thermostat is off. Switch off the disconnect and the breaker before opening any panel.'] },
];

/** Title-case a label for page titles (keeps 'and' lower-case, AC upper-case). */
export const titleCase = (s: string) => s.replace(/\b[a-z]+/g, w => (w === 'and' ? w : w[0].toUpperCase() + w.slice(1)));
export const catBySlug = (s: string) => CATEGORIES.find(c => c.slug === s)!;
const APPLIANCE_TYPES: Record<string, Cat['slug']> = { 'washing-machine': 'washers', dishwasher: 'dishwashers', 'ac-heat-pump': 'ac', 'air-conditioner': 'ac', 'heat-pump': 'ac', 'mini-split': 'ac' };
export const catOf = (e: CodeData): Cat => catBySlug(APPLIANCE_TYPES[e.equipmentType] ?? 'furnaces');

/** Human label for the "Type:" chip, titles and descriptions. */
const TYPE_LABELS: Record<string, string> = { 'washing-machine': 'washing machine', 'ac-heat-pump': 'AC / heat pump', 'air-conditioner': 'air conditioner', 'heat-pump': 'heat pump', 'mini-split': 'mini-split' };
export const typeLabel = (e: CodeData) => TYPE_LABELS[e.equipmentType] ?? e.equipmentType.replace(/-/g, ' ');

export const brandPath = (e: CodeData) => { const c = catOf(e); return c.slug === 'furnaces' ? `/${e.brandSlug}/` : `/${c.slug}/${e.brandSlug}/`; };
export const codePath = (e: CodeData) => `${brandPath(e)}${e.codeSlug}/`;
/** Words the search box / filters should also match for this code (e.g. "washer" for a washing machine). */
export const searchText = (e: CodeData) => `${e.brand} ${e.code} ${e.meaning} ${typeLabel(e)} ${catOf(e).aliases}`.toLowerCase();

/** Group codes into [{cat, brandSlug, brand, href, codes}] ordered by category then brand. Furnace order is left untouched. */
export function groupCodes(codes: CodeData[]) {
  const out: { cat: Cat; brandSlug: string; brand: string; href: string; codes: CodeData[] }[] = [];
  for (const cat of CATEGORIES) {
    const inCat = codes.filter(c => catOf(c).slug === cat.slug);
    const brands = [...new Map(inCat.map(c => [c.brandSlug, c.brand])).entries()].sort((a, b) => a[1].localeCompare(b[1]));
    for (const [brandSlug, brand] of brands) {
      let list = inCat.filter(c => c.brandSlug === brandSlug);
      if (cat.slug !== 'furnaces') list = [...list].sort((a, b) => a.code.localeCompare(b.code, 'en', { numeric: true, sensitivity: 'base' }));
      out.push({ cat, brandSlug, brand, href: brandPath(list[0]), codes: list });
    }
  }
  return out;
}

/** Official "find a pro / request service" link for a code, or null when we have no verified URL for that brand. */
export function proLocator(e: CodeData): { url: string; kind: 'dealer' | 'service' } | null {
  const c = catOf(e);
  if (c.kind === 'hvac') { const u = DEALER_LOCATORS[e.brandSlug]; return u ? { url: u, kind: 'dealer' } : null; }
  const u = APPLIANCE_SERVICE[e.brandSlug]; return u ? { url: u, kind: 'service' } : null;
}
export const locatorLabel = (e: CodeData, l: { kind: string }) => l.kind === 'dealer' ? `Find a ${e.brand} dealer` : `Request ${e.brand} service`;
export const locatorSr = (l: { kind: string }) => l.kind === 'dealer' ? ' (official locator, opens in a new tab)' : ' (official service page, opens in a new tab)';
export const locatorNote = (e: CodeData, l: { kind: string }) => l.kind === 'dealer'
  ? `Opens ${e.brand}'s official dealer locator. Dealers are independent businesses; we do not endorse or earn from them.`
  : `Opens ${e.brand}'s official service-request page. We do not earn anything from it.`;
