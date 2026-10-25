import { getCollection } from 'astro:content';
import { groupCodes, catOf } from '../config/categories';

export async function allCodes() { return (await getCollection('codes')).filter(c => !c.data.example).map(c => c.data); }

/** getStaticPaths for /{brand}/{code}/ (furnaces) and /{category}/{brand}/{code}/. */
export async function codePaths(cat: string) {
  const groups = groupCodes(await allCodes()).filter(g => g.cat.slug === cat);
  return groups.flatMap(g => g.codes.map((e, i) => {
    const related: any[] = [];
    for (let d = 1; related.length < 6 && d < g.codes.length; d++) {
      if (g.codes[i - d]) related.push(g.codes[i - d]);
      if (related.length < 6 && g.codes[i + d]) related.push(g.codes[i + d]);
    }
    related.sort((x, y) => g.codes.indexOf(x) - g.codes.indexOf(y));
    return { params: { brand: e.brandSlug, code: e.codeSlug }, props: { e, related } };
  }));
}

/** getStaticPaths for /{brand}/ (furnaces) and /{category}/{brand}/. */
export async function brandPaths(cat: string) {
  return groupCodes(await allCodes()).filter(g => g.cat.slug === cat).map(g => ({ params: { brand: g.brandSlug }, props: { codes: g.codes } }));
}
export { catOf };
