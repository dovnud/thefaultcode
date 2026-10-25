import type { APIRoute } from 'astro';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { readFileSync } from 'node:fs';
import { ogSpecs, ogPath, type OgSpec } from '../../lib/og';

const font = (pkg: string, f: string) => readFileSync(`${process.cwd()}/node_modules/@fontsource/${pkg}/files/${f}`);
const FONTS = [
  { name: 'Barlow Condensed', data: font('barlow-condensed', 'barlow-condensed-latin-700-normal.woff'), weight: 700 as const, style: 'normal' as const },
  { name: 'IBM Plex Sans', data: font('ibm-plex-sans', 'ibm-plex-sans-latin-400-normal.woff'), weight: 400 as const, style: 'normal' as const },
  { name: 'IBM Plex Sans', data: font('ibm-plex-sans', 'ibm-plex-sans-latin-600-normal.woff'), weight: 600 as const, style: 'normal' as const },
];
// The embedded fonts only cover Latin; replace anything else so no tofu boxes appear.
const clean = (s = '') => s.replace(/[\u2018\u2019]/g, "'").replace(/[\u201c\u201d]/g, '"').replace(/[\u2013\u2014]/g, '-').replace(/\u2026/g, '...').replace(/\u00b5/g, 'u').replace(/[^\u0020-\u007e\u00a0-\u00ff]/g, '');
const h = (type: string, style: Record<string, any>, children?: any) => ({ type, props: { style: { display: 'flex', ...style }, children } });

function card(s: OgSpec) {
  const code = s.kind === 'code';
  const big = clean(s.big ?? '');
  const bigSize = big.length <= 4 ? 230 : big.length <= 7 ? 180 : big.length <= 12 ? 120 : 80;
  const title = clean(s.title);
  const titleSize = code ? (title.length > 80 ? 40 : 46) : title.length > 50 ? 78 : title.length > 28 ? 92 : 110;
  return h('div', { width: 1200, height: 630, background: '#2a2a27', flexDirection: 'column', fontFamily: 'IBM Plex Sans', color: '#ffffff', position: 'relative' }, [
    h('div', { height: 14, width: 1200, background: '#e5530a' }),
    h('div', { flexDirection: 'column', flex: 1, padding: '44px 70px 40px 70px', justifyContent: 'space-between' }, [
      h('div', { alignItems: 'center', justifyContent: 'space-between' }, [
        h('div', { alignItems: 'center' }, [
          h('div', { fontFamily: 'Barlow Condensed', fontWeight: 700, fontSize: 30, color: '#ff7a2e', background: '#111111', border: '2px solid #555555', padding: '4px 12px', letterSpacing: 3 }, 'E-00'),
          h('div', { fontFamily: 'Barlow Condensed', fontWeight: 700, fontSize: 36, marginLeft: 16, letterSpacing: 1 }, 'THE FAULT CODE'),
        ]),
        h('div', { fontSize: 26, color: '#f2b632', fontWeight: 600 }, clean(s.kicker)),
      ]),
      code
        ? h('div', { flexDirection: 'column' }, [
            h('div', { fontFamily: 'Barlow Condensed', fontWeight: 700, fontSize: bigSize, lineHeight: 1, color: '#ff7a2e', letterSpacing: 4 }, big),
            h('div', { fontWeight: 600, fontSize: titleSize, lineHeight: 1.2, marginTop: 18 }, title),
          ])
        : h('div', { flexDirection: 'column' }, [
            h('div', { fontFamily: 'Barlow Condensed', fontWeight: 700, fontSize: titleSize, lineHeight: 1.02, color: '#ffffff' }, title),
            h('div', { fontSize: 36, lineHeight: 1.3, color: '#d8d6cf', marginTop: 22 }, clean(s.sub)),
          ]),
      h('div', { justifyContent: 'space-between', alignItems: 'center', fontSize: 28 }, [
        h('div', { color: '#f2b632', fontWeight: 600 }, 'thefaultcode.com'),
        h('div', { color: '#d8d6cf' }, 'Meanings from manufacturer manuals'),
      ]),
    ]),
  ]);
}

export async function getStaticPaths() {
  const specs = await ogSpecs();
  return [...specs.entries()].map(([path, spec]) => ({ params: { path: ogPath(path).replace(/^\/og\//, '').replace(/\.png$/, '') }, props: { spec } }));
}
export const GET: APIRoute = async ({ props }) => {
  const svg = await satori(card(props.spec as OgSpec) as any, { width: 1200, height: 630, fonts: FONTS });
  const png = new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } }).render().asPng();
  return new Response(png, { headers: { 'Content-Type': 'image/png' } });
};
