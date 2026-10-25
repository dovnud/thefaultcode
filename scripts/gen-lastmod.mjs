// Writes src/data/lastmod.json: file -> last-change date (YYYY-MM-DD) from git, for pages whose dates are not in the content itself.
// Cloudflare Pages clones shallowly, where git dates would all equal the newest commit, so in that case the committed manifest is kept as is.
import { execSync } from 'node:child_process';
import { writeFileSync, readFileSync, existsSync } from 'node:fs';
const OUT = 'src/data/lastmod.json';
const FILES = ['src/pages/about.astro', 'src/pages/contact.astro', 'src/pages/privacy.astro', 'src/pages/terms.astro', 'src/pages/affiliate-disclosure.astro',
  'src/data/hvac.ts', 'src/data/appliance.ts', 'src/data/parts.ts'];
const sh = c => execSync(c, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim();
try {
  if (sh('git rev-parse --is-shallow-repository') === 'true') { console.log('[lastmod] shallow clone: keeping committed manifest'); process.exit(0); }
  const out = {};
  const today = new Date().toISOString().slice(0, 10);
  for (const f of FILES) {
    if (sh(`git status --porcelain -- ${f}`)) { out[f] = today; continue; }          // uncommitted edit => today
    const d = sh(`git log -1 --format=%cI -- ${f}`);
    if (d) out[f] = new Date(d).toISOString().slice(0, 10);
  }
  const next = JSON.stringify(out, null, 1) + '\n';
  if (!existsSync(OUT) || readFileSync(OUT, 'utf8') !== next) writeFileSync(OUT, next);
  console.log('[lastmod] manifest written for', Object.keys(out).length, 'files');
} catch (e) { console.log('[lastmod] git unavailable; keeping manifest'); }
