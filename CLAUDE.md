# thefaultcode.com: build brief for Claude Code

The site has one page per HVAC/appliance error code. It's an Astro static site deployed on Cloudflare Pages (`npm run build` builds to `dist`).
Code data lives in `src/content/codes/*.json` (schema in `src/content.config.ts`). All affiliate links live in `src/config/affiliates.ts`.
The 3 entries flagged `example: true` are made-up EXAMPLE data. Never publish them.

## Design references
- Main model: https://www.obd-codes.com/p0420, with one page per code and the same section order on every page.
- Cause list with a parts button on each cause: https://www.partselect.com/Repair/Refrigerator/
- Homepage with one big search box and brand tiles below it: https://www.appliancepartspros.com/
- Answer first, with a "reviewed by" line: https://www.omnicalculator.com/finance/loan
- Competitor to beat on speed: https://hvaccodelookup.com/

## Code page layout (top to bottom)
1. Breadcrumbs: Brand > Equipment > Code
2. H1 in the form "[Brand] [Code]: plain-English meaning"
3. Result card with the meaning, a severity badge, a DIY or Call-a-pro verdict, and an Angi "Call a pro" button
4. Likely causes, each with a RepairClinic parts button (rel="sponsored")
5. DIY steps and a safety note
6. When to call a pro, with a second Angi button
7. Related codes grid
8. Source manual link, last-updated date, affiliate disclosure

## Homepage
A search box ("Enter brand + code, e.g. Goodman 3 flashes"), brand tiles, and popular codes.

## Rules
- Pages must be fast: static HTML and minimal JS. No heavy frameworks or trackers.
- Mobile first, with good accessibility and contrast.
- Keep the URL pattern `/[brand]/[code]/`, the structured data (JSON-LD), the sitemap, and the canonical tags.
