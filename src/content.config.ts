import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
const codes = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/codes' }),
  schema: z.object({
    example: z.boolean().default(false),
    brand: z.string(), brandSlug: z.string(),
    equipmentType: z.enum(['furnace','air-conditioner','heat-pump','mini-split','boiler','water-heater','thermostat','appliance']),
    code: z.string(), codeSlug: z.string(),
    displayPattern: z.string(),
    meaning: z.string(),
    causes: z.array(z.string()),
    diySteps: z.array(z.string()),
    safetyNote: z.string(),
    proNeeded: z.boolean(),
    severity: z.enum(['low','moderate','high']).default('moderate'),
    parts: z.array(z.object({ name: z.string(), partKey: z.string(), searchTerm: z.string(), cause: z.number().int().optional() })).default([]),
    sourceManualUrl: z.string().url().optional(),
    updated: z.string(),
  }),
});
export const collections = { codes };
