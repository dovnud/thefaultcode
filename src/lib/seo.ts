// Head and JSON-LD helpers. Every page's <title>, meta description and a single
// @graph are produced here so the rules apply to all routes, not one template.
import { CONTACT_EMAIL, SITE_URL } from '../config/site';

const ORG_ID = `${SITE_URL}/#organization`;
const SITE_ID = `${SITE_URL}/#website`;
const LOGO_URL = `${SITE_URL}/logo.png`;
const SUFFIX = ' | The Fault Code';

/** SERP title: 15–60 characters. Query first; drop the brand suffix before truncating. */
export function fitTitle(raw: string): string {
  let t = (raw || 'The Fault Code').replace(/\s+/g, ' ').trim();
  if (t.length > 60 && t.endsWith(SUFFIX)) t = t.slice(0, -SUFFIX.length).trim();
  if (t.length > 60) t = t.replace(SUFFIX, '').trim();
  if (t.length > 60) t = t.replace(/:\s*Meaning & Fix$/, '').trim();
  if (t.length > 60) {
    const cut = t.slice(0, 60);
    const sp = cut.lastIndexOf(' ');
    t = (sp >= 15 ? cut.slice(0, sp) : cut).replace(/[:|,–\-&]\s*$/, '').trim();
  }
  if (t.length < 15) {
    const branded = t.includes('The Fault Code') ? t : `${t}${SUFFIX}`;
    t = branded.length <= 60 ? branded : t;
  }
  return t.length > 60 ? t.slice(0, 60).trim() : t;
}

/** Meta description in the 120–155 band (always inside 70–160). */
export function fitDesc(raw: string): string {
  let d = (raw || '').replace(/\s+/g, ' ').trim();
  if (!d) d = 'Furnace, washer, dishwasher and AC error codes in plain English, from manufacturer manuals.';
  const extra = ' From manufacturer manuals and official support pages.';
  if (d.length < 120 && !/manufacturer manual/i.test(d) && (d.replace(/\.$/, '') + '.' + extra).length <= 155) {
    d = d.replace(/\.$/, '') + '.' + extra;
  }
  if (d.length < 70) d = (d.replace(/\.$/, '') + '.' + extra).trim();
  if (d.length > 155) {
    const cut = d.slice(0, 155);
    const sp = cut.lastIndexOf(' ');
    d = (sp >= 70 ? cut.slice(0, sp) : cut).replace(/[,:;–\-]\s*$/, '').trim();
  }
  if (d.length > 160) d = d.slice(0, 160).trim();
  if (d.length < 70) d = (d + ' Plain-English fault code meanings.').slice(0, 155).trim();
  return d;
}

export function toIso(v: unknown): string {
  const s = String(v ?? '').trim();
  if (/^\d{4}-\d{2}-\d{2}$/.test(s)) return `${s}T00:00:00Z`;
  if (/^\d{4}-\d{2}-\d{2}T/.test(s)) return s;
  return s;
}

const typesOf = (n: Record<string, unknown>) => (Array.isArray(n['@type']) ? n['@type'] : [n['@type']]).filter(Boolean) as string[];

function flatten(jsonld: unknown): Record<string, unknown>[] {
  const arr = jsonld == null ? [] : Array.isArray(jsonld) ? jsonld : [jsonld];
  const out: Record<string, unknown>[] = [];
  for (const item of arr) {
    if (!item || typeof item !== 'object') continue;
    const n = item as Record<string, unknown>;
    if (Array.isArray(n['@graph'])) out.push(...(n['@graph'] as Record<string, unknown>[]));
    else out.push(n);
  }
  return out.map(n => {
    const copy = { ...n };
    delete copy['@context'];
    return copy;
  });
}

function labelSegment(seg: string): string {
  const known: Record<string, string> = {
    furnaces: 'Furnaces', washers: 'Washers', dishwashers: 'Dishwashers', ac: 'AC and heat pumps',
    guides: 'Guides', parts: 'Parts and tools', codes: 'All codes', about: 'About', contact: 'Contact',
    privacy: 'Privacy', terms: 'Terms of Use', 'affiliate-disclosure': 'Affiliate disclosure', data: 'Dataset',
    ge: 'GE', lg: 'LG',
  };
  if (known[seg]) return known[seg];
  return seg.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}

