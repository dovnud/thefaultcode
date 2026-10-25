import { datasetRows, COLUMNS } from '../../lib/dataset';
const q = (v: string | boolean) => { const s = String(v); return /[",\r\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s; };
export async function GET() {
  const rows = await datasetRows();
  const csv = [COLUMNS.join(','), ...rows.map(r => COLUMNS.map(c => q(r[c])).join(','))].join('\r\n') + '\r\n';
  return new Response(csv, { headers: { 'Content-Type': 'text/csv; charset=utf-8' } });
}
