// Code search combobox (header + home). Index is fetched lazily from /search-index.json.
type Item = { b: string; c: string; m: string; u: string; t: string };
let idx: Promise<Item[]> | null = null;
const load = () => (idx ??= fetch('/search-index.json').then(r => r.json()));
const STOP = new Set(['code', 'codes', 'error', 'fault', 'furnace', 'flash', 'flashes', 'the', 'a']);
const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9 ]/g, ' ').replace(/\s+/g, ' ').trim();
const key = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, '');
const esc = (s: string) => s.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c] as string));

export function search(items: Item[], q: string): Item[] {
  const words = norm(q).split(' ').filter(w => w && !STOP.has(w));
  if (!words.length) return [];
  const whole = key(words.join(''));
  const scored = items.map(x => {
    const hay = norm(`${x.b} ${x.c} ${x.m} ${x.t}`), hw = hay.split(' '), code = key(x.c);
    let s = key(x.b + x.c) === whole || code === whole ? 20 : 0;
    for (const t of words) {
      const kt = key(t);
      if (code === kt) s += 5; else if (code.startsWith(kt)) s += 3; else if (norm(x.b).startsWith(t)) s += 2; else if (hw.some(w => w.startsWith(t))) s += 1; else return null;
    }
    return [s, x] as [number, Item];
  }).filter((v): v is [number, Item] => !!v).sort((a, b) => b[0] - a[0]);
  // An exact code (e.g. "e2-1" or "goodman ee3") should show only that code, not loose text matches.
  const exact = scored.filter(v => v[0] >= 20);
  return (exact.length ? exact : scored).map(v => v[1]);
}

function attach(input: HTMLInputElement) {
  const list = document.getElementById(input.getAttribute('aria-controls') || '') as HTMLUListElement | null;
  if (!list) return;
  const status = document.createElement('div');
  status.className = 'sr-only'; status.setAttribute('role', 'status'); list.after(status);
  let active = -1; let n = 0;
  const opts = () => [...list.querySelectorAll<HTMLElement>('[role=option]')];
  const setActive = (i: number) => {
    const o = opts(); active = o.length ? (i + o.length) % o.length : -1;
    o.forEach((el, j) => { el.classList.toggle('active', j === active); el.setAttribute('aria-selected', String(j === active)); });
    if (active >= 0) { input.setAttribute('aria-activedescendant', o[active].id); o[active].scrollIntoView({ block: 'nearest' }); } else input.removeAttribute('aria-activedescendant');
  };
  const close = () => { list.hidden = true; list.innerHTML = ''; input.setAttribute('aria-expanded', 'false'); input.removeAttribute('aria-activedescendant'); active = -1; };
  const render = async () => {
    const q = input.value; const mine = ++n;
    if (!norm(q)) { close(); status.textContent = ''; return; }
    const items = await load(); if (mine !== n) return;
    const hits = search(items, q); const top = hits.slice(0, 8);
    list.hidden = false; input.setAttribute('aria-expanded', 'true');
    list.innerHTML = top.length
      ? top.map((x, i) => `<li role="option" id="${list.id}-o${i}"><a href="${x.u}"><b>${esc(x.b)} ${esc(x.c)}</b><small>${esc(x.m)}</small></a></li>`).join('')
        + (hits.length > top.length ? `<li class="more"><a href="/codes/?q=${encodeURIComponent(q)}">See all ${hits.length} matches →</a></li>` : '')
      : `<li class="empty">No code matches “${esc(q.trim())}”. Try the brand name or just the code, or <a href="/codes/">browse all codes</a>.</li>`;
    status.textContent = top.length ? `${hits.length} result${hits.length === 1 ? '' : 's'}. Use up and down arrows, Enter to open.` : 'No results.';
    setActive(top.length ? 0 : -1);
  };
  input.addEventListener('focus', () => { load(); }, { once: true });
  input.addEventListener('input', render);
  input.addEventListener('keydown', e => {
    if (e.key === 'ArrowDown') { e.preventDefault(); if (list.hidden) render(); else setActive(active + 1); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setActive(active - 1); }
    else if (e.key === 'Escape') { if (!list.hidden) { e.preventDefault(); close(); } }
    else if (e.key === 'Enter' && !list.hidden && active >= 0) { const a = opts()[active]?.querySelector('a'); if (a) { e.preventDefault(); location.href = a.href; } }
  });
  document.addEventListener('click', e => { if (!(e.target as Element).closest('[data-search]')) close(); });
  input.form?.addEventListener('focusout', () => setTimeout(() => { if (!input.form!.contains(document.activeElement)) close(); }, 0));
}
document.querySelectorAll<HTMLInputElement>('input[data-search-input]').forEach(attach);
