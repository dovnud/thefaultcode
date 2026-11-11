// Blink / flash pattern drawings for code pages (2026-11-10 audit). Only for families whose cited manual states the pattern;
// timings are used only where that manual states them, otherwise the drawing is static and untimed.
//  - Carrier Infinity 25VNA8/24VNA9 SM and Bryant 288BNV/189BNV SM: "The short flash is 0.25 seconds ON and the long flash is 1.0 second ON.
//    Time between flashes is 0.25 seconds. Time between short flash and first long flash is 1.0 second. Time between code repeating is 2.5 seconds with LED OFF."
//  - York TG9S IOM 1083287-UIM: "LED light will turn on for 1/3 second and off for 1/3 second ... repeated the number of times equal to the code.
//    There will be a two-second pause between codes."
//  - Mitsubishi OBH872A table 9-4: left OPERATION INDICATOR lamp, "N-time blink" then "2.5-second OFF" (blink length not stated, so untimed);
//    row 1: "0.5-second ON / 0.5-second OFF".
export type Step = { on: boolean; t: number | null; kind?: 'short' | 'long' | 'blink' | 'pause' };
export type Blink = { steps: Step[]; timed: boolean; repeat: boolean; color: 'amber' | 'red' | 'green'; lamp: string; text: string; ref: string };
const n = (s: string) => parseInt(s, 10);
const plural = (k: number, w: string) => `${k} ${w}${k === 1 ? '' : 'es'}`;
export function blinkFor(e: { brandSlug: string; code: string; codeSlug: string; equipmentType: string; sourceManualUrl?: string }): Blink | null {
  const url = e.sourceManualUrl ?? '';
  if ((/25VNA8-24VNA9-4SM\.pdf$/.test(url) || /SM288BNV-189BNV-04\.pdf$/.test(url)) && /^[1-9][1-9]$/.test(e.code)) {
    const s = n(e.code[0]), l = n(e.code[1]); const steps: Step[] = [];
    for (let i = 0; i < s; i++) { steps.push({ on: true, t: 0.25, kind: 'short' }); if (i < s - 1) steps.push({ on: false, t: 0.25 }); }
    steps.push({ on: false, t: 1.0 });
    for (let i = 0; i < l; i++) { steps.push({ on: true, t: 1.0, kind: 'long' }); if (i < l - 1) steps.push({ on: false, t: 0.25 }); }
    steps.push({ on: false, t: 2.5, kind: 'pause' });
    const doc = e.brandSlug === 'bryant' ? 'Bryant 288BNV / 189BNV service manual' : 'Carrier 25VNA8 / 24VNA9 service manual';
    return { steps, timed: true, repeat: true, color: 'amber', lamp: 'Amber status LED on the outdoor control',
      text: `${plural(s, 'short flash')} (each 0.25 second on, 0.25 second apart), a 1-second gap, then ${plural(l, 'long flash')} (each 1 second on, 0.25 second apart), then the LED stays off for 2.5 seconds and the code repeats.`,
      ref: `${doc}, status code section` };
  }
  if (e.brandSlug === 'york' && /coltg9s-iom-manual\.pdf$/.test(url)) {
    const m = e.codeSlug.match(/^(\d+)-red-flash/); if (!m) return null; const k = n(m[1]); const steps: Step[] = [];
    for (let i = 0; i < k; i++) { steps.push({ on: true, t: 1 / 3, kind: 'blink' }); if (i < k - 1) steps.push({ on: false, t: 1 / 3 }); }
    steps.push({ on: false, t: 2, kind: 'pause' });
    return { steps, timed: true, repeat: true, color: 'red', lamp: 'Control board LED, seen through the blower-door view port',
      text: `${plural(k, 'red flash')}, each 1/3 second on and 1/3 second off, then a 2-second pause before the code repeats.`,
      ref: 'York TG9S installation manual, Furnace control diagnostics' };
  }
  if (e.brandSlug === 'mitsubishi' && /OBH872A\.pdf$/.test(url)) {
    if (e.codeSlug === 'continuous-blink') {
      const steps: Step[] = []; for (let i = 0; i < 4; i++) { steps.push({ on: true, t: 0.5, kind: 'blink' }); steps.push({ on: false, t: 0.5 }); }
      return { steps, timed: true, repeat: true, color: 'green', lamp: 'Left lamp of the OPERATION INDICATOR on the indoor unit',
        text: 'The left lamp blinks 0.5 second on and 0.5 second off, over and over, with no counted pause.', ref: 'Mitsubishi Electric service manual OBH872A, table 9-4, row 1' };
    }
    const m = e.codeSlug.match(/^(\d+)-blinks$/); if (!m) return null; const k = n(m[1]); const steps: Step[] = [];
    for (let i = 0; i < k; i++) { steps.push({ on: true, t: null, kind: 'blink' }); if (i < k - 1) steps.push({ on: false, t: null }); }
    steps.push({ on: false, t: 2.5, kind: 'pause' });
    return { steps, timed: false, repeat: true, color: 'green', lamp: 'Left lamp of the OPERATION INDICATOR on the indoor unit',
      text: `The left lamp blinks ${k} times, then stays off for 2.5 seconds, and the pattern repeats. The manual does not give the length of each blink, so this drawing is not to time scale.`,
      ref: 'Mitsubishi Electric service manual OBH872A, table 9-4' };
  }
  return null;
}
