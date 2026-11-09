// Cross-links between sister-brand pages that already exist.
// Goodman and Amana share code characters on two different model charts.
// Trane and American Standard, and Carrier and Bryant, are sister badges.
// This does not create pages, and it does not treat a shared number as the same procedure.
import { catOf, codePath, type CodeData } from '../config/categories';

const PAIR: Record<string, string> = {
  trane: 'american-standard',
  'american-standard': 'trane',
  carrier: 'bryant',
  bryant: 'carrier',
  goodman: 'amana',
  amana: 'goodman',
};

export type SisterLink = { heading: string; before: string; href: string; label: string; after: string };

export function sisterFor(e: CodeData, codes: CodeData[]): SisterLink | null {
  const otherSlug = PAIR[e.brandSlug];
  if (!otherSlug) return null;
  const cat = catOf(e).slug;
  const other = codes.find(c => c.brandSlug === otherSlug && c.codeSlug === e.codeSlug && catOf(c).slug === cat);
  if (!other) return null;
  const label = `${other.brand} ${other.code}`;
  const href = codePath(other);
  if (e.brandSlug === 'goodman') {
    return {
      heading: 'Model chart',
      before: 'This page is the single-stage *R9S96, *D9S96 and *R9S92 chart in IOG-2037B. A two-stage *CVC96 or *MVC96 uses IOG-2015L, published as',
      href, label,
      after: '. Do not use these single-stage checks on that two-stage family.',
    };
  }
  if (e.brandSlug === 'amana') {
    return {
      heading: 'Model chart',
      before: 'This page is the two-stage *CVC96 and *MVC96 chart in IOG-2015L, including Goodman furnaces in that family. A single-stage *R9S96, *D9S96 or *R9S92 uses IOG-2037B, published as',
      href, label,
      after: '.',
    };
  }
  if (e.brandSlug === 'trane' || e.brandSlug === 'american-standard') {
    return {
      heading: 'Sister brand',
      before: 'Trane and American Standard both sell the S9V2. The other badge\'s page for this code is',
      href, label,
      after: '. Follow the name on the furnace. Each page stays with its own manual.',
    };
  }
  return {
    heading: 'Sister brand',
    before: 'Carrier and Bryant both publish this code. The other badge\'s page is',
    href, label,
    after: '. Follow the badge on the unit. Each page uses that brand\'s own manual, and the wording is not always the same.',
  };
}
