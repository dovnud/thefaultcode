# Publish log

## 2026-11-06

New exact-match pages. Each code cites a manufacturer document. This entry is the content batch.

Bryant furnaces, troubleshooting guide TG-GFB80-02 (Bryant Heating & Cooling Systems, catalog TG-GFB80-02) on shareddocs.com. Amber LED, short flashes then long flashes. Pages: 12, 15, 21, 22, 23, 24, 25, 31, 32, 33, 34, 41, 43, 45, and rapid flashing. Codes 13 and 14 were already published from the 926TB install manual. The 926TB service-label chart was not transcribed onto these pages. Code 33 and code 34 say so.

Bryant 987MA Series A modulating guide (Form 987MA-01T) on shareddocs.com: codes 35 (gas valve) and 42 (inducer). Those two numbers are not on the 80% chart.

Bryant 288BNV / 189BNV service manual SM288BNV-189BNV-04 (Bryant Heating & Cooling Systems) on shareddocs.com. Outdoor pages under /ac/bryant/: 25, 31, 32, 33, 46, 48, 53, 55, 56, 83, 84.

Carrier Infinity 25VNA8 / 24VNA9 service manual, codes not already on the site: 49, 57, 65, 88, 95.

Goodman service manual RS6200007 r27, PCBHR104 unitary diagnostic chart (same manual already used for ASXC/GSXC outdoor codes): A2, A3, b0, b9.

Guides: How to Read a Bryant Furnace LED Code; How to Read a Bryant Evolution Outdoor Status Light. Existing pressure, limit, ignition, no-heat, rollout, flash-code, AC pressure, AC voltage, and heat-pump heating guides link the new codes where the manuals match.

Sitemap, llms.txt, llms-full.txt, and /data/fault-codes.csv and .json are generated from content. Amazon tag unchanged (thefaultcode-20). No new ASINs.

### Dishwashers: Samsung 3C, CE, tE and GE C2

New pages (Samsung 3C, CE and tE from Samsung Support "Samsung dishwasher is displaying an error code" (TSG10004499); GE C2 from GE Appliances "Dishwasher – Error, Fault or Function Codes"; source links on each page):

- Samsung dishwasher 3C: pump operation error, the pump has failed (turn off, start the cycle again; service if it returns) — https://thefaultcode.com/dishwashers/samsung/3c/
- Samsung dishwasher CE: communication error, the control panel cannot communicate with the rest of the dishwasher (turn off, start again; service if it continues) — https://thefaultcode.com/dishwashers/samsung/ce/
- Samsung dishwasher tE: temperature sensor error, inside temperature detected incorrectly (empty, detergent, normal cycle; breaker off and service if it returns) — https://thefaultcode.com/dishwashers/samsung/te/
- GE dishwasher C2: total pump-out cycle exceeds 7 minutes (Press RESET to stop the beep) — https://thefaultcode.com/dishwashers/ge/c2/

