# Publish log

## 2026-11-11

### Heating-season furnace, tankless, and mini-split codes

39 new pages. Each meaning is taken from the manufacturer document named on the page, read 2026-11-11. Sitemap, llms.txt, llms-full.txt, and the dataset are generated from content. Amazon tag unchanged. No new ASINs. amazonMax is 0 and parts arrays are empty on every new page.

Goodman service manual RS6621003r3 (June 2020), 80% single-stage *MES80 / *CES80 (GMES80, GCES80, AMES80, ACES80, VMES80, VCES80). Counted LED flashes, not the 7-segment EE chart:

- 1 flash ignition lockout — https://thefaultcode.com/goodman/1-flash/
- 2 flashes pressure switch stuck closed — https://thefaultcode.com/goodman/2-flashes/
- 3 flashes pressure switch not closed — https://thefaultcode.com/goodman/3-flashes/
- 4 flashes open limit — https://thefaultcode.com/goodman/4-flashes/
- 5 flashes flame sensed with no call for heat — https://thefaultcode.com/goodman/5-flashes/
- 6 flashes rollout or blown control fuse — https://thefaultcode.com/goodman/6-flashes/
- 7 flashes low flame signal — https://thefaultcode.com/goodman/7-flashes/
- 8 flashes igniter relay fault — https://thefaultcode.com/goodman/8-flashes/
- 10 flashes open fuse — https://thefaultcode.com/goodman/10-flashes/
- 11 flashes igniter open — https://thefaultcode.com/goodman/11-flashes/
- 12 flashes inducer relay fault — https://thefaultcode.com/goodman/12-flashes/
- Rapid flash reversed polarity — https://thefaultcode.com/goodman/rapid-flash/

Rheem use and care AP21820 Rev 04, super high efficiency condensing direct-vent tankless (RTGH-95/90/84/68DVL-3 on the temperature-rise chart). Code 11 also cites troubleshooting manual AP21822 Rev 02 for the flame-rod description:

- 1L lime deposits — https://thefaultcode.com/water-heaters/rheem/1l/
- 11 gas shut-off not fully open — https://thefaultcode.com/water-heaters/rheem/11/
- 12 gas supply interrupted — https://thefaultcode.com/water-heaters/rheem/12/
- 14 overheating — https://thefaultcode.com/water-heaters/rheem/14/
- 29 neutralizer clogged — https://thefaultcode.com/water-heaters/rheem/29/
- 31 inlet thermistor — https://thefaultcode.com/water-heaters/rheem/31/
- 33 outlet thermistor — https://thefaultcode.com/water-heaters/rheem/33/
- 61 blower motor — https://thefaultcode.com/water-heaters/rheem/61/
- 66 bypass motor — https://thefaultcode.com/water-heaters/rheem/66/
- 71 solenoid valve circuit — https://thefaultcode.com/water-heaters/rheem/71/
- 88 flush reminder — https://thefaultcode.com/water-heaters/rheem/88/
- 90 / 99 intake or exhaust blocked — https://thefaultcode.com/water-heaters/rheem/90/
- P1 not enough water flow — https://thefaultcode.com/water-heaters/rheem/p1/

Navien NPE-2 user's information manual, rows not already published: E109, E515, E760, E788.

- https://thefaultcode.com/water-heaters/navien/e109/
- https://thefaultcode.com/water-heaters/navien/e515/
- https://thefaultcode.com/water-heaters/navien/e760/
- https://thefaultcode.com/water-heaters/navien/e788/

Rinnai N-series with-pump SENSEI manual, section 5.6: 16, 25, 61.

- https://thefaultcode.com/water-heaters/rinnai/16/
- https://thefaultcode.com/water-heaters/rinnai/25/
- https://thefaultcode.com/water-heaters/rinnai/61/

Daikin SiUS041638EA (FTX30NVJU / FTX36NVJU): E6, U2, L4, F3.

