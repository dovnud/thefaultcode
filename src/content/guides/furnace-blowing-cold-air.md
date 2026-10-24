---
{
 "title": "Furnace Blowing Cold Air: Common Causes",
 "description": "Why a gas furnace blows cold or room-temperature air, from thermostat fan settings to limit and ignition faults, and what to check.",
 "answer": "A furnace blowing cold air usually means the blower is running while the burners are not. That can be a thermostat fan set to ON instead of AUTO, or a fault where the burners shut down but the blower keeps running to cool the furnace, such as an open limit switch or a failed ignition. Check the thermostat and filter, then read the control board code.",
 "updated": "2026-10-23",
 "faq": [
  {
   "q": "Why does my furnace blow cold air at the start?",
   "a": "Furnace controls use a blower on-delay and off-delay (the Carrier manual describes both), so the blower timing does not exactly match the burners. Brief cool air at the end of a cycle can be the normal off-delay. If air stays cold, check the code."
  },
  {
   "q": "Can a dirty filter make a furnace blow cold air?",
   "a": "A restricted filter can overheat the furnace and open the limit switch, stopping the burners while the blower keeps running."
  }
 ],
 "sources": [
  {
   "name": "Goodman GR9S96/GD9S96 installation & operating guide (IOG-2037B)",
   "url": "https://cdn.daikincloud.io/PIM/Assets/Documents/IM-IOG-2037B.pdf"
  },
  {
   "name": "Carrier 59SC5 installation, start-up & operating instructions",
   "url": "https://hvactechgroup.com/files/59sc5.pdf"
  },
  {
   "name": "Rheem R96V installation instructions (92-24161-124-03)",
   "url": "https://pts.myrheem.com/docstore/webdocs/Public/ServicePublic/Trouble2a/pdfs/Gas_Furnace/R96V/92-24161-124-03_R96V.pdf"
  },
  {
   "name": "Trane S9V2 Service Facts (S9V2-SF-2A-EN)",
   "url": "https://www.wbmemphis.com/customer/docs/skudocs/s9v2-sf-2a-en-03052021.pdf"
  },
  {
   "name": "U.S. Department of Energy, Energy Saver guide (PDF)",
   "url": "https://www.energy.gov/sites/default/files/2022-08/energy-saver-guide-2022.pdf"
  }
 ],
 "codes": [
  "goodman/ee3",
  "carrier/33",
  "carrier/34",
  "rheem/11"
 ]
}
---
## Causes and codes
| What's happening | Likely reason | Related codes |
|---|---|---|
| Air is cool between heating cycles | Thermostat fan set to ON (continuous) | none |
| Blower runs, no heat | Limit switch open, blower runs to cool the furnace | [Goodman EE3](/goodman/ee3/), [Carrier 33](/carrier/33/) |
| Burners try, then stop | Ignition or flame sensing failure | [Carrier 34](/carrier/34/), [Rheem 11](/rheem/11/), [Trane E2.1](/trane/e2-1/) |
| No burner attempt | Pressure switch or lockout | [Goodman EE2](/goodman/ee2/), [Carrier 14](/carrier/14/) |

The Goodman EE3 entry in its manual notes the circulator blower runs continuously with no heat when the primary limit is open, and Carrier says the blower runs for 4 minutes or until the open switch closes for code 33.

## Safe checks
1. Thermostat: set to HEAT, fan to AUTO, setpoint above room temperature.
2. Replace a dirty filter and open registers.
3. Read and look up the control board code.

> **Safety first:** If you smell gas, don't touch light switches or use a phone inside. Leave the building and call your gas utility from outside. Turn off power to the furnace before opening any panel, and never bypass or jumper a safety switch. Gas, venting, wiring and control-board work is for a licensed HVAC technician.