Internal links: Dishwasher Will Not Drain guide links GE C2 (table row and a C2 paragraph; heading now "GE C1, C2, C3 and C5"; C1 air-gap, hose and disposer steps are not applied to C2). Dishwasher Temperature, Detergent and Limescale Codes guide links Samsung tE (table row and a section next to HE/HC). Samsung's own page gives HE and tE the same opening steps, so the guide says so. HC still starts with the 30-second breaker reset. 3E stays the 176°F supply. LG tE stays the other brand's sensor code, which LG sends to a technician. Both guides updated 2026-11-06 and added to the guides' codes lists. FAQ text on both guides was left as written; the FAQ schema is generated from that same text.
Note: lastmod.json unchanged. Sitemap, llms.txt, llms-full.txt, and the CSV/JSON dataset are generated from content at build. Samsung's page labels HE and tE differently (heater error vs temperature sensor error) but the owner steps start the same way, so the pages do not claim otherwise.
Commits: 3356708 (pages, guide links, and this log).
Amazon links: amazonMax 0 on all four. Parts arrays empty. No new ASINs. tE keeps 1 primary search (dishwasher detergent, from Samsung's own "add detergent" step). 3C, CE and C2 have none. The two edited guides keep the shop searches they already had (drain hose; detergent). No Amazon links added or removed on other pages. All rel="sponsored nofollow noopener", tag=thefaultcode-20. Site total 1425 Amazon anchors, 0 bad. CJ and Angi URLs are absent from the build.
QA: build OK (365 pages). Static check of dist HTML only; amazon.com, amzn.to, CJ and Angi hosts were not requested. OG images for the four codes are 1200×630 PNG. The four routes and both guides are in dist. Codes are in fault-codes.csv, fault-codes.json and llms-full.txt. Sitemap lastmod 2026-11-06 on the four code URLs and both guides. FAQ schema on the two guides matches the visible questions and answers.
Live: pending.
IndexNow: pending.

## 2026-11-05

New heating-season pages. Each code cites a manufacturer document. This entry is the content batch; it is not a live-deploy checklist.

Furnace brands added:

- York TG9S, 12 pages, from Johnson Controls installation manual 1083287-UIM-C-0715 (1 through 11 red flashes, plus continuous amber). Example: https://www.hvacdiscounters.com/customer/docs/skudocs/coltg9s-iom-manual.pdf
- American Standard S9V2, 13 pages, from installer's guide 18-CE01D1-1E-EN on americanstandardair.com (E2.1, E2.2, E2.3, E3.1, E3.2, E3.4, E04, E05, E6.3, E7.1, E08, E09, E12).
- Amana *CVC96 / *MVC96 (IOG-2015L on amana-hac.com), 11 pages: EE0, EE2, EE3, EE4, EE5, EE6, EE7, EE8, EE9, EEd, EEF. The same chart covers the Goodman models in that family; the pages say so.
- Bryant 926TB, 2 pages (status codes 13 and 14) from the installation instructions on shareddocs.com. The rest of that model's chart is a service-label figure and was not transcribed.

AC / heat pump, same Carrier 25VNA8 / 24VNA9 service manual already used on the site: codes 33, 53, 55 and 56.

Symptom guides: Furnace Ignition Lockout; Furnace Limit Switch Open; Heat Pump Not Heating in the Cold. Existing no-heat, pressure-switch, flame-sensor, flash-code and rollout guides link the new codes where the manuals match.

Heil was not added. The public Heil/ICP install manuals point at a service-label figure for the status chart, and that figure was not clear enough to publish from.

Dealer buttons: American Standard, Amana and Bryant locators checked 2026-11-05. York's locator URL did not resolve to a dealer page, so York has no button.

Build: 320 pages. Sitemap, llms.txt, llms-full.txt, and /data/fault-codes.csv and .json are generated from content. Amazon tag unchanged (thefaultcode-20). No new ASINs.

## 2026-11-04

New pages (LG dishwasher CL and tE from the official LG USA "[LG Dishwasher] Guide to Error Codes"; LG washer CL from the official LG USA front-load washer error code list; Samsung HC from Samsung Support "Samsung dishwasher is displaying an error code" (TSG10004499); GE C5 from GE Appliances "Dishwasher - Error, Fault or Function Codes"; source links on each page):

- LG dishwasher CL: Control Lock is on, not a fault (long-press Half Load and Energy Saver for at least 3 seconds; stays on after the cycle powers the unit off) — https://thefaultcode.com/dishwashers/lg/cl/
- LG washer CL: Child Lock is on, not an error (hold the Child Lock button, or the two-button pair named in that model's manual, for 3 seconds) — https://thefaultcode.com/washers/lg/cl/
- Samsung dishwasher HC: high temperature heater error, the inside temperature is too hot (30-second breaker reset, then empty, detergent, and a Normal cycle) — https://thefaultcode.com/dishwashers/samsung/hc/
- LG dishwasher tE: temperature sensor contact problem or sensor failure (LG: service technician inspection; no reset) — https://thefaultcode.com/dishwashers/lg/te/
- GE dishwasher C5: pump-out time is too short (water turned on, retry the cycle, tap the float cover) — https://thefaultcode.com/dishwashers/ge/c5/

Internal links: Dishwasher Temperature, Detergent and Limescale Codes guide links Samsung HC and LG tE (table rows plus sections; the LG HE FAQ answer now says tE does not get the HE reset); Dishwasher Will Not Drain guide links GE C5 (table row and a paragraph; heading now "GE C1, C3 and C5"); Washer Door Will Not Lock guide links LG washer CL and LG dishwasher CL under "Related codes that are not the door", and distinguishes tCL (all three guides updated 2026-11-04 and added to the guides' codes lists).
Note: origin was already at 28f1773 at start. lastmod.json unchanged. Sitemap, llms.txt, llms-full.txt, and the CSV/JSON dataset are generated from content at build.
Commits: 5d7bd0a (pages + guide links).
Amazon links: amazonMax 0 on all five. HC keeps 1 primary search (dishwasher detergent, from Samsung's own "fill the detergent drawer" step). The two CL pages, tE, and C5 have none. A C5 supply-line primary link was avoided by putting GE's "water supply" sentence in proAdvice, which is not scanned for parts; the steps still say to make sure the water is turned on. Site total 1084 (was 1083). All rel="sponsored nofollow noopener", tag=thefaultcode-20. No Amazon links added or removed on existing pages.
QA: build OK (267 pages); static link check (1084 affiliate URLs never fetched) no new issues: same pre-existing cpsc.gov and whirlpool.com 403s; axe 0 violations on the 5 new pages, 3 edited guides, and 4 brand hubs (mobile/tablet/desktop audit). No tap targets under 44px except sitewide chrome also present on unchanged /dishwashers/bosch/e23/: the skip-to-content link (117×27 or 117×28) and the capture-form consent checkbox (22px, inside a 46px-tall label on mobile). The capture-form honeypot stays aria-hidden. click.py is not in the repo, so there was no click sweep; the capture form was not submitted.
FAQ schema on the 3 edited guides matches the visible questions and answers. Associates statement check OK (267 pages, 172 with Amazon hrefs, 0 missing); 1084 Amazon anchors validated statically, 0 bad. OG images in the build are 1200×630 PNG.
Live: all 5 URLs, the 3 edited guides, the 4 brand hubs, and /codes/ 200 with correct content, OG images 200 (image/png), sitemap lastmod 2026-11-04, codes present in /data/fault-codes.csv, fault-codes.json, and llms-full.txt. IndexNow: HTTP 200 (8 URLs).

## 2026-11-03

New pages (Bosch pages from Bosch's "Bosch Dishwasher Error Codes: Troubleshooting Guide", with Bosch's E23 self-help page as an extra source on E23; LG LE from the official LG USA "[LG Dishwasher] Guide to Error Codes"; Samsung 3C from Samsung Support "Samsung washing machine information and error codes" (TSG10000997), with Samsung's "Run diagnostics on your Samsung washer or dryer" (ANS10004796) as an extra source; source links on each page):

- Bosch dishwasher E23: drain pump issue, pump blocked, clogged or faulty (Bosch: contact Customer Support; not the E24/E25 homeowner steps) — https://thefaultcode.com/dishwashers/bosch/e23/
- Bosch dishwasher E21: heat pump blocked (30-second breaker reset, then Bosch Customer Support) — https://thefaultcode.com/dishwashers/bosch/e21/
- LG dishwasher LE: cleaning motor not functioning normally (LG: service technician inspection) — https://thefaultcode.com/dishwashers/lg/le/
- Samsung washer 3C: motor error (also 3E, E3, 1 3C; Samsung's 2-3 minute power-off, restart, then service; 3E is a voltage error on some models) — https://thefaultcode.com/washers/samsung/3c/

Internal links: Dishwasher Will Not Drain guide links Bosch E23 (table row + E23 paragraph in the Bosch section, heading now "Bosch E24, E25, E23 and E22"); Dishwasher Temperature, Detergent and Limescale Codes guide links Bosch E21 from the E12 heat-pump section (both updated 2026-11-03, both added to the guides' codes lists). LG LE and Samsung 3C have no matching guide; they are linked from their brand hubs, /codes/, /data/ and llms-full.txt.
Note: origin had 2 newer merged commits at start (9ac81a9 de-slop #6, b537de5 AdSense loader + ads.txt #7), fast-forwarded before work. The box had lost hvac-codes/node_modules, the qa axe-core module and the Playwright Chromium build; reinstalled (npm ci, qa npm install, playwright install chromium) before building and testing. lastmod.json unchanged.
Commits: 4c99715 (pages + guide links).
Amazon links: amazonMax 0 on all four, and none of them has an Amazon link. Site total unchanged at 1083. All rel="sponsored nofollow noopener", tag=thefaultcode-20.
QA: build OK (262 pages); static link check (215 affiliate URLs never fetched) no new issues: same pre-existing cpsc.gov/whirlpool.com 403s and multimeter "angi" substring false positive (the carrier.com find-a-dealer 404 from 11-02 no longer appears); axe 0 violations on new and edited pages (mobile/tablet/desktop audit), no tap targets under 44px except the sitewide capture-form items noted 10-31;
click test 640 (mobile) / 622 (desktop) elements, 0 new issues from today's pages (desktop flags the intentionally hidden nav Contact link, as before; capture form never submitted). New sitewide console message on both viewports, from the AdSense loader added in #7, not from today's pages: "Framing 'https://www.google.com/' violates the following report-only Content Security Policy directive: frame-ancestors 'self'" (report-only, nothing blocked); seo_check 0 problems, 0 image problems; Associates statement check OK (262 pages, 171 with Amazon hrefs, 0 missing); 1083 Amazon anchors validated statically, 0 bad.
Live: all 4 URLs, both edited guides and the 3 brand hubs 200 with correct content, OG images 200 (image/png), sitemap lastmod 2026-11-03, codes present in /data/fault-codes.csv, fault-codes.json and llms-full.txt (live llms-full.txt identical to the build). IndexNow: HTTP 200 (6 URLs).

## 2026-11-02

New pages (Samsung 7E from Samsung Support "Waterwall reflector error code 7E on Samsung dishwasher" (TSG10007371), with the "Samsung dishwasher is displaying an error code" list (TSG10004499) as an extra source; Samsung bE from TSG10004499; LG nE from the official LG USA "[LG Dishwasher] Guide to Error Codes"; source links on each page):

- Samsung dishwasher 7E: Waterwall reflector error (also 7C; reflector blocked, packing tape on the rail, or reflector reversed; Samsung's 2-minute breaker power cycle) — https://thefaultcode.com/dishwashers/samsung/7e/
- Samsung dishwasher bE: button error, a stuck control-panel button (also 6E) — https://thefaultcode.com/dishwashers/samsung/be/
- LG dishwasher nE: impeller not spinning normally, or dishes touching it (rearrange dishes, restart, then LG service) — https://thefaultcode.com/dishwashers/lg/ne/

Internal links: Dishwasher Leak Codes guide links Samsung 7E from the Waterwall reflector line in its Samsung LC section, and lists it in the guide's codes (updated 2026-11-02). Samsung bE and LG nE have no matching guide; they are linked from their brand hubs, /codes/, /data/ and llms-full.txt.
Note: origin had no newer commits at start. Samsung bE first built with 1 dishwasher-detergent primary search, triggered by the word "oversudsing" in a "not the same as LG bE" step; that note was moved to proAdvice (not scanned for parts) and the page rebuilt with no Amazon link. lastmod.json unchanged.
Commits: 80cecff (pages + guide link).
Amazon links: amazonMax 0 on all three, and none of them has an Amazon link. Site total unchanged at 1083. All rel="sponsored nofollow noopener", tag=thefaultcode-20.
QA: build OK (258 pages); static link check (215 affiliate URLs never fetched) no new issues from this run: same pre-existing cpsc.gov/whirlpool.com 403s and multimeter "angi" substring false positive, plus one new external failure not caused by today's pages: https://www.carrier.com/us/en/residential/find-a-dealer/ now returns 404 (linked from 18 pages, e.g. /ac/carrier/25/, /ac/carrier/31/; left unchanged, needs a replacement URL); axe 0 violations on new and edited pages (mobile/tablet/desktop audit), no tap targets under 44px except the sitewide capture-form items noted 10-31;
click test 280 (mobile) / 272 (desktop) elements, 0 new issues (desktop only flags the intentionally hidden nav Contact link, as before; capture form never submitted); bE re-clicked after the rebuild, 63 elements, 0 issues; seo_check 0 problems, 0 image problems; Associates statement check OK (258 pages, 171 with Amazon hrefs, 0 missing); 1083 Amazon anchors validated statically, 0 bad.
Live: all 3 URLs, the edited guide and both brand hubs 200 with correct content, OG images 200 (image/png), sitemap lastmod 2026-11-02, codes present in /data/fault-codes.csv and llms-full.txt. IndexNow: HTTP 200 (6 URLs).

## 2026-11-01

New pages (LG PF from the official LG USA front-load washer error code list; Bosch pages from Bosch's "Bosch Dishwasher Error Codes: Troubleshooting Guide", with Bosch's E14 self-help page as an extra source on E14; Samsung HE from Samsung Support "Samsung dishwasher is displaying an error code"; source links on each page):

- LG washer PF: power failure (supply interrupted mid-cycle; LG's unplug + hold START/PAUSE 5 s reset) — https://thefaultcode.com/washers/lg/pf/
- Bosch dishwasher E27: house power supply too low (breaker reset, then an electrician checks incoming voltage) — https://thefaultcode.com/dishwashers/bosch/e27/
- Bosch dishwasher E14: flow meter failure or a water inflow / filling-system issue (Bosch: contact Customer Support) — https://thefaultcode.com/dishwashers/bosch/e14/
- Samsung dishwasher HE: heater error, inside temperature detected incorrectly — https://thefaultcode.com/dishwashers/samsung/he/

Internal links: Dishwasher Will Not Fill guide links Bosch E14 (table row + E14 paragraph); Dishwasher Temperature, Detergent and Limescale Codes guide links Samsung HE (both updated 2026-11-01). LG PF and Bosch E27 have no matching guide; they are linked from their brand hubs, /codes/, /data/ and llms-full.txt. E27 also appears in the multimeter parts page's automatic "Codes that mention it" list (its text names a voltage check; the E27 page itself says that check is electrician work and has no Amazon link).
Note: origin had 1 newer commit at start (de4a7e8, part finder + winter furnace checklist #5), fast-forwarded before work. The build regenerated lastmod.json (about/affiliate-disclosure dates from that PR), committed with the pages.
Commits: 866752d (pages + guide links + regenerated lastmod.json).
Amazon links: amazonMax 0 on all four. HE keeps 1 primary search (dishwasher detergent, from Samsung's own "add detergent" step); PF, E27, E14 none (an E14 hose/supply-line primary link was avoided by rewording the E16/E17/E18 pointer, since Bosch gives no hose check for E14). Site total 1083 (was 1082 after #5). All rel="sponsored nofollow noopener", tag=thefaultcode-20.
QA: build OK (255 pages); static link check (215 affiliate URLs never fetched) no new issues (identical issue list to 10-31: pre-existing cpsc.gov/whirlpool.com 403s and multimeter "angi" substring false positive); axe 0 violations on new and edited pages (mobile/tablet/desktop audit), no tap targets under 44px except the sitewide capture-form items noted 10-31;
click test 642 (mobile) / 624 (desktop) elements, 0 new issues (desktop only flags the intentionally hidden nav Contact link, as before; capture form never submitted); seo_check 0 problems, 0 image problems; Associates statement check OK (255 pages, 171 with Amazon hrefs, 0 missing); 1083 Amazon anchors validated statically, 0 bad.
Live: all 4 URLs and both edited guides 200 with correct content, OG images 200 (image/png), sitemap lastmod 2026-11-01, codes present in /data/fault-codes.csv and llms-full.txt. IndexNow: HTTP 200 (6 URLs).

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
