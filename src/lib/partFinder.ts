// Part finder: a code points at a part only when that code's own published text
// (meaning, causes, or checks, taken from the linked manufacturer document) names the part.
// A part listed in the JSON but not named in that text is left out.
import { codePath, type CodeData } from '../config/categories';

export const FINDER_UPDATED = '2026-10-31';
export const WINTER_GUIDE = '/guides/furnace-no-heat-winter-2026/';

/** Parts-guide slugs that should link the winter no-heat checklist. */
export const WINTER_PART_GUIDES = new Set([
  'flame-sensor', 'hot-surface-igniter', 'pressure-switch', 'pressure-switch-hose', 'inducer-motor',
  'hvac-air-filter', 'furnace-filter-sizes', 'limit-and-rollout-switches', 'blower-motor', 'multimeter', 'control-board',
]);

const MANUALS: Record<string, string> = {
  'https://cdn.daikincloud.io/PIM/Assets/Documents/IM-IOG-2037B.pdf': 'Goodman GR9S96/GD9S96 installation and operating guide (IOG-2037B)',
  'https://hvactechgroup.com/files/59sc5.pdf': 'Carrier 59SC5 installation, start-up and operating instructions',
  'https://pts.rheem.com/docstore/webdocs/Public/ServicePublic/Trouble2a/pdfs/Gas_Furnace/R96V/92-24161-124-03_R96V.pdf': 'Rheem R96V installation instructions (92-24161-124-03)',
  'https://www.wbmemphis.com/customer/docs/skudocs/s9v2-sf-2a-en-03052021.pdf': 'Trane S9V2 Service Facts (S9V2-SF-2A-EN)',
  'https://www.lennox.com/dA/c7cd7e796f/Lennox_ML180UH_IOM.pdf': 'Lennox ML180UH installation and operation manual',
  'https://www.shareddocs.com/hvac/docs/1009/Public/01/25VNA8-24VNA9-4SM.pdf': 'Carrier Infinity 25VNA8 / 24VNA9 service manual',
  'https://daikincomfort.com/docs/default-source/cscf/sm-rs6200007r27.pdf': 'Goodman service manual RS6200007 r27',
};

export type FinderPart = {
  slug: string;
  name: string;
  partKey: string;
  cat: 'furnaces' | 'washers' | 'dishwashers';
  /** Gas, venting, or live electrical work a licensed technician should do. */
  tech: boolean;
  /** Existing parts-guide slug, when this site already explains the part. */
  guideSlug?: string;
  score: (text: string) => number;
};

const has = (re: RegExp, text: string, n: number) => (re.test(text) ? n : 0);

export const FINDER_PARTS: FinderPart[] = [
  { slug: 'flame-sensor', name: 'Flame sensor', partKey: 'flame-sensor', cat: 'furnaces', tech: true, guideSlug: 'flame-sensor',
    score: t => has(/flame sens(?:or|e rod)|flame rod|sense rod/i, t, 3) },
  { slug: 'igniter', name: 'Hot surface igniter', partKey: 'igniter', cat: 'furnaces', tech: true, guideSlug: 'hot-surface-igniter',
    score: t => has(/\bigniters?\b|\bignitors?\b/i, t, 3) },
  { slug: 'pressure-switch', name: 'Pressure switch', partKey: 'pressure-switch', cat: 'furnaces', tech: true, guideSlug: 'pressure-switch',
    score: t => has(/pressure switch|prove switch/i, t, 3) },
  { slug: 'pressure-hose', name: 'Pressure switch hose', partKey: 'pressure-hose', cat: 'furnaces', tech: true, guideSlug: 'pressure-switch-hose',
    score: t => has(/pressure switch hoses?|pressure tubing/i, t, 3) || has(/(pressure|switch).{0,48}(hose|tubing)|(hose|tubing).{0,48}(pressure|switch)/i, t, 2) },
  { slug: 'inducer', name: 'Inducer (draft) motor', partKey: 'inducer', cat: 'furnaces', tech: true, guideSlug: 'inducer-motor',
    score: t => has(/inducer|induced draft|draft blower|combustion air inducer/i, t, 3) },
  { slug: 'filter', name: 'Furnace air filter', partKey: 'filter', cat: 'furnaces', tech: false, guideSlug: 'hvac-air-filter',
    score: t => has(/\bfilters?\b/i, t, 3) },
  { slug: 'limit-switch', name: 'Limit switch', partKey: 'limit-switch', cat: 'furnaces', tech: true, guideSlug: 'limit-and-rollout-switches',
    score: t => has(/\blimit\b/i, t, 3) },
  { slug: 'rollout-switch', name: 'Rollout switch', partKey: 'rollout-switch', cat: 'furnaces', tech: true, guideSlug: 'limit-and-rollout-switches',
    score: t => has(/roll[ -]?out/i, t, 3) },
  { slug: 'blower-motor', name: 'Blower motor', partKey: 'blower-motor', cat: 'furnaces', tech: true, guideSlug: 'blower-motor',
    score: t => has(/blower motor|circulator|blower wheel/i, t, 3) },
  { slug: 'capacitor', name: 'Run capacitor', partKey: 'capacitor', cat: 'furnaces', tech: true, guideSlug: 'run-capacitor',
    score: t => has(/capacitor/i, t, 3) },
  { slug: 'control-board', name: 'Control board', partKey: 'control-board', cat: 'furnaces', tech: true, guideSlug: 'control-board',
    score: t => has(/control board|integrated control|control module|\bIFC\b/i, t, 3) || has(/defective control|faulty control|replace the control|relay on control|stuck on control/i, t, 2) },
  { slug: 'fuse', name: 'Control-board fuse', partKey: 'fuse', cat: 'furnaces', tech: true, guideSlug: 'control-board',
    score: t => has(/\bfuse\b/i, t, 3) },
  { slug: 'gas-valve', name: 'Gas valve', partKey: 'gas-valve', cat: 'furnaces', tech: true,
    score: t => has(/gas valve/i, t, 3) },
  { slug: 'washer-fill-hose', name: 'Washer inlet hose', partKey: 'washer-fill-hose', cat: 'washers', tech: false, guideSlug: 'washer-inlet-hoses',
    score: t => has(/inlet hoses?|water inlet|supply hoses?|fill hoses?/i, t, 3) },
  { slug: 'washer-drain-hose', name: 'Washer drain hose', partKey: 'washer-drain-hose', cat: 'washers', tech: false, guideSlug: 'washer-drain-hose',
    score: t => has(/drain hose|standpipe/i, t, 3) },
  { slug: 'dishwasher-fill-hose', name: 'Dishwasher inlet hose', partKey: 'dishwasher-fill-hose', cat: 'dishwashers', tech: false, guideSlug: 'dishwasher-supply-line',
    score: t => has(/inlet (?:water )?hose|supply line|supply hose|fill hose/i, t, 3) },
  { slug: 'dishwasher-drain-hose', name: 'Dishwasher drain hose', partKey: 'dishwasher-drain-hose', cat: 'dishwashers', tech: false, guideSlug: 'dishwasher-drain-hose',
    score: t => has(/drain hose|drain line/i, t, 3) },
];