- https://thefaultcode.com/ac/daikin/e6/
- https://thefaultcode.com/ac/daikin/u2/
- https://thefaultcode.com/ac/daikin/l4/
- https://thefaultcode.com/ac/daikin/f3/

Mitsubishi Electric OBH872A table 9-4: 4 blinks, 6 blinks, 14 blinks.

- https://thefaultcode.com/ac/mitsubishi/4-blinks/
- https://thefaultcode.com/ac/mitsubishi/6-blinks/
- https://thefaultcode.com/ac/mitsubishi/14-blinks/

Not published: Goodman 9 flashes (twinning only). Mitsubishi letter code E6 (OBH872A uses blink counts; European "- E6" on a model name is a revision suffix, not this fault). Daikin U0 (it appears in the remote's code cycle in SiUS041638EA but that manual's diagnosis table does not define it). Rinnai LC (not in the N-series with-pump section 5.6 used for the existing Rinnai pages).

## 2026-11-10

### Design and quality pass (Nov 10 audit)

No new pages. Commit a17d1b8. Affiliate, Amazon, ads, lead and proReferral code untouched (no diff in src/config, src/data, partLinks, CodeParts, CaptureForm).

1. Phone typography: a sitewide floor in global.css. Labels, badges, code-card brand lines, small buttons, footer links, the logo tagline, form labels and tiles are now at least 12.5px. On desktop the header logo text gets a min-width so the bigger tagline does not cause a layout shift when fonts swap. Text nodes under 12px at 390px (Playwright): before 139 on home, code, hub and guide pages (home 25, /ac/goodman/09/ 14, /lennox/ 90, guide 10), plus 183 on /furnaces/ and 11 on /parts/for/ac/daikin/, so 333 in total. After: 0 on those pages and on 13 more sampled pages, locally and live.
2. Category hubs (/furnaces/, /ac/, /washers/, /dishwashers/, /water-heaters/): the long paragraph that named codes is now a table with Brand, Code and Short meaning columns. Its rows are the same code pages the paragraph linked. Each meaning is the first sentence of the meaning field in the content collection.
3. "Can I fix this myself?" mark (src/lib/diy.ts, plus an optional `diy` frontmatter field that no page sets yet). The rule is conservative. proNeeded gives No. If the causes or steps mention gas, electrical or refrigerant work (gas valve, wiring, voltage, capacitor, ignitor, burner, compressor, control board and similar), the page shows no mark. A step marked Technician, or any HVAC page, gives Maybe. Washer and dishwasher pages with homeowner-only steps get Yes. Counts: Yes 86, Maybe 7, No 250, none 14.
4. /parts/for/ac/daikin/ is now noindex and out of the sitemap (src/lib/thin.ts). All five Daikin codes come from one service manual, SiUS041638EA, and four are technician-only. The page had no Daikin-specific part data beyond two generic tool entries, so nothing was padded. The page still works for visitors.
5. Blink-pattern drawings (BlinkPattern.astro, src/lib/blink.ts) on 43 pages. Each is an SVG timeline with a text alternative. On timed patterns a Play button starts the animation, and it stays hidden when the visitor's device asks for reduced motion. Timings were checked against the cited PDFs on 2026-11-10:
   - Carrier 25VNA8/24VNA9 SM and Bryant 288BNV/189BNV SM: short flash 0.25 s on, long flash 1.0 s on, 0.25 s between flashes, 1.0 s between the short and long groups, then 2.5 s off. Carrier 25 31 32 33 46 48 49 53 55 56 57 65 83 84 88 95. Bryant 25 31 32 33 46 48 53 55 56 83 84.
   - York TG9S IOM: each flash is 1/3 s on and 1/3 s off, then a 2-second pause. 1 to 11 red flashes. Continuous amber was skipped because the manual gives no rate for it.
   - Mitsubishi OBH872A table 9-4: N blinks then 2.5 s off, drawn untimed because the manual gives no blink length (2, 3, 5 and 7 blinks). Continuous blink is 0.5 s on and 0.5 s off.
   No photos and no generated images.
