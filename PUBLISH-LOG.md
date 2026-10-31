# Publish log

## 2026-10-31

New pages (LG pages from the official LG USA front-load washer error code list; GE pages from GE Appliances "Dishwasher - Error, Fault or Function Codes", with GE's 999 reset article and Floor Protect article as extra sources on 999; source links on each page):

- LG washer PE: water level sensor error — https://thefaultcode.com/washers/lg/pe/
- LG washer vS: vibration sensor error (also shown as u5 / uS) — https://thefaultcode.com/washers/lg/vs/
- GE dishwasher 999: control reset needed, or a possible leak on Floor Protect with Alert models — https://thefaultcode.com/dishwashers/ge/999/
- GE dishwasher C7: water temperature sensor circuit failure — https://thefaultcode.com/dishwashers/ge/c7/

Internal links: Washer Unbalanced Load, Overfill and Leak Codes guide links LG vS and PE; Dishwasher Leak Codes guide links GE 999; Dishwasher Temperature, Detergent and Limescale Codes guide links GE C7 (all three updated 2026-10-31).
Note: origin had 1 newer commit at start (005e520, Email capture #4), fast-forwarded before work. That PR adds a capture form to every code page; click.py now checks its submit button without ever submitting it (backup click.py.bak-1031). The audit's two sub-44px items on code pages (honeypot input, hidden/aria-hidden; consent checkbox 22px inside a 46px-tall label) come from that form, are sitewide, and are not from the new pages.
Commits: f8cd540 (pages + guide links; lastmod.json unchanged).
Amazon links: none on the four new pages (amazonMax 0; a leveling-tool primary link on vS was avoided by rewording the UE pointer, since leveling is not a vS fix). Site total unchanged at 1056. All rel="sponsored nofollow noopener", tag=thefaultcode-20.
QA: build OK (232 pages); static link check (213 affiliate URLs never fetched) no new issues (same pre-existing cpsc.gov/whirlpool.com 403s and multimeter "angi" substring false positive); axe 0 violations on new and edited pages (mobile/tablet/desktop audit), no tap targets under 44px except the capture-form items noted above;
click test 645 (mobile) / 627 (desktop) elements, 0 new issues (desktop only flags the intentionally hidden nav Contact link, as before); seo_check 0 problems, 0 image problems; Associates statement check OK; 1056 Amazon anchors validated statically, 0 bad.
Live: all 4 URLs and the 3 edited guides 200 with correct content, OG images 200 (image/png), sitemap lastmod 2026-10-31, codes present in /data/fault-codes.csv and llms-full.txt. IndexNow: HTTP 200 (7 URLs).

## 2026-10-30

New pages (LG pages from the official LG USA front-load washer error code list; Carrier 48 from the Carrier Infinity 25VNA8/24VNA9 service manual; source links on each page):

- LG washer FF: freeze failure (controls disabled below 1°C / 34°F; LG's thawing steps) — https://thefaultcode.com/washers/lg/ff/
- LG washer AE: leakage error (anti-flood safety switch activated) — https://thefaultcode.com/washers/lg/ae/
- LG washer tE: heating error, usually a faulty thermistor — https://thefaultcode.com/washers/lg/te/
- Carrier 48: lost inverter communications (elevated from 33), Infinity 25VNA8 / 24VNA9 — https://thefaultcode.com/ac/carrier/48/

Internal links: Washer Will Not Fill guide now links LG FF; Washer Unbalanced Load, Overfill and Leak Codes guide links LG AE (both updated 2026-10-30).
Note: the 10-28 and 10-29 runs did not publish; the tree was clean at start and origin had 3 newer merged commits (450510f, 9d92eca, e3f661c), fast-forwarded before work.
Commits: fb33c1a (pages + guide links + regenerated lastmod.json).
Amazon links: FF 1 (primary search only, amazonMax 0), AE 3 (amazonMax 2, no parts row), tE and 48 none. All rel="sponsored nofollow noopener", tag=thefaultcode-20.
QA: build OK (228 pages); static link check (213 affiliate URLs never fetched) no new issues (only pre-existing 403s from cpsc.gov/whirlpool.com bot blocking); axe 0 violations and no tap targets under 44px on the new and edited pages (mobile/tablet/desktop);
click test 335 (mobile) / 325 (desktop) elements, 0 new issues (desktop only flags the intentionally hidden nav Contact link, as before); seo_check 0 problems, 0 image problems; Associates statement check OK; 1056 Amazon anchors validated statically, 0 bad.
Live: all 4 URLs and both edited guides 200 with correct content, OG images 200, sitemap lastmod 2026-10-30, codes present in /data/fault-codes.csv and llms-full.txt. IndexNow: HTTP 200 (6 URLs).

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
