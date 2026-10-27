# Publish log

## 2026-10-27

New pages (all from official Samsung US support pages, source links on each page):

- Samsung dishwasher 4C: water supply error (also 4E) — https://thefaultcode.com/dishwashers/samsung/4c/
- Samsung dishwasher LC: leakage error (also LE) — https://thefaultcode.com/dishwashers/samsung/lc/
- Samsung washer bE2: jammed button error (also E2, 6E2, BE2, 8E2) — https://thefaultcode.com/washers/samsung/be2/
- Samsung washer 9C1: voltage / power supply error (also 9C2, PF, 3E, 2E, 9E1, 9E2, UC, 19C1, 19C2) — https://thefaultcode.com/washers/samsung/9c1/

Commits: 5b86c1c (pages + optional `amazonMax` cap on the Parts & tools block; existing pages unchanged).
Amazon links: 3 search links each on 4C and LC (dishwasher supply line), none on bE2 and 9C1. All rel="sponsored nofollow noopener", tag=thefaultcode-20.
QA: build OK (212 pages); static link check (affiliate URLs never fetched) no new issues; axe 0 violations and no tap targets under 44px on the new pages (mobile/tablet/desktop);
click test 261 elements OK; seo_check 0 problems; Associates statement check OK; 1238 Amazon anchors validated statically, 0 bad; Lighthouse 99-100 perf, 100 a11y/BP/SEO.
Live: all 4 URLs 200 with correct content, OG images 200, sitemap lastmod 2026-10-27, codes present in /data/fault-codes.csv. IndexNow: HTTP 200.