function autoCrumb(path: string, title: string) {
  const parts = path.split('/').filter(Boolean);
  const items = [{ '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` }];
  let acc = '';
  parts.forEach((p, i) => {
    acc += `/${p}`;
    const last = i === parts.length - 1;
    items.push({
      '@type': 'ListItem',
      position: i + 2,
      name: last ? title.replace(SUFFIX, '') : labelSegment(p),
      item: `${SITE_URL}${acc}/`,
    });
  });
  return { '@type': 'BreadcrumbList', itemListElement: items };
}

const STAMP = new Set(['Article', 'NewsArticle', 'BlogPosting', 'CollectionPage', 'AboutPage', 'ContactPage', 'Dataset', 'FAQPage', 'HowTo', 'ItemList', 'WebPage', 'ProfilePage']);

/** One @graph: Organization, WebSite, WebPage, breadcrumbs (not on the homepage), plus the page's own entities. */
export function pageGraph(opts: { title: string; description: string; url: string; path: string; dateModified: string; jsonld: unknown }) {
  const dateModified = toIso(opts.dateModified);
  const crumbs: Record<string, unknown>[] = [];
  const extras: Record<string, unknown>[] = [];
  for (const n of flatten(opts.jsonld)) {
    const types = typesOf(n);
    if (types.includes('Organization') || types.includes('WebSite')) continue;
    const crumb = n.breadcrumb as Record<string, unknown> | undefined;
    if (crumb && (crumb['@type'] === 'BreadcrumbList' || (Array.isArray(crumb['@type']) && (crumb['@type'] as string[]).includes('BreadcrumbList')))) {
      crumbs.push(crumb);
      delete n.breadcrumb;
    }
    if (types.includes('BreadcrumbList')) { crumbs.push(n); continue; }
    if (types.some(t => STAMP.has(t))) {
      n.author = { '@id': ORG_ID };
      n.publisher = { '@id': ORG_ID };
      n.dateModified = n.dateModified ? toIso(n.dateModified) : dateModified;
    }
    extras.push(n);
  }
  const org = {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: 'The Fault Code',
    url: `${SITE_URL}/`,
    email: CONTACT_EMAIL,
    description: 'An independent reference that explains furnace, washer, dishwasher and AC / heat pump fault codes from manufacturer manuals and official support pages.',
    logo: { '@type': 'ImageObject', '@id': `${SITE_URL}/#logo`, url: LOGO_URL, contentUrl: LOGO_URL, width: 512, height: 512, caption: 'The Fault Code' },
    image: { '@id': `${SITE_URL}/#logo` },
    contactPoint: { '@type': 'ContactPoint', contactType: 'customer support', email: CONTACT_EMAIL, url: `${SITE_URL}/contact/` },
    // No third-party social profile exists for this site. sameAs points at its public about profile.
    sameAs: [`${SITE_URL}/about/`],
  };
  const website = {
    '@type': 'WebSite',
    '@id': SITE_ID,
    name: 'The Fault Code',
    url: `${SITE_URL}/`,
    publisher: { '@id': ORG_ID },
    inLanguage: 'en',
    potentialAction: {
      '@type': 'SearchAction',
      target: { '@type': 'EntryPoint', urlTemplate: `${SITE_URL}/codes/?q={search_term_string}` },
      'query-input': 'required name=search_term_string',
    },
  };
  const home = opts.path === '/' || opts.path === '';
  const crumb = !home ? (crumbs[0] ?? autoCrumb(opts.path, opts.title)) : null;
  if (crumb) crumb['@id'] = `${opts.url}#breadcrumb`;
  const webpage: Record<string, unknown> = {
    '@type': 'WebPage',
    '@id': `${opts.url}#webpage`,
    url: opts.url,
    name: opts.title,
    description: opts.description,
    dateModified,
    isPartOf: { '@id': SITE_ID },
    publisher: { '@id': ORG_ID },
    author: { '@id': ORG_ID },
    inLanguage: 'en',
  };
  if (crumb) webpage.breadcrumb = { '@id': crumb['@id'] };
  const main = extras.find(n => typesOf(n).some(t => ['Article', 'CollectionPage', 'AboutPage', 'Dataset', 'FAQPage', 'HowTo'].includes(t)));
  if (main) {
    if (!main['@id']) main['@id'] = `${opts.url}#main`;
    webpage.mainEntity = { '@id': main['@id'] };
  }
  const graph = [org, website, webpage, ...(crumb ? [crumb] : []), ...extras];
  return { '@context': 'https://schema.org', '@graph': graph };
}