Also: the home search "Look up" label background changed to --sig-ink, which fixes a pre-existing axe color-contrast failure on desktop.
QA: build OK (501 pages). axe found 0 violations on mobile and desktop across 22 pages, including with the blink animation playing. The audit found no overflow and no new tap targets under 44px; only the existing capture-form honeypot and checkbox are flagged. CLS stays at or below 0.006 after the header fix. seo_check: 0 problems. stmt_check OK. 1467 Amazon anchors validated statically, 0 bad. The static link check (259 affiliate URLs never fetched) found no new issues. The mobile click test was stopped partway because it was slow; it found no issues beyond the existing google.com report-only CSP console message and the new Play button, which the script does not recognise and which was checked separately to toggle aria-pressed.
Live (390px): 0 text nodes under 12px, axe 0, tables on all five hubs, Daikin page noindex and absent from the sitemap. IndexNow: HTTP 200 for 48 URLs (5 hubs and 43 blink pages).

### Heating-season Lennox SL280 codes

25 new furnace pages from the same official manual already used for E200, E223, E250, E270 and E291: Lennox SL280DFNV installation instructions 508150-02 (04/2024) on lennox.com, integrated control diagnostic codes, the seven-segment LED, not the ML180 red/green chart. Each page was checked against that PDF on 2026-11-10. Sitemap, llms.txt, llms-full.txt, and the CSV/JSON dataset are generated from content. Amazon tag unchanged (thefaultcode-20). No new ASINs. amazonMax is 0 and parts arrays are empty on every new page. None of these rows names a dirty filter; E291 remains the SL280 row that does.

New pages:

- E201 indoor blower communication failure — https://thefaultcode.com/lennox/e201/
- E202 indoor blower motor mismatch (capacity code) — https://thefaultcode.com/lennox/e202/
- E203 appliance capacity / size not programmed — https://thefaultcode.com/lennox/e203/
- E204 gas valve mis-wired — https://thefaultcode.com/lennox/e204/
- E205 gas valve control relay contact shorted — https://thefaultcode.com/lennox/e205/
- E206 gas valve second-stage relay failure (runs first stage for the rest of that demand) — https://thefaultcode.com/lennox/e206/
- E207 hot surface ignitor sensed open — https://thefaultcode.com/lennox/e207/
- E224 low pressure switch failed closed — https://thefaultcode.com/lennox/e224/
- E225 high pressure switch failed open — https://thefaultcode.com/lennox/e225/
- E226 high pressure switch failed closed — https://thefaultcode.com/lennox/e226/
- E227 low pressure switch open during trial for ignition or run mode — https://thefaultcode.com/lennox/e227/
- E228 combustion air inducer calibration failure — https://thefaultcode.com/lennox/e228/
- E240 low flame current in run mode — https://thefaultcode.com/lennox/e240/
- E241 flame sensed out of sequence, flame still present — https://thefaultcode.com/lennox/e241/
- E252 discharge air temperature too high (gas heat only) — https://thefaultcode.com/lennox/e252/
- E271 soft lockout: retries ran out after the pressure switch opened — https://thefaultcode.com/lennox/e271/
- E272 soft lockout: recycles ran out after the pressure switch opened — https://thefaultcode.com/lennox/e272/
- E273 soft lockout: recycles ran out after flame failure — https://thefaultcode.com/lennox/e273/
- E274 soft lockout: recycles ran out after the limit circuit opened, or the limit stayed open longer than 3 minutes — https://thefaultcode.com/lennox/e274/
- E275 soft lockout: flame sensed out of sequence, flame signal gone — https://thefaultcode.com/lennox/e275/
- E276 watchguard calibration failure, 1-hour soft lockout — https://thefaultcode.com/lennox/e276/
- E290 ignitor circuit fault, failed ignitor or triggering circuitry — https://thefaultcode.com/lennox/e290/
- E292 indoor blower motor unable to start (obstructed wheel or seized bearings) — https://thefaultcode.com/lennox/e292/
- E294 combustion air inducer over current — https://thefaultcode.com/lennox/e294/
- E295 indoor blower motor temperature too high — https://thefaultcode.com/lennox/e295/

