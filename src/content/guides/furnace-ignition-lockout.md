---
{
 "title": "Furnace Ignition Lockout: It Tried to Light and Stopped",
 "description": "What an ignition lockout means on York, Amana, American Standard, Bryant, Carrier, Goodman and Trane, and which checks the manuals leave with a homeowner.",
 "answer": "An ignition lockout means the control tried to light the burners, did not prove flame, and stopped trying. York 7 red flashes is three failed trials and a one-hour pause. Bryant 14 and Carrier 14 are four failed attempts and a three-hour reset. Amana EE0 is three retries. The gas-valve switch and whether other gas appliances light are the homeowner checks the manuals name. Gas pressure, the igniter and the flame sensor are technician work.",
 "updated": "2026-11-10",
 "category": "furnaces",
 "shop": [],
 "faq": [
  {
   "q": "Will the furnace try again by itself?",
   "a": "On several of these controls, yes, and that is not a repair. York 7 red flashes and Amana EE0 wait about an hour. Bryant 14 and Carrier 14 auto-reset after 3 hours. If the original problem is still there, the lockout comes back."
  },
  {
   "q": "What can I check without opening the furnace?",
   "a": "York's 7 red flash paragraph says to check that the gas valve switch is ON. Confirm other gas appliances in the home still light. If you smell gas, leave and call the gas supplier from outside. Do not jumper the valve."
  },
  {
   "q": "Is a lockout the same as a weak flame?",
   "a": "No. York continuous amber and Amana EE6 and American Standard E08 are low flame current while the furnace may still run. The lockout codes are what the control stores after the trials are used up."
  }
 ],
 "sources": [
  {
   "name": "York TG9S installation manual (Johnson Controls 1083287-UIM-C-0715)",
   "url": "https://www.hvacdiscounters.com/customer/docs/skudocs/coltg9s-iom-manual.pdf"
  },
  {
   "name": "Amana and Goodman *CVC96 / *MVC96 installation instructions (IOG-2015L)",
   "url": "https://www.amana-hac.com/docs/default-source/default-document-library/im-iog-2015l.pdf"
  },
  {
   "name": "American Standard S9V2 installer's guide (18-CE01D1-1E-EN)",
   "url": "https://americanstandardair.com/content/dam/Trane/Commercial/global/products-systems/equipment/unitary/split-systems/Small%20Splits/Furnaces/18-CE01D1-1E-EN_11112016.pdf"
  },
  {
   "name": "Bryant 926TB installation, start-up, operating and service instructions",
   "url": "https://www.shareddocs.com/hvac/docs/1009/Public/06/II926TB-04.pdf"
  },
  {
   "name": "Bryant 80% variable-speed two-stage furnace troubleshooting guide (Catalog No. TG-GFB80-02)",
   "url": "https://www.shareddocs.com/hvac/docs/1009/Public/0D/TG-GFB80-02.pdf"
  },
  {
   "name": "Carrier 59SC5 installation, start-up and operating instructions",
   "url": "https://hvactechgroup.com/files/59sc5.pdf"
  },
  {
   "name": "Goodman GR9S96/GD9S96 installation and operating guide (IOG-2037B)",
   "url": "https://cdn.daikincloud.io/PIM/Assets/Documents/IM-IOG-2037B.pdf"
  },
  {
   "name": "Lennox SL280DFNV installation instructions 508150-02",
   "url": "https://www.lennox.com/dA/78477aadd3/508150-02a.pdf"
  }
 ],
 "codes": [
  "york/7-red-flashes",
  "york/8-red-flashes",
  "york/continuous-amber",
  "amana/ee0",
  "amana/ee6",
  "american-standard/e2-1",
  "american-standard/e2-2",
  "american-standard/e6-3",
  "bryant/14",
  "bryant/34",
  "goodman/ee0",
  "carrier/14",
  "carrier/34",
  "trane/e2-1",
  "trane/e2-3",
  "trane/e11",
  "lennox/e270",
  "lennox/e207",
  "lennox/e241",
  "lennox/e273",
  "lennox/e275",
  "lennox/e290"
 ]
}
---
## The control stopped the trials
A gas furnace proves flame before it will keep the gas valve open. If the proof fails, the control shuts the gas off and tries again a set number of times. Lockout is the end of those tries. Heat stops until the timer runs out or someone finds the cause. Waiting out the timer and hoping is how people spend a cold night resetting the same fault.

Write the code down before you cut power. York counts red flashes with a two-second pause between codes. Bryant and Carrier use short flashes and then long flashes. Amana and American Standard show characters on a 7-segment display.

