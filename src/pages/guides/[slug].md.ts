import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { SITE_URL } from '../../config/site';
import { guideBody } from '../../lib/guideMarkdown';

export async function getStaticPaths() {
  return (await getCollection('guides')).map(g => ({ params: { slug: g.id }, props: { g } }));
}

export const GET: APIRoute = ({ props }) => {
  const g = props.g;
  const d = g.data;
  const md = `# ${d.title}

> ${d.description}

${d.answer}

${guideBody(g.id)}

## FAQ
${d.faq.map((f: { q: string; a: string }) => `### ${f.q}\n\n${f.a}`).join('\n\n')}

## Sources
${d.sources.map((s: { name: string; url: string }) => `- [${s.name}](${s.url})`).join('\n')}

Canonical page: ${SITE_URL}/guides/${g.id}/
`;
  return new Response(md, { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } });
};
