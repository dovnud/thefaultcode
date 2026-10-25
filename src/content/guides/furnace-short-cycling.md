---
{
 "shop": ["filter", "limit-switch", "flame-sensor", "pressure-switch", "thermostat"],
 "title": "Furnace Short Cycling: Causes and What to Check",
 "description": "Why a gas furnace turns on and off too often, the fault codes that often go with it, and safe checks before calling a technician.",
 "answer": "Short cycling means the furnace starts, runs briefly, and shuts off over and over. On a gas furnace this is often a safety control stopping the burners, such as an overheating limit switch from restricted airflow, or a flame-sensing problem. Start with the air filter and registers, then check the control board code.",
 "updated": "2026-10-23",
 "faq": [
  {
   "q": "Is short cycling bad for a furnace?",
   "a": "Repeated starts mean the furnace is not running as designed, and a safety control may be tripping. Find the cause rather than living with it."
  },
  {
   "q": "Can a dirty filter cause short cycling?",
   "a": "Yes. Manufacturer manuals list blocked filters and restricted airflow among causes of limit switch faults, which shut the burners off."
  }
 ],
 "sources": [
  {
   "name": "U.S. Department of Energy, Energy Saver guide (PDF)",
   "url": "https://www.energy.gov/sites/default/files/2022-08/energy-saver-guide-2022.pdf"
  },
  {
   "name": "Goodman GR9S96/GD9S96 installation & operating guide (IOG-2037B)",
   "url": "https://cdn.daikincloud.io/PIM/Assets/Documents/IM-IOG-2037B.pdf"
  },
  {
   "name": "Carrier 59SC5 installation, start-up & operating instructions",
   "url": "https://hvactechgroup.com/files/59sc5.pdf"
  },
  {
   "name": "Trane S9V2 Service Facts (S9V2-SF-2A-EN)",
   "url": "https://www.wbmemphis.com/customer/docs/skudocs/s9v2-sf-2a-en-03052021.pdf"
  },
  {
   "name": "Rheem R96V installation instructions (92-24161-124-03)",
   "url": "https://pts.rheem.com/docstore/webdocs/Public/ServicePublic/Trouble2a/pdfs/Gas_Furnace/R96V/92-24161-124-03_R96V.pdf"
  },
  {
   "name": "ENERGY STAR heating & cooling maintenance checklist",
   "url": "https://www.energystar.gov/saveathome/heating-cooling/maintenance-checklist"
  }
 ],
 "codes": [
  "goodman/ee3",
  "carrier/33",
  "carrier/34",
  "goodman/ee2"
 ]
}
---
## Common causes
| Symptom | Possible cause | Related codes |
|---|---|---|
| Burners shut off after running a while, blower keeps running | Limit switch opening from restricted airflow (dirty filter, closed registers, restrictive ducts) | [Goodman EE3](/goodman/ee3/), [Carrier 33](/carrier/33/), [Lennox limit](/lennox/red-slow-green-on/) |
| Burners light then go out within seconds | Flame not sensed (dirty flame sensor, grounding, gas pressure) | [Carrier 34](/carrier/34/), [Rheem 13](/rheem/13/), [Trane E2.2](/trane/e2-2/) |
| Inducer runs, no ignition, retries | Pressure switch not proving draft | [Goodman EE2](/goodman/ee2/), [Trane E3.2](/trane/e3-2/), [Rheem 45](/rheem/45/) |

## Safe checks
1. Replace or clean the air filter. The DOE Energy Saver guide recommends cleaning or replacing furnace filters once a month or as recommended.
2. Open all supply registers and clear return grilles.
3. Read the control board code and look it up.
4. Check the thermostat is set to heat and its batteries (if any) are good.

## When it's a pro job
If the code points to the flame sensor, pressure switch, gas valve, venting, blower motor or board, or the problem returns after a clean filter, call a licensed technician.

> **Safety first:** If you smell gas, don't touch light switches or use a phone inside. Leave the building and call your gas utility from outside. Turn off power to the furnace before opening any panel, and never bypass or jumper a safety switch. Gas, venting, wiring and control-board work is for a licensed HVAC technician.
