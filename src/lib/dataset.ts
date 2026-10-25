import { allCodes } from './paths';
import { catOf, typeLabel, codePath } from '../config/categories';
import { SITE_URL } from '../config/site';

export const COLUMNS = ['brand', 'category', 'equipment_type', 'code', 'display_pattern', 'meaning', 'professional_recommended', 'source_type', 'source_title', 'source_url', 'page_url', 'date_modified'] as const;
export type Row = Record<(typeof COLUMNS)[number], string | boolean>;

/** One row per published fault code (the 3 example fixtures are excluded). Every field comes straight from the code's content file. */
export async function datasetRows(): Promise<Row[]> {
  const rows = (await allCodes()).map(e => ({
    brand: e.brand, category: catOf(e).name, equipment_type: typeLabel(e), code: e.code, display_pattern: e.displayPattern, meaning: e.meaning,
    professional_recommended: e.proNeeded, source_type: e.sourceType === 'support-page' ? 'manufacturer support page' : 'manufacturer manual (PDF)',
    source_title: e.sourceTitle ?? '', source_url: e.sourceManualUrl ?? '', page_url: `${SITE_URL}${codePath(e)}`, date_modified: e.updated,
  }));
  return rows.sort((a, b) => a.category.localeCompare(b.category) || a.brand.localeCompare(b.brand) || a.code.localeCompare(b.code, 'en', { numeric: true }));
}