const byKey = new Map(FINDER_PARTS.map(p => [p.partKey, p]));
const bySlug = new Map(FINDER_PARTS.map(p => [p.slug, p]));
export const finderBySlug = (slug: string) => bySlug.get(slug);
export const finderPath = (slug: string) => `/part-finder/${slug}/`;

/** Parts-guide slug -> finder slugs (the control-board guide covers the fuse; limit and rollout share one guide). */
export const GUIDE_TO_FINDER: Record<string, string[]> = {};
for (const p of FINDER_PARTS) {
  if (!p.guideSlug) continue;
  (GUIDE_TO_FINDER[p.guideSlug] ??= []).push(p.slug);
}

export function sourceName(code: CodeData): string {
  if (typeof code.sourceTitle === 'string' && code.sourceTitle) return code.sourceTitle;
  const url = code.sourceManualUrl as string | undefined;
  if (url && MANUALS[url]) return MANUALS[url];
  return `${code.brand} documentation`;
}

export type FinderHit = {
  part: FinderPart;
  quote: string;
  sourceName: string;
  sourceUrl: string;
};

function bestQuote(part: FinderPart, code: CodeData): string | null {
  const lines: { text: string; rank: number }[] = [
    ...(code.causes ?? []).map((text: string) => ({ text, rank: 0 })),
    { text: code.meaning, rank: 1 },
    ...(code.diySteps ?? []).map((text: string) => ({ text, rank: 2 })),
  ];
  let best: { text: string; rank: number; score: number } | null = null;
  for (const line of lines) {
    if (!line.text) continue;
    const score = part.score(line.text);
    if (score <= 0) continue;
    if (!best || score > best.score || (score === best.score && line.rank < best.rank)) best = { text: line.text, rank: line.rank, score };
  }
  return best?.text ?? null;
}

/** Parts this code's manufacturer document names, each with the sentence that names it. */
export function partsForCode(code: CodeData): FinderHit[] {
  const url = code.sourceManualUrl as string | undefined;
  if (!url || code.example) return [];
  const out: FinderHit[] = [];
  for (const row of code.parts ?? []) {
    const part = byKey.get(row.partKey);
    if (!part) continue;
    const quote = bestQuote(part, code);
    if (!quote) continue;
    out.push({ part, quote, sourceName: sourceName(code), sourceUrl: url });
  }
  const order = new Map(FINDER_PARTS.map((p, i) => [p.slug, i]));
  return out.sort((a, b) => (order.get(a.part.slug) ?? 0) - (order.get(b.part.slug) ?? 0));
}

export type CodeHit = FinderHit & { code: CodeData; href: string };

export function codesForPart(slug: string, codes: CodeData[]): CodeHit[] {
  const out: CodeHit[] = [];
  for (const code of codes) {
    const hit = partsForCode(code).find(h => h.part.slug === slug);
    if (hit) out.push({ ...hit, code, href: codePath(code) });
  }
  return out.sort((a, b) => a.code.brand.localeCompare(b.code.brand) || a.code.code.localeCompare(b.code.code, 'en', { numeric: true }));
}
