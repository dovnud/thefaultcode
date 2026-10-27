// Which field guide mentions which code. Furnace guides keep the original "brand/slug" keys.
// Washer, dishwasher and AC guides use "category/brand/slug" so LG OE on a washer does not
// also attach to LG OE on a dishwasher, and Carrier 31 on a furnace does not attach to Carrier 31 on an AC.
import { catOf, type CodeData } from '../config/categories';

export function guideMentions(e: CodeData, keys: string[] | undefined): boolean {
  if (!keys?.length) return false;
  const cat = catOf(e).slug;
  const short = `${e.brandSlug}/${e.codeSlug}`;
  const full = cat === 'furnaces' ? short : `${cat}/${short}`;
  if (keys.includes(full)) return true;
  return cat === 'furnaces' && keys.includes(short);
}
