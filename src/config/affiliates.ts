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

// Amazon Associates. ONE constant: change the tag here (e.g. to 'thefaultcode-20') and every link updates.
export const AMAZON_TAG = 'thingsvegas-20';
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
