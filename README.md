# HVAC Error Codes (Astro static site)
Add entries as JSON in `src/content/codes/` (schema: `src/content.config.ts`). Affiliate IDs: `src/config/affiliates.ts`. Set domain in `astro.config.mjs` and `public/robots.txt`. Remove the 3 EXAMPLE entries before launch.
## Local
npm install && npm run build   # output in dist/
## Cloudflare Pages
Dashboard > Workers & Pages > Create > Pages > Connect to Git. Framework: Astro, Build command `npm run build`, Output dir `dist`, env NODE_VERSION=22. Then add custom domain. (CLI alt: `npx wrangler pages deploy dist`.)