Not published: E229 (ignition on high fire; the manual says no action is needed), E310–E312 (sensor or airflow warnings, including a cooling/continuous-fan row), and further codes after that table. Heil, Payne, Coleman and sister-brand twin pages were not added in this batch.

Guides updated 2026-11-10 where those rows match: furnace pressure switch (E224, E225, E226, E227, E228, E271, E272, E276), ignition lockout (E207, E290, E241, E275, E273), open limit (E252, E274), flame sensor (E240, E273), how to read a furnace LED (SL280 row expanded). Uppercase `/lennox/E201/`-style aliases were added to `public/_redirects`, same pattern as the existing E200/E223/E250/E270/E291 redirects.



### Washer and dishwasher codes (box build)

Ten new pages, built on the box with Grok Bot usage. Each one was checked against the manufacturer page named on it, read 2026-11-10. None duplicates an existing page or alias, and none overlaps the Lennox batch above. amazonMax is 0 on every new page.

- Samsung washer dn, downloading an update, not a fault; service only after 30 minutes powered on with working Wi-Fi — https://thefaultcode.com/washers/samsung/dn/ (Samsung TSG10000997)
- GE dishwasher PF, power failure; select the cycle and press Start — https://thefaultcode.com/dishwashers/ge/pf/ (GE contentId 16673)
- GE dishwasher Cup Open, detergent cup not closed; latch it or press Start again without opening the door — https://thefaultcode.com/dishwashers/ge/cup-open/ (GE 16673)
- GE dishwasher 1H (number + H), Delay Start is on, with GE's cancel steps — https://thefaultcode.com/dishwashers/ge/1h/ (GE 16673, 17913, 18402, 17397)
- GE dishwasher FTD (F56), failure to drain; hose, air gap, disposer, sump — https://thefaultcode.com/dishwashers/ge/ftd/ (GE 16673, 16240)
- LG washer Ed1 / Ed2, detergent reservoir level did not drop (pump fault / open circuit) — https://thefaultcode.com/washers/lg/ed1-ed2/ (LG front-load error code list)
- LG washer PS (may read P5), power supply issue; no power strip, wall outlet, 60-second restart — https://thefaultcode.com/washers/lg/ps/ (LG front-load list)
- Whirlpool washer dET, detergent cartridge not detected, select models — https://thefaultcode.com/washers/whirlpool/det/ (Whirlpool front-load error codes)
- Whirlpool washer Int, cycle paused or canceled; Pause/Cancel twice, Power once — https://thefaultcode.com/washers/whirlpool/int/ (Whirlpool front-load error codes)
- Whirlpool washer rL (F34), items in the drum during Clean Washer — https://thefaultcode.com/washers/whirlpool/rl/ (Whirlpool front-load error codes)

Not published: LG Ed3/Ed4 (softener twin of Ed1/Ed2, left for a later day to keep this batch to 10); LG E80, nC, nE, nF, Ed5, dHE, HE, SE and Samsung dishwasher PC (reset, then service only); GE LEAK DETECTED and PrS (service only); Samsung washer 4C2 hot/cold and Self Clean reminder (already covered / not a code).

Amazon: three new pages carry one primary search each, from the code's own step: GE Cup Open (dishwasher detergent), GE FTD (dishwasher drain hose, same as GE C1), LG Ed1/Ed2 (HE laundry detergent). dET and rL were worded so no detergent or washer-cleaner search triggers, because their fixes are not a purchase. The other five have none. All anchors rel="sponsored nofollow noopener", tag thefaultcode-20, no prices; 1460 anchors validated statically in dist, 0 bad. No existing page's Amazon links changed. proReferral/CJ/Angi untouched.

Guides updated 2026-11-10: dishwasher will not drain (FTD), dishwasher temperature and detergent (Cup Open vs C8), washer suds and detergent (Ed1/Ed2, dET, rL).

