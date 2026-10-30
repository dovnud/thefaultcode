# Search readiness

This note records what current primary sources say about being understandable to Google and to answer engines, and what this site does about it. It does not predict rankings, rich results, or citations. Google says structured data makes a feature eligible; it does not guarantee the feature will show.

Sources were read on 29 October 2026.

## Sources

- [Influencing title links](https://developers.google.com/search/docs/appearance/title-link) (Google Search Central). Title links come from the `<title>`, the visible heading, `og:title`, and other on-page text. Each page needs its own title. Repeated boilerplate is a known reason Google rewrites a title.
- [Meta descriptions / snippets](https://developers.google.com/search/docs/appearance/snippet). Google usually builds the snippet from the page. A unique meta description is used when it describes that page better than the body does. There is no fixed length limit; snippets are truncated to the device.
- [Canonicalization](https://developers.google.com/search/docs/crawling-indexing/canonicalization). `rel="canonical"` is a hint, along with redirects, HTTPS, and which URL is in the sitemap. Google can choose a different canonical.
- [General structured data guidelines](https://developers.google.com/search/docs/appearance/structured-data/sd-policies). JSON-LD is the recommended format. Markup must describe content that is visible on that page. Hidden or misleading markup is not eligible.
- [Article](https://developers.google.com/search/docs/appearance/structured-data/article) and [schema.org/Article](https://schema.org/Article). Recommended: `headline`, `author`, `datePublished`, `dateModified` (ISO 8601, with a timezone), and a representative `image`. Author can be an Organization.
- [Organization](https://developers.google.com/search/docs/appearance/structured-data/organization). Put it on the home page or the about page. There are no required properties. `logo` needs a crawlable image of at least 112×112 in a format Google Images supports. `sameAs` is only for profiles that exist. `email` and `contactPoint` are the contact fields.
- [BreadcrumbList](https://developers.google.com/search/docs/appearance/structured-data/breadcrumb). A visible trail, with `itemListElement` of `ListItem` (`position`, `name`, `item`). The last item's URL is optional.
- [FAQPage](https://developers.google.com/search/docs/appearance/structured-data/faqpage). Only for questions and answers that are on the page. Markup of content the reader cannot see violates the general guidelines. Google has also limited FAQ rich results, so this markup is for accuracy, not a promise of an FAQ treatment in Search.
- [Build and submit a sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap) and [sitemaps.org](https://www.sitemaps.org/protocol.html). List canonical URLs. `lastmod` is the last significant change. Google ignores `changefreq` and `priority`. A sitemap is a hint.
- [robots.txt](https://developers.google.com/search/docs/crawling-indexing/robots/robots_txt) and [Google's common crawlers](https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers). A missing disallow means the path may be crawled. The most specific user-agent group wins, and it does not combine with `User-agent: *`. `Google-Extended` is the token for Gemini training and grounding, separate from Google Search.
- [Web Vitals](https://web.dev/articles/vitals) and [how the thresholds were defined](https://web.dev/articles/defining-core-web-vitals-thresholds). Good at the 75th percentile of real visits: LCP ≤ 2.5 s, INP ≤ 200 ms, CLS ≤ 0.1. Lab tools such as Lighthouse are for diagnosis. They are not the field measurement.
- [llms.txt v2](https://llmstxt.org/) (Jeremy Howard, updated 10 August 2026). An H1, a blockquote summary, optional notes, then H2 sections of markdown links (`[name](url): note`). The file should stay small. Detail lives behind the links, preferably markdown. `rel="describedby"` points at the covering `llms.txt`. `rel="alternate" type="text/markdown"` points at a page's markdown twin. [Lighthouse's llms.txt audit](https://developer.chrome.com/docs/lighthouse/agentic-browsing/llms-txt) treats a missing file as not applicable and a server error as a failure. The file should start with `#` (a leading BOM fails the check).

## Before

On `content/furnace-codes` before this change, a full static build already had:

- A unique `<title>` and meta description on all 223 HTML pages, a self-referencing canonical on indexable pages, and `noindex` on the 404.
- One `h1` per page and no skipped heading levels.
- `WebSite` on the home page, `Organization` on About, `Article` (with `dateModified` only) on code, guide, and parts pages, `BreadcrumbList` on most pages that show a trail, `FAQPage` only on guides (the questions are visible), and `Dataset` on `/data/`.
- `sitemap-index.xml` covering those HTML URLs, each with a `lastmod`, and a `robots.txt` that allows `*` plus several named crawlers.
- An `llms.txt` index of guides, parts, brands, and the dataset.
- No content `<img>` elements. Icons are inline SVG with width, height, and `aria-hidden`. Social images are 1200×630 PNGs with `og:image:width`, `og:image:height`, and `og:image:alt`.
- Related-code links, guide links, and parts links already on the templates that had them.

Gaps against the sources above: `Article` had no `datePublished` and no image; the home page had no top-level `Organization`; several pages with a visible breadcrumb had no `BreadcrumbList` (code index, guides index, contact, privacy, terms, affiliate disclosure); `llms.txt` was v1-shaped and had no full-text file or markdown twins; `robots.txt` did not name several current AI crawlers; the same brand+code on two appliances was not cross-linked; equipment hubs named codes in prose without linking them.

## After

- `Article` on code, guide, and parts pages includes `datePublished` and `dateModified` as ISO 8601 with `Z`, plus a 1200×630 `ImageObject` for that page's card. The site stores one editorial date, the date printed on the page. Both fields use that date. A separate first-published date is not invented.
- Home and About share one `Organization` node: name The Fault Code, url, `contact@thefaultcode.com`, and a `ContactPoint`. No `logo` (the favicon is not a qualifying logo) and no `sameAs` (there is no profile to point at). The byline stays "The Fault Code editorial team".
- `WebSite` on the home page names that organization. A `SearchAction` was not added. Google retired the sitelinks search box; the search box on the page is unchanged.
- `BreadcrumbList` matches the visible trail on the code index, guides index, contact, privacy, terms, and affiliate disclosure.
- `FAQPage` is still emitted only when a guide has a visible FAQ. Code pages do not get FAQ markup. The "what does this code mean" line is body copy, not a question block.
- `robots.txt` keeps `User-agent: *` / `Allow: /` and names Googlebot, Googlebot-Image, GoogleOther, Google-Extended, Bingbot, DuckDuckBot, Applebot, Applebot-Extended, GPTBot, OAI-SearchBot, ChatGPT-User, PerplexityBot, Perplexity-User, ClaudeBot, Claude-SearchBot, Claude-User, anthropic-ai, Amazonbot, CCBot, meta-externalagent, and Bytespider, each with `Allow: /`. Named groups replace `*` for that bot, so each group is an allow, not a narrower rule. Sitemap URL unchanged.
- `/llms.txt` follows the v2 section order, links each guide to its markdown twin, and links `/llms-full.txt`. Every HTML page has `<link rel="describedby" href="/llms.txt">`. Each guide also has `<link rel="alternate" type="text/markdown">`.
- `/llms-full.txt` is the prose: 21 guides, 128 codes (meaning, causes, checks, source), and the parts guides. Built size 276,457 bytes. No example/unpublished codes. No personal name.
- Internal links added without a layout or CSS change: equipment hubs link the codes they already name; code pages that share a brand and code with another appliance link that other page; contact, privacy, terms, and the affiliate disclosure link into the code index, guides, or parts.
- Sitemap filter drops non-HTML endpoints (`.png`, `.json`, `.csv`, `.txt`, `.md`) so the sitemap stays the canonical HTML URLs, still with `lastmod`.
- No AdSense, `ads.txt`, or ad script. No new affiliate id. Amazon links still use the existing tag. The only address is `contact@thefaultcode.com`.

## Lighthouse

Measured with Lighthouse 13.6.0, mobile, simulated throttling, headless Chrome, against `astro preview` on this machine. One run per URL. These are lab scores, not Chrome UX Report field data, and not a ranking forecast.

| Page | Before (perf / a11y / best practices / SEO) | After |
| --- | --- | --- |
| `/` | 100 / 100 / 100 / 100 | 100 / 100 / 100 / 100 |
| `/carrier/33/` | 100 / 100 / 100 / 100 | 100 / 100 / 100 / 100 |
| `/guides/how-to-read-furnace-led-flash-codes/` | 100 / 100 / 100 / 100 | 100 / 100 / 100 / 100 |
| `/furnaces/` | 100 / 100 / 100 / 100 | 100 / 100 / 100 / 100 |
| `/parts/flame-sensor/` | 100 / 100 / 100 / 100 | 100 / 100 / 100 / 100 |

Before lab LCP was 0.76 s on the home page and 0.95–0.98 s on the other four. After, lab LCP was 0.8 s on `/` and `/parts/flame-sensor/`, and 1.0 s on the code page, the guide, and `/furnaces/`. CLS was 0 on every run. Good field targets remain LCP ≤ 2.5 s, INP ≤ 200 ms, CLS ≤ 0.1 at the 75th percentile; this run did not measure INP, because INP needs real interactions.
