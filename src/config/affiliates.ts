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

export const affiliates = {
  // Parts retailer. RepairClinic is NOT on CJ, so there is no parts program yet.
  // Candidate (not approved, not applied): GE Appliance Parts, CJ advertiser 4392552.
  // When one is approved: set enabled:true and make url() return its cjLink(...) for the search term.
  parts: { enabled: false, label: 'Shop',
    url: (_term: string) => '' },
  // "Find a local HVAC pro" button (Angi via CJ).
  proReferral: { enabled: false, label: 'Find a local HVAC pro',
    url: () => cjLink(ANGI_AD_ID, 'https://www.angi.com/') },
  disclosure: 'Some links are affiliate links; we may earn a commission at no cost to you.',
};

/** True when at least one affiliate program is switched on (drives disclosure text on pages). */
export const affiliatesActive = affiliates.parts.enabled || affiliates.proReferral.enabled;