Redirects: new aliases /dishwashers/ge/f56/, /dishwashers/ge/ih/, /washers/lg/ed1/, /washers/lg/ed2/, /washers/lg/p5/, /washers/whirlpool/f34/. After the Lennox batch the file had 2,016 static rules, over Cloudflare Pages' 2,000 static limit. The 739 /washer/, /dishwasher/ and /water-heater/ singular-prefix rules were replaced by 3 splat rules at the end of the file (1,277 static + 3 dynamic). Every removed rule was checked to resolve to the same final page (some now take 2 hops). Live checks: /washer/lg/cd/, /washer/samsung/pf/, /washer/lg/PF/, /dishwasher/lg/pf/, /water-heater/navien/e003/, the six new aliases, /goodman/EE0/ and the last Lennox alias all reach the right page.

QA: build OK (501 pages after rebase onto the Lennox batch). Static link check: no new issues (pre-existing cpsc.gov/whirlpool.com 403s, a Fujitsu PDF timeout, and the multimeter "angi" substring false positive); amazon.com, amzn.to, CJ and Angi were never requested. axe 0 violations on the 10 new pages, 3 guides and 2 hubs (mobile, tablet, desktop); the only small targets are the sitewide capture-form consent checkbox (22px) and search control, as before. Click test 315 (mobile) / 307 (desktop) elements: only the intentionally hidden desktop nav Contact link and report-only CSP console notices from the sitewide AdSense script; capture form never submitted. seo_check 0 problems; Associates statement check OK (501 pages, 234 with Amazon hrefs, 0 missing).

Commits: 67fc94e (pages, guides, aliases), 6ac581a (_redirects under the limit).

Live on 2026-11-10: all 10 new URLs and the 3 guides returned 200 with the H1 above, self-canonical, no noindex, in the sitemap; OG images 200 image/png; codes in /data/fault-codes.csv. IndexNow: HTTP 200 for 17 URLs (10 pages, 3 guides, 4 brand hubs). That acceptance is not indexing.

## 2026-11-09

### Washer, dishwasher and room-AC codes

Ten new pages. Each one was checked against the manufacturer page named on it, read 2026-11-09. No new code pages had landed earlier on this date (the only merge was the 404 and redirect pass). Sitemap, llms.txt, llms-full.txt, and the CSV/JSON dataset are generated from content. Amazon tag unchanged (thefaultcode-20). No new ASINs. Nine of the ten pages have no Amazon link. Samsung dishwasher PE has one search, dishwasher detergent, because Samsung's own step says to add detergent and run a half-load cycle. amazonMax is 0 on every new page, so that search is the primary button only.

- LG washer Cd, cool down after a dry cycle, not a fault, washer-dryer combos on the front-load list — https://thefaultcode.com/washers/lg/cd/
- LG washer OPn, detergent drawer not fully inserted or opened while running — https://thefaultcode.com/washers/lg/opn/
- LG washer dcL, ezDispense nozzle clean, not a fault, about 16 minutes, ezDispense models only — https://thefaultcode.com/washers/lg/dcl/
- Samsung washer ddC (also dC3), Add Door not locked, not the main-door dE page — https://thefaultcode.com/washers/samsung/ddc/
- Samsung washer Cb (also C6), calibration mode, not a fault, tub must be empty — https://thefaultcode.com/washers/samsung/cb/
- Samsung dishwasher AP, Access Point pairing, not a fault — https://thefaultcode.com/dishwashers/samsung/ap/
- Samsung dishwasher PE, half-load function not performing correctly — https://thefaultcode.com/dishwashers/samsung/pe/
- LG dishwasher PF, power was cut and the cycle can resume, not a fault, and not the washer PF reset — https://thefaultcode.com/dishwashers/lg/pf/
- LG room AC CH04 (window and portable units may show FL), condensate. Window and portable: drain the rear port. Ceiling: 5-minute power cycle, then service. The two procedures are separate on the page — https://thefaultcode.com/ac/lg/ch04/
- LG room AC CH07, heat and cool selected at the same time on a 2-in-1 or multi-room system — https://thefaultcode.com/ac/lg/ch07/

