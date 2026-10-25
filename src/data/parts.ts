// Parts, tools and supplies buying guides. Every statement is either taken from a manufacturer document we already cite
// (see `sources`) or from the text of the Amazon listing it names, or is plain "check your manual" guidance. No fit claims for specific models.
// Amazon links come from two places only:
//   asins: products whose exact title was read from the Amazon listing (checked 2026-10-25); rendered as /dp/<ASIN>?tag=...
//   terms: tagged Amazon SEARCH links (results change; fit is never implied).
import type { Cat } from '../config/categories';

export type Src = { name: string; url: string };
export type Asin = { asin: string; title: string; label: string };
export type Term = { label: string; term: string };
export interface Part {
  slug: string; name: string; kind: 'part' | 'tool' | 'consumable';
  cats: Cat['slug'][];
  summary: string;
  what: string[]; choose: string[]; test: string[]; replace: string[];
  caution?: string;
  noun: string;                  // phrase used to build brand / category search terms
  shop: boolean;                 // false => informational only, no shopping links (safety devices)
  terms: Term[]; asins: Asin[];
  sources: Src[];
  related: string[];
}

export const S = {
  goodmanF: { name: 'Goodman GR9S96/GD9S96 installation & operating guide (IOG-2037B)', url: 'https://cdn.daikincloud.io/PIM/Assets/Documents/IM-IOG-2037B.pdf' },
  carrierF: { name: 'Carrier 59SC5 installation, start-up & operating instructions', url: 'https://hvactechgroup.com/files/59sc5.pdf' },
  rheemF: { name: 'Rheem R96V installation instructions (92-24161-124-03)', url: 'https://pts.rheem.com/docstore/webdocs/Public/ServicePublic/Trouble2a/pdfs/Gas_Furnace/R96V/92-24161-124-03_R96V.pdf' },
  rheemFaq: { name: 'Rheem Gas Furnace Technical FAQ', url: 'https://my.rheem.com/pts/FAQ/FAQ_Gas_Furnace.asp' },
  traneF: { name: 'Trane S9V2 Service Facts (S9V2-SF-2A-EN)', url: 'https://www.wbmemphis.com/customer/docs/skudocs/s9v2-sf-2a-en-03052021.pdf' },
  lennoxF: { name: 'Lennox ML180UH installation & operation manual', url: 'https://www.lennox.com/dA/c7cd7e796f/Lennox_ML180UH_IOM.pdf' },
  goodmanAC: { name: 'Goodman service manual RS6200007 r27 (hosted by Daikin Comfort)', url: 'https://daikincomfort.com/docs/default-source/cscf/sm-rs6200007r27.pdf' },
  carrierAC: { name: 'Carrier 25VNA8/24VNA9 service manual (4SM)', url: 'https://www.shareddocs.com/hvac/docs/1009/Public/01/25VNA8-24VNA9-4SM.pdf' },
  doe: { name: 'U.S. Department of Energy, Energy Saver guide (PDF)', url: 'https://www.energy.gov/sites/default/files/2022-08/energy-saver-guide-2022.pdf' },
  estar: { name: 'ENERGY STAR heating & cooling maintenance checklist', url: 'https://www.energystar.gov/saveathome/heating-cooling/maintenance-checklist' },
  merv: { name: 'EPA: What is a MERV rating?', url: 'https://www.epa.gov/indoor-air-quality-iaq/what-merv-rating' },
  nfpa: { name: 'NFPA carbon monoxide safety', url: 'https://www.nfpa.org/education-and-research/home-fire-safety/carbon-monoxide' },
  lgW: { name: 'LG front-load washer error code list', url: 'https://www.lg.com/us/support/help-library/lg-front-load-washer-error-code-list--20155069413456' },
  samW: { name: 'Samsung washer error codes (TSG10000997)', url: 'https://www.samsung.com/us/support/troubleshoot/TSG10000997/' },
  whW: { name: 'Whirlpool: error codes in front-load washers', url: 'https://producthelp.whirlpool.com/Laundry/Washers/Product_Info/Washer_Product_Assistance/Error_Codes_in_Front_Load_Washers' },
  boschDW: { name: 'Bosch dishwasher error codes', url: 'https://www.bosch-home.com/us/owner-support/dishwashers/error-codes' },
  geDW: { name: 'GE dishwasher error codes', url: 'https://products.geappliances.com/appliance/gea-support-search-content?contentId=16673' },
  lgDW: { name: 'LG dishwasher guide to error codes', url: 'https://www.lg.com/us/support/help-library/lg-dishwasher-guide-to-error-codes--20154823515108' },
  samDW: { name: 'Samsung dishwasher error codes (TSG10004499)', url: 'https://www.samsung.com/us/support/troubleshoot/TSG10004499/' },
};

