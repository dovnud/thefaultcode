import { getCollection } from 'astro:content';
import { codePath, typeLabel, catOf } from '../config/categories';
export async function GET() {
  const codes = (await getCollection('codes')).filter(c => !c.data.example).map(c => c.data);
  const idx = codes.map(c => ({ b: c.brand, c: c.code, m: c.meaning, u: codePath(c), t: `${typeLabel(c)} ${catOf(c).aliases}` }));
  return new Response(JSON.stringify(idx), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
}