Sources: LG front-load washer error-code list; Samsung washing machine information and error codes (TSG10000997); Samsung dishwasher error codes (TSG10004499); LG dishwasher guide to error codes; LG air conditioner guide to error codes. All on the manufacturer's own site.

Not published: Samsung Ur (already on the UE page); Samsung washer 4E/5E and dishwasher 4E/5E/IE/6E (aliases of pages that exist); LG dishwasher FE (already covered with AE); LG HE, SE, Ed5, nC, nE, nF and Samsung washer tE/HE/HC where the support page only says reset, then service; Bosch codes whose official page only says call support; Lennox mini-split CL/dF/LL; further sister-brand twin pages; the removed Mitsubishi E6 example. Samsung washer dn (download in progress) and the GE dishwasher PF, Cup Open and 1H rows were left off. The ten pages above filled the day's cap, and GE's article says not every code is on every model.

Quality fixes, no new sister-brand pages: code pages for Trane/American Standard, Carrier/Bryant, and Goodman/Amana now cross-link the sister page that already exists, and the Goodman/Amana sentence names the two different charts. The 23 October Goodman furnace pages (EE0, EE1, EE2, EE3, EE4, EE5, EE6, EEA, EEb, EEC, EEE, EEL, EEn, E10, E11) now name the single-stage *R9S96 / *D9S96 / *R9S92 family in IOG-2037B and have sourceTitle set. Where the same characters exist on the two-stage *CVC96 / *MVC96 chart, the Goodman page points at the IOG-2015L page. Trane E2.3 and American Standard E2.3: both manuals say the 1st stage gas valve was not energized after 10 times. Trane Service Facts S9V2-SF-2A-EN says 24 VAC was not sensed on MVL and the step is to replace the integrated furnace control, not the gas valve. The American Standard installer's guide 18-CE01D1-1E-EN does not name a replacement part. The gas-valve part was removed from the American Standard page. No Amazon link was added or removed on those furnace pages. Existing affiliate links were left in place.

Guides updated 2026-11-09: washer door (ddC), washer suds (OPn and dcL are not suds), dishwasher temperature (PE, AP, and LG dishwasher PF are not heater codes). FAQ schema is generated from the same questions and answers shown on the page.

Build: 466 routes. Static check of dist HTML only. amazon.com, amzn.to, CJ and Angi hosts were not requested. New pages: one H1, self-canonical, no noindex, in the sitemap with lastmod 2026-11-09, in the dataset and llms-full.txt, OG images 1200×630 PNG. axe 0 violations on the 10 new pages, the 3 edited guides, both E2.3 pages, Goodman EE0, and unchanged Bosch E23 (mobile, tablet, desktop). The capture form was not submitted. Inline text links and the sitewide search control, skip link, and consent checkbox are under 44px on the unchanged Bosch page as well.

Content commit 22f78da. Merged to content/furnace-codes as 94ef936 (pull request 15).

Live on 2026-11-09 after the Cloudflare Pages production deploy: all 10 new URLs returned 200, with the H1 above, a self-canonical, no noindex, sitemap lastmod 2026-11-09, and an OG image of 200 image/png at 1200×630. The three edited guides, Goodman EE0, Trane E2.3, American Standard E2.3, Samsung washer dE, and /ac/lg/ also returned 200 with a self-canonical and no noindex. Samsung PE's only Amazon anchor is the dishwasher-detergent search, rel="sponsored nofollow noopener", tag thefaultcode-20, with the Associates sentence. American Standard E2.3 has no Amazon link and no parts list. IndexNow: HTTP 200 for 47 new and updated URLs. That acceptance is not indexing. Search Console and GA4 were not read. No property access was available, and no new sign-in was attempted.

### 404 and link check

No new code pages in that pass. Amazon tag unchanged. No Amazon links added or removed.

