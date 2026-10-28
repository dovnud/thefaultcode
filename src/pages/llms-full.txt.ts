// Build-time markdown corpus for answer engines. Static route: /llms-full.txt
import { readFileSync, readdirSync } from 'node:fs';
import { getCollection } from 'astro:content';
import { codePath } from '../config/categories';

function stripFront(raw: string): string {
  const mark = raw.indexOf('\n---\n');
  if (mark !== -1) return raw.slice(mark + 5).trim();
  return raw.trim();
}

export async function GET() {
  const s = 'https://thefaultcode.com';
  const codes = (await getCollection('codes')).filter(c => !c.data.example).map(c => c.data)
    .sort((a, b) => codePath(a).localeCompare(codePath(b)));
  const guides = (await getCollection('guides')).sort((a, b) => a.data.title.localeCompare(b.data.title));
  const files = new Map(readdirSync('src/content/guides').map(f => [f.replace(/\.md$/, ''), readFileSync(`src/content/guides/${f}`, 'utf8')]));
  const parts: string[] = [];
  parts.push(`# The Fault Code

> Full text of the troubleshooting guides and every published fault code. Each code's meaning comes from a manufacturer manual or official support page linked on the code page. This file is generated at build time. Information only, not professional advice.

- Site: ${s}/
- About: ${s}/about/
- Index: ${s}/llms.txt
`);
  parts.push(`\n# Guides\n`);
  for (const g of guides) {
    const d = g.data;
    const body = stripFront(files.get(g.id) ?? '');
    parts.push(`## ${d.title}

URL: ${s}/guides/${g.id}/
Last updated: ${d.updated}

${d.answer}

${body}
`);
  }
  parts.push(`\n# Fault codes\n`);
  for (const e of codes) {
    const steps = (e.diySteps ?? []).map(x => `- ${x}`).join('\n');
    const causes = (e.causes ?? []).map(x => `- ${x}`).join('\n');
    parts.push(`## ${e.brand} ${e.code}

URL: ${s}${codePath(e)}
Last updated: ${e.updated}
Equipment: ${e.equipmentType}

${e.meaning}

### Likely causes
${causes || '- None listed.'}

### Checks
${steps || '- See the code page.'}

${e.proNeeded ? 'This code usually needs a licensed technician.' : 'Call a technician if the checks do not clear the code.'}
${e.sourceManualUrl ? `\nSource: ${e.sourceManualUrl}` : ''}
`);
  }
  return new Response(parts.join('\n'), { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } });
}
