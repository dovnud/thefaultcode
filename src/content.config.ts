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
    proAdvice: z.string().optional(),
    parts: z.array(z.object({ name: z.string(), partKey: z.string(), searchTerm: z.string() })).default([]),
    sourceManualUrl: z.string().url().optional(),
    updated: z.string(),
  }),
});
const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: z.object({ title: z.string(), description: z.string(), answer: z.string(), updated: z.string(),
    faq: z.array(z.object({ q: z.string(), a: z.string() })), sources: z.array(z.object({ name: z.string(), url: z.string().url() })), codes: z.array(z.string()).default([]), shop: z.array(z.string()).default([]) }),
});
export const collections = { codes, guides };
