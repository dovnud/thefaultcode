// "Can I fix this myself?" mark for code pages (2026-11-10 audit).
// Conservative: derived only from fields the page already shows (proNeeded, Technician-marked steps, causes/steps text).
// Returns null when the content does not support a clear call. Gas, electrical and refrigerant work is always 'no' or nothing.
export type Diy = 'yes' | 'maybe' | 'no';
const HAZARD = /refrigerant|gas valve|gas line|gas supply|gas pressure|gas pipe|manifold|wiring|wire|voltage|volt|multimeter|ohm|capacitor|electrical|electric shock|\blive\b|ignit|burner|flue|heat exchanger|compressor|control board|circuit board|PCB|terminal|harness|breaker panel|outlet/i;
const APPLIANCE = new Set(['washing-machine', 'dishwasher', 'appliance']);
export function diyVerdict(e: { proNeeded: boolean; equipmentType: string; causes: string[]; diySteps: string[]; diy?: Diy }): Diy | null {
  const text = [...e.causes, ...e.diySteps].join(' ');
  const hazard = HAZARD.test(text);
  if (e.diy) return e.diy === 'no' || !hazard ? e.diy : null;   // an explicit field never says yes/maybe to hazardous work
  if (e.proNeeded) return 'no';                                  // the page already marks it call-a-pro
  if (hazard) return null;                                       // unclear: show nothing
  const techSteps = e.diySteps.some(s => /^Technician:/i.test(s));
  if (techSteps || !APPLIANCE.has(e.equipmentType)) return 'maybe'; // homeowner check first, the rest is a technician's
  return 'yes';
}
export const DIY_TEXT: Record<Diy, { label: string; why: string }> = {
  yes: { label: 'Yes', why: 'The steps on this page are homeowner checks from the manufacturer document. If the code comes back, see when to call a pro.' },
  maybe: { label: 'Maybe', why: 'Start with the homeowner check below. If it does not clear the code, the rest is technician work.' },
  no: { label: 'No', why: 'This page is marked call-a-pro. Do the safe checks only, then call a technician.' },
};
