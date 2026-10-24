// Client-side filter for code card lists (/codes/ and brand pages). Reads ?q= on load.
const input = document.querySelector<HTMLInputElement>('input[data-filter]');
if (input) {
  const cards = [...document.querySelectorAll<HTMLElement>('[data-s]')];
  const groups = [...document.querySelectorAll<HTMLElement>('[data-group]')];
  const empty = document.getElementById('f-empty'); const count = document.getElementById('f-count');
  const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9 ]/g, ' ').replace(/\s+/g, ' ').trim();
  const key = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, '');
  const apply = () => {
    const words = norm(input.value).split(' ').filter(Boolean);
    let shown = 0;
    cards.forEach(c => {
      const hay = c.dataset.s || ''; const hk = key(hay);
      const ok = words.every(w => hay.includes(w) || hk.includes(key(w)));
      c.hidden = !ok; if (ok) shown++;
    });
    groups.forEach(g => { g.hidden = !g.querySelector('[data-s]:not([hidden])'); });
    if (empty) empty.hidden = shown > 0;
    if (count) count.textContent = words.length ? `${shown} of ${cards.length} codes match` : `${cards.length} codes`;
  };
  const q0 = new URLSearchParams(location.search).get('q'); if (q0) input.value = q0;
  input.addEventListener('input', apply);
  input.form?.addEventListener('submit', e => e.preventDefault());
  apply();
}
