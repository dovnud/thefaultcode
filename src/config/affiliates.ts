// Single place for affiliate/referral config. Replace PLACEHOLDER values after approval.
export const affiliates = {
  repairClinic: { enabled: true, tag: 'PLACEHOLDER_RC_ID',
    url: (term: string) => `https://www.repairclinic.com/Search?query=${encodeURIComponent(term)}&ref=PLACEHOLDER_RC_ID` },
  proReferral: { enabled: true, label: 'Find a local HVAC pro',
    url: (zipHint = '') => `https://www.angi.com/?ref=PLACEHOLDER_ANGI_ID${zipHint}` },
  disclosure: 'Some links are affiliate links; we may earn a commission at no cost to you.',
};
