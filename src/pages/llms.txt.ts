import { getCollection } from 'astro:content';
import { groupCodes, CATEGORIES } from '../config/categories';
import { PARTS } from '../data';
export async function GET() {
  const codes = (await getCollection('codes')).filter(c => !c.data.example).map(c => c.data);
  const guides = (await getCollection('guides')).sort((a, b) => a.data.title.localeCompare(b.data.title));
  const groups = groupCodes(codes);
  const s = 'https://thefaultcode.com';
  const body = `# The Fault Code

> Error and flash codes for gas furnaces, washing machines, dishwashers and AC / heat pumps, explained in plain English. Each code page gives the meaning, likely causes, safe homeowner checks, when to call a qualified technician, and a link to the manufacturer manual or official support page the information came from. Codes we could not verify in a manual are not published.

Information only; not professional advice. Gas, venting, refrigerant, high-voltage wiring and control-board work should be done by a licensed technician.

## Guides
${guides.map(g => `- [${g.data.title}](${s}/guides/${g.id}/): ${g.data.description}`).join('\n')}

## Parts and tools guides
- [All parts and tools guides](${s}/parts/): what each part, tool or supply named in the manuals is, how to choose and test it
${PARTS.map(p => `- [${p.name}](${s}/parts/${p.slug}/): ${p.summary}`).join('\n')}

## Equipment categories
${CATEGORIES.filter(c => groups.some(g => g.cat.slug === c.slug)).map(c => `- [${c.name} error codes](${s}${c.hub}): ${groups.filter(g => g.cat.slug === c.slug).reduce((n, g) => n + g.codes.length, 0)} codes`).join('\n')}

## Brand code lists
${groups.map(g => `- [${g.brand} ${g.cat.noun} error codes](${s}${g.href}): ${g.codes.length} codes`).join('\n')}

## Data
- [Fault code dataset](${s}/data/): every published code with brand, category, meaning and manufacturer source link
- [fault-codes.csv](${s}/data/fault-codes.csv): the same dataset as CSV
- [fault-codes.json](${s}/data/fault-codes.json): the same dataset as JSON

## Other
- [Full text](${s}/llms-full.txt): markdown corpus of the guides and every published code
- [About](${s}/about/): how codes are sourced, who writes the site
- [Dataset](${s}/data/)
- [Sitemap](${s}/sitemap-index.xml)
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
