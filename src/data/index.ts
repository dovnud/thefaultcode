import type { Part } from './parts';
import { HVAC_PARTS } from './hvac';
import { TOOL_PARTS, WASHER_PARTS, DW_PARTS } from './appliance';

export const PARTS: Part[] = [...HVAC_PARTS, ...TOOL_PARTS, ...WASHER_PARTS, ...DW_PARTS];
export const partBySlug = (s: string) => PARTS.find(p => p.slug === s);
export type { Part } from './parts';
