import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
// TODO: set real domain
export default defineConfig({ site: 'https://example-hvac-codes.com', trailingSlash: 'always', integrations: [sitemap()] });