export const A = {
  fluke: { asin: 'B000O3LUEI', title: 'Fluke 117 Digital Multimeter, Non-Contact AC Voltage Detection, Measures Resistance/Continuity/Frequency/Capacitance/Min Max Average, Automatic AC/DC Selection, Low Impedance Mode', label: 'Fluke 117 digital multimeter' },
  ncvt: { asin: 'B018UPGKM8', title: 'Klein Tools NCVT-2 Voltage Tester, Non-Contact Dual Range Voltage Tester Pen for Standard and Low Voltage, with 3 m Drop Protection', label: 'Klein Tools NCVT-2 non-contact voltage tester' },
  nut: { asin: 'B000MKIUYQ', title: 'Klein Tools 647M Tool Set, Made in USA, Magnetic Nut Drivers Sizes 3/16, 1/4, 5/16, 11/32, 3/8, 7/16, 1/2-Inch, 6-Inch Hollow Shafts, 7-Piece', label: 'Klein Tools 647M magnetic nut driver set (7-piece)' },
  level: { asin: 'B01MS90QXS', title: '9" Mag Torpedo Level (Johnson Level 1421-0900)', label: 'Johnson Level 9-inch magnetic torpedo level' },
  fin: { asin: 'B002BHRXJ6', title: 'Robinair 18403 Fin Comb/Straightener - Six Combs for Different Fin Spacings', label: 'Robinair 18403 fin comb / straightener' },
  wool: { asin: 'B000TAWD7Y', title: 'Libéron Steel Wool - Ideal for Delicate Surfaces - Cuts Back Between Coats - Cleans & Polishes Metals - Grade 0000 (Ultrafine) - 100g', label: 'Liberon grade 0000 ultrafine steel wool' },
  affW: { asin: 'B00C91Q86I', title: 'Affresh Washing Machine Cleaner, #1 Washing Machine Cleaner Tablet, 6 Count', label: 'Affresh washing machine cleaner tablets (6 count)' },
  affD: { asin: 'B07DGLSL79', title: 'Affresh Dishwasher Cleaner, Mess-Free Deep-Cleaning Tablet, 6 Month Supply', label: 'Affresh dishwasher cleaner tablets (6 month supply)' },
  stat: { asin: 'B00CTSY6G0', title: 'Honeywell Home RTH2300B1038 5-2 Day Programmable Thermostat, White', label: 'Honeywell Home RTH2300B1038 5-2 day programmable thermostat' },
  f1625a: { asin: 'B005GZ89WU', title: 'Filtrete 16x25x1 Air Filter, MERV 11, MPR 1000, 4 HVAC Filters', label: 'Filtrete 16x25x1, 4 filters' },
  f1625b: { asin: 'B07FP5X3JM', title: 'Filtrete 16x25x1 Air Filter, MERV 11, MPR 1000, 6 HVAC Filters', label: 'Filtrete 16x25x1, 6 filters' },
  f2025a: { asin: 'B005GZ8C0O', title: 'Filtrete 20x25x1 Air Filter, MERV 11, MPR 1000, 4 HVAC Filters', label: 'Filtrete 20x25x1, 4 filters' },
  f2025b: { asin: 'B07FNXPKYS', title: 'Filtrete 20x25x1 Air Filter, MERV 11, MPR 1000, 6 HVAC Filters', label: 'Filtrete 20x25x1, 6 filters' },
  f2020a: { asin: 'B000P7BJHQ', title: 'Filtrete 20x20x1 Air Filter, MERV 11, MPR 1000, 4 HVAC Filters', label: 'Filtrete 20x20x1, 4 filters' },
  f2020b: { asin: 'B07FP6131L', title: 'Filtrete 20x20x1 AC Furnace Air Filter, MERV 11, MPR 1000, Micro Allergen Defense, 3-Month Pleated 1-Inch Electrostatic Air Cleaning Filter, 6 Pack', label: 'Filtrete 20x20x1, 6 filters' },
  f1620a: { asin: 'B00002N6J9', title: 'Filtrete 16x20x1 Air Filter, MERV 11, MPR 1000, 4 HVAC Filters', label: 'Filtrete 16x20x1, 4 filters' },
  f1620b: { asin: 'B07FP5X2S3', title: 'Filtrete 16x20x1 Air Filter, MERV 11, MPR 1000, 6 HVAC Filters', label: 'Filtrete 16x20x1, 6 filters' },
};

export const t = (label: string, term: string): Term => ({ label, term });
export const HVAC_NOTE = 'Gas, venting, high-voltage and control-board work belongs to a licensed HVAC technician. This page is here so you can recognise the part and read a quote, not as a how-to for working on a gas appliance.';
