import { getCollection } from 'astro:content';
import { SITE_URL, EDITORIAL, CONTACT_EMAIL } from '../config/site';
import { catOf, codePath, typeLabel } from '../config/categories';
import { PARTS } from '../data';
import { FINDER_PARTS, codesForPart, finderPath } from '../lib/partFinder';
import { guideBody } from '../lib/guideMarkdown';

export async function GET() {
  const codes = (await getCollection('codes')).filter(c => !c.data.example).map(c => c.data)
    .sort((a, b) => catOf(a).name.localeCompare(catOf(b).name) || a.brand.localeCompare(b.brand) || a.code.localeCompare(b.code, 'en', { numeric: true }));
  const guides = (await getCollection('guides')).sort((a, b) => a.data.title.localeCompare(b.data.title));
  const codeBlocks = codes.map(e => {
    const pro = e.proAdvice ?? (e.proNeeded ? 'This code usually needs a qualified technician.' : 'Call a pro if the checks do not clear the code.');
    return `### ${e.brand} ${typeLabel(e)} ${e.code}

- Page: ${SITE_URL}${codePath(e)}
- Meaning: ${e.meaning}
- How it shows: ${e.displayPattern}
- Causes: ${e.causes.join('; ')}
- Checks: ${e.diySteps.join(' ')}
- When to call a pro: ${pro}
- Source: ${e.sourceManualUrl ?? 'see the page'}
- Updated: ${e.updated}`;
  }).join('\n\n');
  const guideBlocks = guides.map(g => {
    const d = g.data;
    return `### ${d.title}

- Markdown: ${SITE_URL}/guides/${g.id}.md
- Page: ${SITE_URL}/guides/${g.id}/
- Updated: ${d.updated}

${d.answer}

${guideBody(g.id)}

#### FAQ
${d.faq.map(f => `**${f.q}** ${f.a}`).join('\n\n')}`;
  }).join('\n\n');
  const partBlocks = PARTS.map(p => `### ${p.name}

- Page: ${SITE_URL}/parts/${p.slug}/
- ${p.summary}
${p.what.map(t => `- ${t}`).join('\n')}`).join('\n\n');
  const body = `# The Fault Code

> Full text of the published guides, fault codes, and parts guides. Written by ${EDITORIAL}. Information only, not professional advice. Contact: ${CONTACT_EMAIL}.

Curated index: ${SITE_URL}/llms.txt

## Guides

${guideBlocks}

## Fault codes

${codeBlocks}

## Parts and tools

${partBlocks}

## Part finder

A code is listed only when its manufacturer document names the part. The quote is the sentence published from that document.

${FINDER_PARTS.map(p => {
  const hits = codesForPart(p.slug, codes);
  if (!hits.length) return '';
  return `### ${p.name}

- Page: ${SITE_URL}${finderPath(p.slug)}
${hits.map(h => `- ${h.code.brand} ${h.code.code} (${SITE_URL}${h.href}): ${h.quote} Source: ${h.sourceName} ${h.sourceUrl}`).join('\n')}`;
}).filter(Boolean).join('\n\n')}
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
