import { datasetRows } from '../../lib/dataset';
import { siteUpdated } from '../../lib/lastmod';
import { SITE_URL, EDITORIAL } from '../../config/site';
export async function GET() {
  const records = await datasetRows();
  const body = { name: 'The Fault Code: appliance and HVAC fault code reference', creator: EDITORIAL, url: `${SITE_URL}/data/`, dateModified: siteUpdated(),
    note: 'Meanings are taken from the manufacturer manual or support page named in source_url. Information only, not professional advice.', recordCount: records.length, records };
  return new Response(JSON.stringify(body, null, 1) + '\n', { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
}