Live crawl of the sitemap (453 URLs) and of href/src links on those pages, llms.txt, llms-full.txt, and the dataset: every internal content URL returned 200. Sitemap URLs are the final https://thefaultcode.com/.../ form, with a self canonical, and none carry noindex. The 404 page is noindex, has no canonical, and is not in the sitemap. That noindex is intentional. www and http already 301 to the apex https host. A missing trailing slash on a real directory 308s to the slashed URL. Those redirects are the host canonical, and the site does not link to them.

What was actually 404ing: the code in the case printed on the appliance (`/goodman/EE0/`, `/washers/lg/vS/`, `/washers/lg/OE/`), dot and alias forms the pages already name (`/trane/e2.3/`, `/washers/lg/e03/`, `/washers/lg/u5/`, `/dishwashers/bosch/e16/`), and the furnace-style or singular prefix (`/whirlpool/f5e2/`, `/washer/lg/oe/`, `/navien/E003/`). `public/_redirects` sends each of those to the one published page, 301. Samsung washer 3E is not redirected, because that support page uses 3E for two different faults. `/lg/oe/` is not redirected, because LG uses OE on both the washer and the dishwasher. Removed example fixtures (`/goodman/3-flashes/`, `/mitsubishi/e6/`) stay 404. Nothing redirects to the home page.

About and the dataset page were linking to `/cdn-cgi/l/email-protection`, which is Cloudflare's email-obfuscation URL and returns Cloudflare's own 404 (title "Email Protection | Cloudflare", noindex). The build was stripping `<!--email_off-->`, so obfuscation rewrote the mailto. Mailto links now go out through a component that keeps those comments. The address is still contact@thefaultcode.com.

`/water-heaters/` and `/parts/for/water-heaters/` were in the sitemap with no lastmod. The date list had not been updated when that category was added. Both now use 2026-11-08, the newest code on those hubs.

Carrier dealer link: https://www.carrier.com/us/en/residential/find-a-dealer/ was checked again on this date. It returns 200, the title is "Find a local HVAC Dealer or Contractor", and the page canonical is that same URL. https://www.carrier.com/residential/en/us/find-a-dealer/ 301s to it. The link was already the current official locator, so it was not replaced. The 404 recorded on 2026-11-02 is not what this URL returns now.

Build: 454 routes. Sitemap: 453 HTML URLs, all with lastmod. Static check of dist HTML, llms, and the dataset found no internal link to a missing path. Affiliate hosts were not requested.

## 2026-11-08

New exact-match pages. Each code cites a manufacturer document read on this date. Sitemap, llms.txt, llms-full.txt, and the CSV/JSON dataset are generated from content at build. Amazon tag unchanged (thefaultcode-20). No new ASINs. amazonMax is 0 on every new page except Lennox E291, which keeps a furnace-filter search because that row names a dirty filter.

Lennox SL280DFNV installation instructions 508150-02 (04/2024) on lennox.com. Seven-segment codes, not the ML180 red/green chart already on the site: E200, E223, E250, E270, E291.

Daikin service manual SiUS041638EA (FTX30NVJU / FTX36NVJU) on cdn.daikincloud.io. Mini-split pages under /ac/daikin/: U4, A5, A6, E7, EA.

Fujitsu General service manual SR_AS024EF_04 (ASUG09/12/15LZAS) on portal.fujitsugeneral.com. Lamp counts are the operation lamp, then the timer lamp: 11, 41, 51, 63, 99.

Mitsubishi Electric service manual OBH872A (MSZ-FS06NA through MSZ-FS18NA), troubleshooting check table 9-4. Blink pages under /ac/mitsubishi/: 2 blinks, 3 blinks, 5 blinks, 7 blinks, continuous blink. These are not the failure-mode recall counts.

Navien NPE-2 user's information manual (NPE-180A2, NPE-210A2, NPE-240A2 and the S2 models): E003, E004, E012, E016, E030, E110. New category /water-heaters/.

