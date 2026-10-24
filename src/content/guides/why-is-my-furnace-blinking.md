---
{
 "title": "Why Is My Furnace Blinking a Code?",
 "description": "What a blinking light on your furnace means, which faults are most often behind it, and what you can safely check yourself.",
 "answer": "A blinking light on a furnace control board is a status or fault code. The board is telling you that a safety circuit tripped or a component did not respond as expected, for example a limit, pressure switch, ignition or flame sensing fault. Note the pattern, look it up for your brand, and do only the safe checks before calling a pro.",
 "updated": "2026-10-23",
 "faq": [
  {
   "q": "Is a blinking furnace light dangerous?",
   "a": "The light itself is just a signal. Some faults point to safety issues such as flame rollout or venting problems, so look up the code and call a technician if the code is safety-related or keeps returning."
  },
  {
   "q": "Should I reset the furnace when it blinks?",
   "a": "Write down the code first. A reset can clear some lockouts, but if the code comes back the cause is still there. See our guide on resetting a furnace."
  }
 ],
 "sources": [
  {
   "name": "Carrier 59SC5 installation, start-up & operating instructions",
   "url": "https://hvactechgroup.com/files/59sc5.pdf"
  },
  {
   "name": "Goodman GR9S96/GD9S96 installation & operating guide (IOG-2037B)",
   "url": "https://cdn.daikincloud.io/PIM/Assets/Documents/IM-IOG-2037B.pdf"
  },
  {
   "name": "Trane S9V2 Service Facts (S9V2-SF-2A-EN)",
   "url": "https://www.wbmemphis.com/customer/docs/skudocs/s9v2-sf-2a-en-03052021.pdf"
  },
  {
   "name": "Lennox ML180UH installation & operation manual",
   "url": "https://www.lennox.com/dA/c7cd7e796f/Lennox_ML180UH_IOM.pdf"
  },
  {
   "name": "Rheem R96V installation instructions (92-24161-124-03)",
   "url": "https://pts.rheem.com/docstore/webdocs/Public/ServicePublic/Trouble2a/pdfs/Gas_Furnace/R96V/92-24161-124-03_R96V.pdf"
  },
  {
   "name": "NFPA carbon monoxide safety",
   "url": "https://www.nfpa.org/education-and-research/home-fire-safety/carbon-monoxide"
  }
 ],
 "codes": [
  "carrier/33",
  "goodman/ee3",
  "trane/e04",
  "rheem/33"
 ]
}
---
## Normal vs. fault blinking
Some boards blink a steady pattern during normal operation, and blink a numbered pattern when there is a fault. Your door label shows which is which. For example, on the Lennox ML180UH the LEDs use slow and fast flash combinations, while Carrier and Rheem use numbered codes.

## Common fault families
| Fault family | What the board is seeing | Example codes |
|---|---|---|
| Limit / rollout | A temperature safety switch opened | [Carrier 33](/carrier/33/), [Goodman EE3](/goodman/ee3/), [Trane E04](/trane/e04/), [Rheem 33](/rheem/33/) |
| Pressure switch | Inducer draft not proven, or switch in wrong state | [Goodman EE2](/goodman/ee2/), [Carrier 31](/carrier/31/), [Trane E3.2](/trane/e3-2/), [Rheem 45](/rheem/45/) |
| Ignition / flame | Flame not sensed or lost | [Carrier 34](/carrier/34/), [Goodman EE0](/goodman/ee0/), [Trane E2.1](/trane/e2-1/), [Rheem 11](/rheem/11/) |
| Low flame signal | Flame sensor signal weak | [Goodman EE6](/goodman/ee6/), [Trane E08](/trane/e08/), [Rheem 12](/rheem/12/) |
| Power / polarity / ground | Wiring or supply problem | [Goodman EEA](/goodman/eea/), [Trane E06](/trane/e06/), [Carrier rapid flashing](/carrier/rapid-flashing/) |
| Lockout | Too many failed tries; furnace waits before retrying | [Carrier 14](/carrier/14/), [Rheem 10](/rheem/10/), [Lennox alternating slow flash](/lennox/alternating-slow-flash/) |

## What you can check safely
- The air filter: the Goodman and Carrier manuals list blocked filters and restricted airflow among causes of limit faults.
- That supply and return registers are open.
- That the thermostat is set to heat and calling for heat.
- That outdoor intake and exhaust pipes (on high-efficiency furnaces) are not blocked by snow or debris. NFPA advises keeping furnace vents clear of snow build-up.

Anything inside the burner, gas valve, venting or wiring area is technician work.

> **Safety first:** If you smell gas, don't touch light switches or use a phone inside. Leave the building and call your gas utility from outside. Turn off power to the furnace before opening any panel, and never bypass or jumper a safety switch. Gas, venting, wiring and control-board work is for a licensed HVAC technician.
