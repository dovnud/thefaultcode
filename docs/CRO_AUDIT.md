# CRO audit — thefaultcode.com

Live review, 27 Oct 2026, at 390×844 and 1280×900: homepage, Carrier 33, LG OE, Bosch E24, guides index, flame-sensor guide, Carrier hub, limit-switch parts page, contact, affiliate disclosure. Paths are the live templates. Scores are expert judgment, not measured traffic or revenue.

## 1. Conversion score

**4/10.** The page answers the code, names The Fault Code editorial team, links the manual, and uses Amazon tag `thefaultcode-20` with `rel="sponsored"` and the Associates sentence. The visit still ends at the meaning. On a phone the first screen is a long disclosure and an H1 that repeats the answer. The filled button is the unpaid dealer locator. Paid controls all say “Shop on Amazon.”

**Typical visitor’s chance of an affiliate click: low.** The answer shows before any sponsored control. At 1280px the sidebar sits beside the answer, with five identical labels, including switches the parts guide will not sell.

## 2. Scorecard (1–5)

| Item | Score | Note |
|---|---|---|
| First impression | 4 | Clear. At 390px the lookup is on the bottom edge. |
| CTA visibility | 2 | Sidebar at 1280px. Nothing on the 390px code screen. |
| CTA wording | 2 | “Shop on Amazon” and “Search: work gloves” name no job. |
| Disclosure | 4 | Real and honest. Four lines sit above the mobile H1. |
| Mobile usability | 3 | 44px targets. Search hides in the menu below 1100px. |
| Nav and internal links | 4 | Hubs, related codes, parts. Guides are furnace-only. |
| Trust | 5 | Editorial name, dates, manuals, safety bar, contact@thefaultcode.com. |
| Design and readability | 4 | Body contrast holds. The H1 repeats the answer. |
| Page speed feel | 4 | HTML ~39KB, CSS ~40KB, JS ~5KB. Feels fast; not a lab score. |
| Accessibility | 4 | Skip link, focus rings, labels, reduced motion. H1 is a paragraph. |

## 3. Top 10 fixes

1. **Result-card button** — `CodePage.astro` `.card.result`. One named Amazon button. The first paid action a phone can reach. High, S.
2. **One-line H1** — same file. Puts that button on a 390px screen. High, S.
3. **Drop safety-switch buy links** — `AMAZON_PARTS` in `affiliates.ts`. Stops a sidebar sale the parts guide rejects. High, S.
4. **Three searches max** — `CodeParts.astro`, `data/parts.ts`. Cuts gloves, towels, trays, cups so the real part wins. Med–high, S.
5. **One-line disclosure** — `.affnote`. Frees the fold. Med, S.
6. **Button under the guide answer** — `guides/[slug].astro`. Readers never reach the sidebar. Med, S.
7. **Size line in “Where to buy”** — `parts/[slug].astro`. Turns a generic search into a sized one. Med, M.
8. **Search outside the collapsed menu** — `global.css`, `Base.astro`. The next code page is another chance to click. Med, S.
9. **Washer and dishwasher symptom guides** — from `washers.astro` and `dishwashers.astro`. More visits that have a hose or cleaner to buy. High, L.
10. **One ad after the answer** — section 6. Second channel, clear of the button. Med, M.

## 4. Primary CTA

**Homepage.** Lookup only: kicker, one-line H1, search, then the lead. No Amazon button.

**Code page.** Crumbs, one-line disclosure, short H1, result card (meaning, badge, one filled part button). Dealer locator is text inside “When to call a pro.” Sidebar repeats that one part. A lockout with no homeowner part uses the dealer link as the filled button.

**Guide.** Short answer, one sentence, one button, then the article.

**Brand hub.** Code list, then at most three named part buttons. Safety switches link to the guide only.

**Parts.** “Where to buy” after the how-to, size line first. Safety pages keep “we do not link a replacement.”

**Contact and legal.** No shop button. Mailto stays contact@thefaultcode.com.

## 5. Quick wins

Short H1. One filter, hose, or cleaner button in the result card. Remove limit and rollout shop keys. Delete glove, towel, tray, and cup searches. One-line disclosure. Leave `proReferral.enabled` false.

## 6. Moneymaker scale

**Current moneymaker score: 3/10** (expert estimate, not revenue). Affiliate **3/10**: tag and disclosures work; placement keeps the click rare. AdSense **2/10**: pages and privacy exist; `/ads.txt` is 404; no ad slot. Leads: **later** (`proReferral` stays off until approval).

| Score | Action | Effort | Channel |
|---|---|---|---|
| 3 → 4 | Named Amazon button in the result card. No safety-switch buy links. | S | Affiliate |
| 4 → 5 | One-line H1 and disclosure so the button shows at 390px. | S | Affiliate |
| 5 → 6 | Three relevant searches. Drop gloves, towels, trays, cups. | S | Affiliate |
| 6 → 7 | That button under each guide’s short answer. | S | Affiliate |
| 7 → 8 | Size line on filter and hose pages. | M | Affiliate |
| 8 → 9 | Washer and dishwasher symptom guides from the hubs. | L | Traffic |
| 9 → 10 | `ads.txt`, privacy Advertising section, one ad after the card. Then, after approval, “Find a local HVAC pro” on furnace `proNeeded` codes. | M | AdSense, then leads |

10 means one honest money action per visit, plus a second channel that does not cover it. Not a revenue forecast.

**Wording.** `CodePage.astro`: “See furnace air filters on Amazon”, “See washer drain hoses on Amazon”, or “See washing machine cleaner on Amazon.” Subtext: “Opens an Amazon search for that name. Check the size against your manual.” `rel="sponsored nofollow"`. Href keeps `tag=thefaultcode-20` via `amazonLink()`. H1: `Carrier 33: Limit circuit fault`. Remove `limit-switch` and `rollout-switch` from `AMAZON_PARTS`. `CodeParts.astro`: three links, in cause order. Guide, under the answer: “The manuals name fine steel wool for this cleaning” and “See fine steel wool on Amazon.” Parts page: “Read the size on the old part.” No model-fit claim.

**Ads, after those guides.** `ads.txt` uses the publisher id from approval. `privacy.astro` says what the ad cookie does, links to Google’s ad settings, and keeps contact@thefaultcode.com. One slot between the result card and “Likely causes”, labeled Advertisement, with space above the shop button. No auto-ads, no sticky unit, none on contact or legal pages.

**Leads last**, after written approval. “Find a local HVAC pro” only on furnace `proNeeded` pages. DIY pages keep the parts button filled. A later parts program uses the same `enabled` flag, does not replace `thefaultcode-20`, and gets no button on gas valves or safety switches.

**What would lower the score.** Auto or sticky ads, or an ad against a Shop button. A second filled button, or a wall of identical chips. Star ratings, “best”, countdowns, or stock claims. Leads before approval, or a tracking link with an empty id. Any tag other than `thefaultcode-20`. Buy links on gas valves or safety switches. Dropping `rel="sponsored"`, the Associates sentence, or the fit caveat. Guessed codes or the `example: true` entries. An interstitial, or the meaning behind a click.
