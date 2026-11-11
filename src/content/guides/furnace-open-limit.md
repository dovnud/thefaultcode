---
{
 "title": "Furnace Limit Switch Open: Blower Runs, No Heat",
 "description": "What an open furnace limit means on York, Amana, American Standard and Bryant, which manuals name the filter, and why a rollout switch is a different shutdown.",
 "answer": "An open limit means a safety switch got too hot, or saw flame where flame should not be, and the control shut the burners off. York 4 red flashes and Amana EE3 name a dirty filter. York 11 red flashes means the limit stayed open more than five minutes and the manual blames the blower. American Standard E04 and Bryant 13 can be the main limit or the rollout switch. Resetting a rollout switch without finding the cause is what the manuals tell you not to do.",
 "updated": "2026-11-11",
 "category": "furnaces",
 "shop": [
  "filter"
 ],
 "faq": [
  {
   "q": "Why is the blower running with no heat?",
   "a": "On a limit fault the control often keeps the blower going to cool the heat exchanger. York 4 red flashes runs the supply blower and the inducer while the limit is open. Amana EE3 says the circulator runs continuously and there is no furnace operation."
  },
  {
   "q": "Is a dirty filter really on the list?",
   "a": "Yes, on some codes. York 4 red flashes and Amana EE3 and Amana EEd list a blocked filter. York 11 red flashes does not. That code says the limit stayed open more than five minutes and is usually a failed blower motor or wheel. American Standard E04 names the switch and does not add a filter sentence."
  },
  {
   "q": "Can I reset a rollout switch?",
   "a": "Not as a repair. York 5 red flashes and the rollout half of Bryant 13 and American Standard E04 are manual-reset safety switches. The furnace stays off until a technician finds why flame or heat left the burner path."
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
   "name": "U.S. Department of Energy, Energy Saver guide (PDF)",
   "url": "https://www.energy.gov/sites/default/files/2022-08/energy-saver-guide-2022.pdf"
  },
  {
   "name": "Lennox SL280DFNV installation instructions 508150-02",
   "url": "https://www.lennox.com/dA/78477aadd3/508150-02a.pdf"
  },
  {
   "name": "Goodman service manual RS6621003r3, 80% single-stage gas furnaces",
   "url": "https://mobile.goodmanmfg.com/mobileapp/stellent/pdf/infoPdf/Lit/RS6621003R3.pdf"
  }
 ],
 "codes": [
  "york/4-red-flashes",
  "york/11-red-flashes",
  "york/5-red-flashes",
  "amana/ee3",
  "amana/eed",
  "american-standard/e04",
  "bryant/13",
  "bryant/33",
  "goodman/ee3",
  "goodman/4-flashes",
  "carrier/13",
  "carrier/33",
  "trane/e04",
  "lennox/e250",
  "lennox/e291",
  "lennox/e252",
  "lennox/e274"
 ]
}
---
## Heat built up, so the burners were shut off
The limit switch watches temperature at the heat exchanger. If air is not moving across it, or the furnace is fired too hard, the switch opens and the gas valve closes. The blower often keeps running so the heat exchanger can cool. That is why the vents blow and the house still gets cold.

A rollout switch is the other switch people lump in with "limit." It opens if flame leaves the burner box. Several of these codes name both. Read the code page before you decide a filter will fix it.

| Code | Limit, rollout, or both |
|---|---|
| [York 4 red flashes](/york/4-red-flashes/) | Main limit open. Blower and inducer run. Dirty filter is the first item in the list. |
| [York 11 red flashes](/york/11-red-flashes/) | The same limit, still open after five minutes. The manual says this is usually a failed blower motor or blower wheel, and it is a hard lockout. |
| [York 5 red flashes](/york/5-red-flashes/) | Rollout switch open. Manual reset, hard lockout, combustion air, inducer, heat exchanger or burners. Not the filter list. |
| [Amana EE3](/amana/ee3/) | Primary limit open. Circulator runs, no heat. Blocked filters, ducts, blower speed or a failed blower. |
| [Amana EEd](/amana/eed/) | Auxiliary limit in the blower compartment. The chart also says to check filters and the blower. |
| [American Standard E04](/american-standard/e04/) | Open limit. The guide names the main thermal limit, a rollout switch, or the reverse airflow switch. |
| [Bryant 13](/bryant/13/) | Limit circuit lockout: limit or rollout open longer than 3 minutes, or 10 high-heat limit trips. Auto-reset after 3 hours. See code 33 in that manual. |
| [Bryant 33](/bryant/33/) | Limit circuit fault on the 80% two-stage chart. Dirty filter is on this list. Open longer than 3 minutes becomes lockout 13. |
| [Goodman EE3](/goodman/ee3/), [Carrier 33](/carrier/33/) and [13](/carrier/13/), [Trane E04](/trane/e04/) | The same idea on the manuals already on this site. Carrier 33 is the open switch. Carrier 13 is the lockout after 3 minutes. |
| [Goodman 4 flashes](/goodman/4-flashes/) | 80% *MES80 chart: primary or auxiliary limit open. Circulator runs, no heat. Blocked filters are on the list. |
| [Lennox E250](/lennox/e250/) | SL280DFNV limit circuit open. If it stays open 3 minutes, a 1-hour soft lockout. The row names firing rate, a blockage, and airflow. It does not name the filter. |
| [Lennox E252](/lennox/e252/) | SL280DFNV discharge air temperature too high (gas heat only) |
| [Lennox E274](/lennox/e274/) | SL280DFNV soft lockout: recycles ran out after the limit circuit opened, or the limit stayed open longer than 3 minutes |
| [Lennox E291](/lennox/e291/) | Same control, heat airflow below the minimum. This row does name a dirty filter. 1-hour soft lockout. |

## The filter check, and where it stops
The Department of Energy Energy Saver guide says to clean or replace furnace filters once a month or as recommended. That lines up with the codes that name a dirty filter: York 4 red flashes, Amana EE3 and Amana EEd. Switch the furnace off, slide the filter out, and match the size printed on the frame. Open supply and return grilles that are closed. Then let the furnace try once.

Stop there if the code returns. York says an improperly sized duct system, the wrong blower speed, the wrong firing rate, loose limit wiring, or a faulty blower motor are the rest of the 4 red flash list. Those are technician checks. If the limit is still open after five minutes, York changes the code to 11 red flashes and will not clear until power is cycled after the blower problem is fixed. Cycling the breaker first only repeats it.

American Standard E04 does not give you that filter sentence. The row names three switches and stops. If the cabinet around the burners looks scorched, treat E04 as rollout: furnace off, technician next. Bryant 13 is already the lockout, after the switch has been open for 3 minutes or high heat has tripped the limit 10 times. The 3-hour auto-reset will lock out again if the switch opens again.

The [limit and rollout switches](/parts/limit-and-rollout-switches/) page explains the parts and does not sell replacements. The [carbon monoxide and rollout](/guides/furnace-carbon-monoxide-and-rollout/) guide is the page for a switch that opened because flame left the burner box.

> **Safety first:** If you smell gas, don't touch light switches or use a phone inside. Leave the building and call your gas utility from outside. Turn off power to the furnace before opening any panel, and never bypass or jumper a safety switch. Gas, venting, wiring and control-board work is for a licensed HVAC technician.