Rinnai N-series residential with-pump SENSEI installation and operation manual, section 5.6 (RUR199i, RUR160i, RUR199e, RUR160e): 10, 11, 12, 14, SS.

Whirlpool Product Help: F0 E5 (off balance) and LOC (control lock). F8 E2 was already published and was left as it was.

Bosch dishwasher error-code page: E01, E09, E19, E20. E09 and E20 use Bosch's same heater-fault sentence. They are not E12.

Guides updated 2026-11-08 where those documents match: furnace air filter (E291), pressure switch (E223), ignition lockout (E270), open limit (E250, E291), rollout (E200), how to read a furnace LED (SL280 row), washer unbalanced load (F0 E5), dishwasher temperature (E09, E20).

York furnace flash codes were already published and were not repeated. Heil, and any code whose primary source did not state a meaning, were skipped.

## 2026-11-07

New exact-match pages. Each code cites a manufacturer document read on this date. Sitemap, llms.txt, llms-full.txt, and the CSV/JSON dataset are generated from content at build. Amazon tag unchanged (thefaultcode-20). No new ASINs. amazonMax 0 on every new page.

Goodman *R9S96 / *D9S96 / *R9S92 single-stage furnaces, IOG-2037B (already used for the EE and E10 pages). Codes that were on the 1-stage troubleshooting chart and not yet published: EEJ, EEH, EbL, EbU, EAF, EAL, EAS, Ear.

Goodman service manual RS6200007 r27, PCBHR104 unitary diagnostic chart (same manual already used for the outdoor codes): d0, d1, d3, d4, 05, 06, L6, 07, L7, 08, 09, P0. 08 and 09 are also linked from the AC voltage guide. The 185 VAC note on 08 is the PCBHR104 row, not a change to the published L8 page.

Rheem (-)96V installation instructions 92-24161-124-03, Table 20 (same manual already used for the numbered R96V codes): d1, d4, d6, 55, 58. Code 55 is linked from the pressure-switch guide.

Trane S9V2 Service Facts S9V2-SF-2A-EN (same document already used for the published S9V2 codes): E2.3, E2.4, E3.3, E7.2, E10, E11, E13, E14, E15, E17, E18. E3.3 is linked from the pressure-switch guide. E2.3 and E11 are linked from the ignition-lockout guide as gas-valve faults, not retry lockouts.

Carrier 59SC5A service label, Fig. 55 (same manual already used for the published Carrier furnace codes): 11, 12, continuous off, continuous on.

Guides updated 2026-11-07 where those manuals match: furnace pressure switch, AC voltage and power, how to read a furnace LED, furnace ignition lockout, furnace blowing cold air.

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
Commits: 3356708 (pages and guide links), ab6a4c4 (publish-log hash), merged to content/furnace-codes as 15a6b74.
Amazon links: amazonMax 0 on all four. Parts arrays empty. No new ASINs. tE keeps 1 primary search (dishwasher detergent, from Samsung's own "add detergent" step). 3C, CE and C2 have none. The two edited guides keep the shop searches they already had (drain hose; detergent). No Amazon links added or removed on other pages. All rel="sponsored nofollow noopener", tag=thefaultcode-20. Site total 1425 Amazon anchors, 0 bad. CJ and Angi URLs are absent from the build.
QA: build OK (365 pages). Static check of dist HTML only; amazon.com, amzn.to, CJ and Angi hosts were not requested. OG images for the four codes are 1200×630 PNG. The four routes and both guides are in dist. Codes are in fault-codes.csv, fault-codes.json and llms-full.txt. Sitemap lastmod 2026-11-06 on the four code URLs and both guides. FAQ schema on the two guides matches the visible questions and answers.
Live: all 4 URLs and both edited guides 200 with the correct H1 and meaning, OG images 200 (image/png, 1200×630), sitemap lastmod 2026-11-06, codes present in /data/fault-codes.csv, fault-codes.json, and llms-full.txt. IndexNow: HTTP 200 (6 URLs).

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