| What you see | What that manual calls it |
|---|---|
| [York 7 red flashes](/york/7-red-flashes/) | Flame not established in three trials. One-hour lockout, then another try. |
| [York 8 red flashes](/york/8-red-flashes/) | Flame was lost five times (four recycles) in one heating cycle. Also a one-hour lockout. |
| [Amana EE0](/amana/ee0/) | Lockout after 3 ignition retries on *CVC96 / *MVC96 two-stage furnaces. Flame never established, or lost after it was. |
| [American Standard E2.1](/american-standard/e2-1/) | Retry exceeded. Flame never sensed. One-hour lockout after 3 times. |
| [American Standard E2.2](/american-standard/e2-2/) | Recycles exceeded. Flame sensed, then lost. One-hour lockout after 10 times. |
| [Bryant 14](/bryant/14/) | Failed to ignite gas and prove flame in 4 attempts. Auto-reset after 3 hours. The guide says see code 34. |
| [Bryant 34](/bryant/34/) | Ignition proving failure on the 80% two-stage chart. Three more tries, then lockout 14. The chart names oxide on the flame sensor. |
| [Carrier 14](/carrier/14/) | Ignition lockout after the proving trials. The paired proving fault is [Carrier 34](/carrier/34/). |
| [Goodman EE0](/goodman/ee0/) | Lockout after 3 ignition retries on the GR9S96 / GD9S96 guide. |
| [Trane E2.1](/trane/e2-1/) | Retry exceeded on the S9V2 service facts. |
| [Lennox E270](/lennox/e270/) | SL280DFNV soft lockout after the maximum retries, with no flame current sensed. It clears when a heat call finishes. |
| [Lennox E207](/lennox/e207/) | SL280DFNV hot surface ignitor sensed open |
| [Lennox E290](/lennox/e290/) | SL280DFNV ignitor circuit fault (failed ignitor or triggering circuitry), 1-hour soft lockout |
| [Lennox E241](/lennox/e241/) | SL280DFNV flame sensed out of sequence, flame still present. Shut off gas and check for a valve leak |
| [Lennox E275](/lennox/e275/) | SL280DFNV out-of-sequence soft lockout after the flame signal is gone, 1-hour soft lockout |
| [Lennox E273](/lennox/e273/) | SL280DFNV soft lockout: recycles ran out after flame failure |

## What a homeowner can check
York's 7 red flash paragraph is the clearest homeowner line in this set: check that the gas valve switch is in the ON position. Also see whether a stove or water heater in the same house still lights. If nothing gas works, the problem may be the supply to the house, which is the utility, not a furnace part.

If you smell gas, stop. Do not touch a switch or use a phone inside. Leave and call the gas supplier from outside. That warning is on these installation guides, and it outranks any reset.

Amana's lockout note says the control can try again after one hour, after power is interrupted, or after the thermostat is lowered so it is not calling for heat for 1 to 20 seconds. If the cause is still there, it goes back to lockout. Bryant says the same thing in different numbers: the 3-hour auto-reset, or interrupting 115 V or 24 V, is not a repair. The Bryant sequence also says the control must be grounded or it will lock out. Grounding is not a homeowner wiring job.

## What the manuals hand to a technician
The rest of the lists are inside the furnace.

- York 7 names low or no gas pressure, a faulty gas valve, a dirty or faulty flame sensor, a faulty hot surface ignitor, loose wires, or a burner problem.
- Amana EE0 names the front cover pressure switch and drainage, igniter alignment, a coated flame sensor, the flue, and the induced draft blower.
- American Standard's heating sequence, in the same guide as E2.1, warms the ignitor for about 20 seconds and requires flame within 4 seconds. [E6.3](/american-standard/e6-3/) is the igniter fault on that control: the relay fails or the igniter is open.
- Bryant's sequence warms the hot-surface igniter for 17 seconds, then allows a 2-second proving window, and repeats until lockout 14. The guide points the diagnosis at status code 34.

Flame current numbers differ by manual. Do not mix them. York's TG9S page says normal is about 3.7 microamps, the low warning starts at 1.5, and lockout is 0.1. American Standard's S9V2 sequence says typical current is 0.75 to 3.0 microamps. Those are meter readings for a technician. [York continuous amber](/york/continuous-amber/) and [Amana EE6](/amana/ee6/) are the "still running, but the signal is weak" codes. They are how a lockout often starts.

The [winter no-heat checklist](/guides/furnace-no-heat-winter-2026/) is the outdoor vent and filter pass. A pressure switch that never closes is a different fault: [York 3 red flashes](/york/3-red-flashes/) and [Amana EE2](/amana/ee2/). Do not treat those as ignition lockouts.

## Gas-valve codes that are not the retry lockout
[Trane E2.3](/trane/e2-3/) is not [Trane E2.1](/trane/e2-1/). The S9V2 service facts say the 1st stage gas valve was not energized when it should have been, 10 times in the same call for heat, and 24 VAC was not sensed on MVL. The step on that row is to replace the integrated furnace control. [Trane E11](/trane/e11/) is the control reporting failed internal gas-valve relays, or 24 VAC at the 2nd stage gas valve. On the Goodman single-stage chart, [EEb](/goodman/eeb/) is the gas valve not energized when it should be, and [EEC](/goodman/eec/) is the valve energized when it should not be. None of those is an ignition-retry counter.

> **Safety first:** If you smell gas, don't touch light switches or use a phone inside. Leave the building and call your gas utility from outside. Turn off power to the furnace before opening any panel, and never bypass or jumper a safety switch. Gas, venting, wiring and control-board work is for a licensed HVAC technician.
