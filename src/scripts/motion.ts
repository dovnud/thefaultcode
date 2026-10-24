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
  gsap.set(pending, { opacity: 0, y: 18 });
  const io = new IntersectionObserver(entries => {
    const vis = entries.filter(e => e.isIntersecting).map(e => e.target);
    if (!vis.length) return;
    vis.forEach(v => io.unobserve(v));
    gsap.to(vis, { opacity: 1, y: 0, duration: 0.55, ease: 'power2.out', stagger: 0.06 });
  }, { rootMargin: '0px 0px -8% 0px' });
  pending.forEach(el => io.observe(el));
}
