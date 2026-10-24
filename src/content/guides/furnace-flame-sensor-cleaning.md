---
{
 "title": "Furnace Flame Sensor: Symptoms, Codes and Cleaning",
 "description": "What a furnace flame sensor does, the codes that point to it, what the manuals say about cleaning it, and safety cautions.",
 "answer": "The flame sensor is a metal rod in the burner flame that tells the control board the gas has lit. If it is coated, the board may not sense flame and will shut the gas off, often a few seconds after ignition. Carrier's manual lists oxide build-up on the flame sensor and says to clean it with fine steel wool; Rheem recommends cleaning it at the start of each heating season by a qualified installer or service agency.",
 "updated": "2026-10-23",
 "faq": [
  {
   "q": "Can I clean a flame sensor myself?",
   "a": "Rheem recommends a qualified installer or service agency do it. It involves turning off power and gas and working in the burner area, so if you are not trained, call a technician."
  },
  {
   "q": "What does a low flame signal code mean?",
   "a": "The board is reading less flame current than it wants. Causes include a coated sensor, poor ground, polarity or gas pressure problems."
  }
 ],
 "sources": [
  {
   "name": "Carrier 59SC5 installation, start-up & operating instructions",
   "url": "https://hvactechgroup.com/files/59sc5.pdf"
  },
  {
   "name": "Rheem R96V installation instructions (92-24161-124-03)",
   "url": "https://pts.rheem.com/docstore/webdocs/Public/ServicePublic/Trouble2a/pdfs/Gas_Furnace/R96V/92-24161-124-03_R96V.pdf"
  },
  {
   "name": "Rheem Gas Furnace Technical FAQ",
   "url": "https://my.rheem.com/pts/FAQ/FAQ_Gas_Furnace.asp"
  },
  {
   "name": "Trane S9V2 Service Facts (S9V2-SF-2A-EN)",
   "url": "https://www.wbmemphis.com/customer/docs/skudocs/s9v2-sf-2a-en-03052021.pdf"
  },
  {
   "name": "Goodman GR9S96/GD9S96 installation & operating guide (IOG-2037B)",
   "url": "https://cdn.daikincloud.io/PIM/Assets/Documents/IM-IOG-2037B.pdf"
  },
  {
   "name": "Lennox ML180UH installation & operation manual",
   "url": "https://www.lennox.com/dA/c7cd7e796f/Lennox_ML180UH_IOM.pdf"
  }
 ],
 "codes": [
  "goodman/ee6",
  "trane/e08",
  "rheem/12",
  "carrier/34"
 ]
}
---
## Codes that point to flame sensing
| Code | Meaning (from the manual) |
|---|---|
| [Goodman EE6](/goodman/ee6/) | Low flame signal: flame sense microamp signal is minimal |
| [Trane E08](/trane/e08/) | Low flame current, but still strong enough to allow operation |
| [Lennox red slow / green fast](/lennox/red-slow-green-fast/) | Low flame signal, below 1.5 microamps |
| [Rheem 12](/rheem/12/) | Low flame sense: weak or marginal current, furnace keeps running |
| [Carrier 34](/carrier/34/) | Ignition proving failure: flame not sensed |
| [Rheem 13](/rheem/13/) | Flame lost after established |

## What the manuals say
- **Carrier 59SC5:** check for oxide build-up on the flame sensor; clean with fine steel wool.
- **Rheem R96V:** recommends the flame sensor be cleaned at the start of each heating season with fine steel wool or a Scotch-Brite pad by a qualified installer, service agency or the gas supplier.
- **Trane S9V2 Service Facts:** lists a normal flame current range of 0.75 to 3.0 microamps.
- **Rheem FAQ:** besides a dirty rod, failed flame sense can come from wrong polarity, a poor equipment ground or incorrect gas pressure.

## If the sensor is not the problem
A weak signal after cleaning can mean grounding, polarity or gas pressure issues (see [Goodman EEA](/goodman/eea/) and [Trane E06](/trane/e06/)). These need a technician with a meter.

> **Safety first:** If you smell gas, don't touch light switches or use a phone inside. Leave the building and call your gas utility from outside. Turn off power to the furnace before opening any panel, and never bypass or jumper a safety switch. Gas, venting, wiring and control-board work is for a licensed HVAC technician.
