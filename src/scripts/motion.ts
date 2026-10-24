// Loaded lazily, never under prefers-reduced-motion. Critical UI (result card, parts, pro buttons) is never animated.
export async function start() {
  const [{ gsap }, { default: Lenis }] = await Promise.all([import('gsap'), import('lenis')]);
  const lenis = new Lenis({ lerp: 0.12 });
  const raf = (t: number) => { lenis.raf(t); requestAnimationFrame(raf); };
  requestAnimationFrame(raf);
  const els = [...document.querySelectorAll<HTMLElement>('[data-reveal]')].filter(el => !el.closest('[data-critical]'));
  const vh = innerHeight;
  const pending = els.filter(el => el.getBoundingClientRect().top > vh * 0.95);
  if (!pending.length) return;
  let waiting = new Set(pending), tick = false;
  gsap.set(pending, { opacity: 0, y: 18 });
  const io = new IntersectionObserver(entries => {
    const vis = entries.filter(e => e.isIntersecting).map(e => e.target);
    if (!vis.length) return;
    vis.forEach(v => { io.unobserve(v); waiting.delete(v as HTMLElement); });
    gsap.to(vis, { opacity: 1, y: 0, duration: 0.55, ease: 'power2.out', stagger: 0.06 });
  }, { rootMargin: '0px 0px -8% 0px' });
  pending.forEach(el => io.observe(el));
  // Fast jumps (End key, #anchors, scrollbar drags) can skip an element without it ever intersecting:
  // reveal anything the viewport has already reached or passed so content is never left invisible.
  const sweep = () => {
    tick = false;
    const hit = [...waiting].filter(el => el.getBoundingClientRect().top < innerHeight * 0.92);
    if (!hit.length) return;
    hit.forEach(h => { waiting.delete(h); io.unobserve(h); });
    gsap.to(hit, { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out', stagger: 0.04, overwrite: 'auto' });
    if (!waiting.size) removeEventListener('scroll', onScroll);
  };
  const onScroll = () => { if (!tick) { tick = true; requestAnimationFrame(sweep); } };
  addEventListener('scroll', onScroll, { passive: true });
}
