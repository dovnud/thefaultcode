import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import { lastmodFor } from './src/lib/lastmod.ts';
// Per-URL <lastmod> from content `updated` dates / git commit dates (see src/lib/lastmod.ts). URLs without a known date get no lastmod rather than a made-up one.
export default defineConfig({ site: 'https://thefaultcode.com', trailingSlash: 'always', integrations: [
  sitemap({ serialize(item) { const d = lastmodFor(new URL(item.url).pathname); if (d) item.lastmod = d; else delete item.lastmod; return item; } }), react()] });
