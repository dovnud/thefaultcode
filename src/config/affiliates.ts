// Single place for affiliate/referral config.
//
// HOW TO TURN A PROGRAM ON: set its `enabled` flag to true (one-line change).
// Nothing is shown (and no tracking link is emitted) while `enabled` is false.
//
// CJ (Commission Junction) links are built by cjLink(). If the AdID is left empty,
// cjLink() falls back to the plain, non-tracking URL so we never publish fake tracking.

export const CJ_PID = '101911849';                 // our CJ publisher/website ID
export const CJ_DOMAIN = 'https://www.anrdoezrs.net'; // standard CJ tracking domain (unconfirmed for this account)

/** Build a CJ click link for an AdID, or return `fallback` (plain link) when the AdID is empty. */
export function cjLink(adId: string, fallback: string): string {
  return adId ? `${CJ_DOMAIN}/click-${CJ_PID}-${adId}` : fallback;
}

// Angi (CJ advertiser 7439025). Application PENDING; flip `enabled` to true only after approval.
// AdID 17142838 = "Heating & Furnace Systems" text link (fixed destination; Angi deep linking is off).
// Other Angi AdIDs: 17142830 = HVAC & Air Conditioning, 17141197 = Homepage.
export const ANGI_AD_ID = '17142838';

// Amazon Associates. ONE constant: change the tag here (dedicated Associates tracking ID for this site) and every link updates.
export const AMAZON_TAG = 'thefaultcode-20';
export const AMAZON_STATEMENT = 'As an Amazon Associate I earn from qualifying purchases.';

/** Amazon search link for a generic part name (no part numbers, no ASINs). */
export function amazonLink(term: string): string {
  return `https://www.amazon.com/s?k=${encodeURIComponent(term)}&tag=${AMAZON_TAG}`;
}

// partKey (from src/content/codes/*.json) -> generic Amazon search term.
// Only keys listed here get a "Shop on Amazon" button. Deliberately NOT listed: 'gas-valve'
// (gas train work is for licensed technicians only, so we do not push people to buy one).
export const AMAZON_PARTS: Record<string, string> = {
  'flame-sensor': 'furnace flame sensor',
  'pressure-switch': 'furnace pressure switch',
  'pressure-hose': 'furnace pressure switch hose',
  'igniter': 'furnace hot surface igniter',
  'inducer': 'furnace inducer motor',
  'filter': 'furnace air filter',
  'limit-switch': 'furnace high limit switch',
  'rollout-switch': 'furnace rollout switch',
  'control-board': 'furnace control board',
  'fuse': 'furnace control board 5 amp fuse',
  'thermostat': 'furnace thermostat',
  'blower-motor': 'furnace blower motor',
  'capacitor': 'furnace blower motor capacitor',
  'steel-wool': 'fine steel wool',
  // Appliance categories: only parts/tools that a code's own text names (never part numbers or ASINs).
  'washer-cleaner': 'washing machine cleaner tub clean',
  'he-detergent': 'HE high efficiency laundry detergent',
  'washer-fill-hose': 'washing machine water inlet hoses',
  'washer-drain-hose': 'washing machine drain hose',
  'dishwasher-descaler': 'dishwasher descaler cleaner',
  'dishwasher-salt': 'dishwasher softening salt',
  'dishwasher-detergent': 'dishwasher detergent',
  'dishwasher-fill-hose': 'dishwasher water supply line',
  'dishwasher-drain-hose': 'dishwasher drain hose',
};

/** Display labels for guide / brand-page shop boxes (code pages use the part name stored in each code's JSON). */
export const AMAZON_LABELS: Record<string, string> = {
  'flame-sensor': 'Flame sensor', 'pressure-switch': 'Pressure switch', 'pressure-hose': 'Pressure switch hose',
  'igniter': 'Hot surface igniter', 'inducer': 'Inducer motor', 'filter': 'Furnace air filter',
  'limit-switch': 'High limit switch', 'rollout-switch': 'Rollout switch', 'control-board': 'Control board',
  'fuse': 'Control board fuse', 'thermostat': 'Thermostat', 'blower-motor': 'Blower motor',
  'capacitor': 'Blower motor capacitor', 'steel-wool': 'Fine steel wool',
  'washer-cleaner': 'Washing machine cleaner', 'he-detergent': 'HE laundry detergent',
  'washer-fill-hose': 'Washer water inlet hoses', 'washer-drain-hose': 'Washer drain hose',
  'dishwasher-descaler': 'Dishwasher descaler', 'dishwasher-salt': 'Dishwasher softening salt',
  'dishwasher-detergent': 'Dishwasher detergent', 'dishwasher-fill-hose': 'Dishwasher water supply line',
  'dishwasher-drain-hose': 'Dishwasher drain hose',
};

/** Build [{key,name,href}] for partKeys that have an Amazon search term (gas valve etc. are deliberately omitted). */
export const amazonShop = (keys: string[]) =>
  [...new Set(keys)].filter(k => AMAZON_PARTS[k]).map(k => ({ key: k, name: AMAZON_LABELS[k] ?? k, href: affiliates.amazon.url(k) })).filter(x => x.href);

// Official manufacturer dealer/contractor locators (NOT affiliate links, plain links with rel="noopener").
// Used as the fallback "find a pro" button when affiliates.proReferral.enabled is false.
// Each URL was verified to return 200 in a browser-like GET on 2026-10-24. Remove a brand's entry to hide its button.
export const DEALER_LOCATORS: Record<string, string> = {
  goodman: 'https://www.goodmanmfg.com/support/find-a-dealer',
  trane: 'https://www.trane.com/residential/en/dealer-locator/',
  rheem: 'https://www.rheem.com/find-a-pro/',
  carrier: 'https://www.carrier.com/us/en/residential/find-a-dealer/',
  lennox: 'https://www.lennox.com/residential/locate/',
};

// Official manufacturer SERVICE-REQUEST pages for appliance brands (NOT affiliate links, plain links with rel="noopener").
// Fallback "request service" button on washer and dishwasher pages. Each URL is linked from that brand's own support page and was
// checked on 2026-10-25 (browser-like GET returned 200; Whirlpool blocks curl so it was confirmed with a page fetch). Remove an entry to hide the button.
export const APPLIANCE_SERVICE: Record<string, string> = {
  lg: 'https://www.lg.com/us/support/repair-service/schedule-repair',
  samsung: 'https://www.samsung.com/us/support/service/',
  whirlpool: 'https://www.whirlpool.com/repair-or-replace/service.html',
  bosch: 'https://www.bosch-home.com/us/en/repair',
  ge: 'https://genet.geappliances.com/eService/Service/home',
};

export const affiliates = {
  // Parts links: Amazon Associates. RepairClinic is NOT on CJ, so it is not used.
  // Set enabled:false to hide every "Shop on Amazon" button and the Amazon disclosure.
  amazon: { enabled: true, label: 'Shop on Amazon',
    /** Returns the sponsored link for a part, or '' when the part has no Amazon mapping or the flag is off. */
    url: (partKey: string): string => { const t = AMAZON_PARTS[partKey]; return affiliates.amazon.enabled && t ? amazonLink(t) : ''; } },
  // "Find a local HVAC pro" button (Angi via CJ).
  proReferral: { enabled: false, label: 'Find a local HVAC pro',
    url: () => cjLink(ANGI_AD_ID, 'https://www.angi.com/') },
  disclosure: 'Some links are affiliate links; we may earn a commission at no cost to you.',
};

/** True when at least one affiliate program is switched on (drives disclosure text on pages). */
export const affiliatesActive = affiliates.amazon.enabled || affiliates.proReferral.enabled;
