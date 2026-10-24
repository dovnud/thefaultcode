import { getCollection } from 'astro:content';
export async function GET() {
  const codes = (await getCollection('codes')).filter(c => !c.data.example).map(c => c.data);
  const guides = (await getCollection('guides')).sort((a, b) => a.data.title.localeCompare(b.data.title));
  const brands = [...new Map(codes.map(c => [c.brandSlug, c.brand])).entries()].sort((a, b) => a[1].localeCompare(b[1]));
  const s = 'https://thefaultcode.com';
  const body = `# The Fault Code

> Gas furnace error and flash codes explained in plain English. Each code page gives the meaning, likely causes, safe homeowner checks, when to call a licensed HVAC technician, and a link to the manufacturer manual the information came from. Codes we could not verify in a manual are not published.

Information only; not professional advice. Gas, venting, wiring and control-board work should be done by a licensed technician.

## Guides
${guides.map(g => `- [${g.data.title}](${s}/guides/${g.id}/): ${g.data.description}`).join('\n')}

## Brand code lists
${brands.map(([slug, n]) => `- [${n} furnace error codes](${s}/${slug}/): ${codes.filter(c => c.brandSlug === slug).length} codes`).join('\n')}

## Other
- [About](${s}/about/)
- [Sitemap](${s}/sitemap-index.xml)
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
