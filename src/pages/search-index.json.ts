import { getCollection } from 'astro:content';
export async function GET() {
  const codes = (await getCollection('codes')).filter(c => !c.data.example).map(c => c.data);
  const idx = codes.map(c => ({ b: c.brand, c: c.code, m: c.meaning, u: `/${c.brandSlug}/${c.codeSlug}/`, t: c.equipmentType }));
  return new Response(JSON.stringify(idx), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
}
