---
{
 "category": "ac",
 "shop": ["filter", "thermostat"],
 "title": "AC High and Low Pressure Codes",
 "description": "What Carrier 31, 32, 83 and 84 and Goodman 01, L1, 02 and L2 mean on an AC or heat pump, and which airflow checks the service manuals leave with the homeowner.",
 "answer": "High-pressure and low-pressure codes mean a safety switch opened or the compressor protector tripped, and the outdoor unit shut itself down. Carrier 31 can escalate to lockout 84, and Carrier 32 can escalate to lockout 83. Goodman 01 or L1 is a low-pressure cutout. The manuals let you check coils, filters and the thermostat setting. Refrigerant charge, service valves and gauges are technician work.",
 "updated": "2026-10-27",
 "faq": [
  {
   "q": "What is the difference between Carrier 31 and Carrier 84?",
   "a": "31 means the high pressure switch opened. The unit steps down capacity, and the reset time is 6 minutes. If it happens when the stage can no longer be lowered, the control elevates to fault 84, a high-pressure lockout for 4 hours."
  },
  {
   "q": "Can I add refrigerant to clear a low-pressure code?",
   "a": "No. Carrier 83 and Goodman 01 both list low charge as a technician check, using the manufacturer's charging method and gauges. Adding refrigerant without those readings can turn a low-pressure fault into a high-pressure fault."
  },
  {
   "q": "What can a homeowner safely look at?",
   "a": "The manuals say to check coils for ice or debris, and, on Carrier 84 in heating, the indoor coil and filter. Goodman 01 says to check the thermostat setting and look for anything restricting indoor airflow. Then stop."
  }
 ],
 "sources": [
  {
   "name": "Carrier Infinity 25VNA8 heat pump / 24VNA9 air conditioner Service Manual (4SM)",
   "url": "https://www.shareddocs.com/hvac/docs/1009/Public/01/25VNA8-24VNA9-4SM.pdf"
  },
  {
   "name": "Goodman service manual RS6200007 r27 (hosted by Daikin Comfort)",
   "url": "https://daikincomfort.com/docs/default-source/cscf/sm-rs6200007r27.pdf"
  },
  {
   "name": "U.S. Department of Energy, Energy Saver guide (PDF)",
   "url": "https://www.energy.gov/sites/default/files/2022-08/energy-saver-guide-2022.pdf"
  },
  {
   "name": "ENERGY STAR heating and cooling maintenance checklist",
   "url": "https://www.energystar.gov/saveathome/heating-cooling/maintenance-checklist"
  }
 ],
 "codes": ["ac/carrier/31", "ac/carrier/32", "ac/carrier/83", "ac/carrier/84", "ac/goodman/01-l1", "ac/goodman/02-l2", "ac/goodman/03"]
}
---
## Pressure codes are a shutdown, not a suggestion
An air conditioner and a heat pump move heat by boiling and condensing refrigerant. Pressure switches watch that process. If pressure goes too high or too low, the control shuts the compressor off so it is not destroyed. The code on the outdoor board is the record of which switch opened, and how many times. Clearing it without fixing airflow or calling someone who can read gauges just spends the retries until the control locks out for hours.

These pages are the Carrier Infinity 25VNA8 heat pump and 24VNA9 air conditioner, and Goodman ASXC, DSXC, GSXC condensing units and ASZC, DSZC, GSZC heat pumps with the integrated control module. A different outdoor unit can use the same digits for a different fault. Read the model on the data plate and use the code page that names it.

Outdoor units carry line voltage even when the thermostat is off. The disconnect and the breaker are what make the cabinet dead. Leave both off before you open a panel. You do not need to open the electrical compartment to look at a coil from outside or to change an indoor filter.

| Code | What the service manual says |
|---|---|
| [Carrier 31](/ac/carrier/31/) | High pressure switch open. The unit steps down capacity for each occurrence and elevates to fault 84 if it happens on the lowest stage. Reset time is 6 minutes. |
| [Carrier 84](/ac/carrier/84/) | High pressure lockout for 4 hours, elevated from 31 when the stage can no longer be lowered. |
| [Carrier 32](/ac/carrier/32/) | Low pressure trip. Elevates to fault 83 after 3 occurrences. Reset time is 6 minutes. |
| [Carrier 83](/ac/carrier/83/) | Low pressure lockout for 4 hours, elevated from 32 after 3 occurrences. |
| [Goodman 01 / L1](/ac/goodman/01-l1/) | Low pressure cutout. The low pressure switch tripped 3 times within the same thermostat call, so the compressor and outdoor fan are off. |
| [Goodman 02 / L2](/ac/goodman/02-l2/) | High side fault. Four consecutive compressor protector trips with average run time between trips of more than 1 minute and less than 15 minutes, with both pressure switches closed. |

Carrier's status LED uses short flashes and long flashes. 31 is 3 short and 1 long. 32 is 3 short and 2 long. 83 is 8 short and 3 long. 84 is 8 short and 4 long. Count them before you pull the disconnect. Goodman shows 01, L1, 02 or L2 on the outdoor control display.

## What high pressure means
High pressure is the system unable to reject heat. Carrier's fault 84 table, which the 31 page says to use for causes, lists high outdoor or indoor load and airflow problems, overcharge, a closed service valve, a restriction in the filter drier or expansion device, a loose or disconnected pressure switch, and a faulty pressure switch. The 84 page itself adds, for heating mode, low indoor airflow, a reversing valve stuck in cooling, non-condensables, and a sudden supply-voltage change.

The homeowner lines in that table are the airflow lines:

- On 31, check the outdoor coil for clogging by ice or debris and clean or de-ice it if necessary. The manual also says to troubleshoot the outdoor fan motor. The fan motor is not a homeowner electrical job. Looking at a coil buried in cottonwood or ice is.
- On 84 in heating mode, check the indoor coil and the filter for restriction by debris and clean if necessary. The manual also says to troubleshoot the indoor fan motor, which is technician work.

Goodman 02 / L2 is the high-side fault where the protector trips repeatedly and the pressure switches are still closed. Causes: high pressure, a dirty condenser coil or a failed outdoor fan, a failed capacitor, or a wiring fault. Every step on that page is marked technician: check the high pressure switch, and if pressure is high, check and clean the condenser coil, the outdoor fan, the capacitor and the wiring. Goodman says the repeated protector trips can damage the compressor. Do not keep resetting 02 to get through the afternoon. Call.

A dirty outdoor coil is something you can see with the power off at the disconnect. Rinse debris outward the way the coil-cleaning page describes, gently, so the fins are not folded flat. The [coil cleaning](/parts/coil-cleaning/) page is that supply list. Bent fins block air the same way cotton does. Straightening them with a fin comb is a light touch, not a screwdriver.

## What low pressure means
Low pressure is the system unable to feed the compressor: not enough refrigerant getting back, or not enough air across the indoor coil in cooling so the coil turns into a block of ice and the suction pressure collapses.

Carrier 32's causes, taken from the fault 83 table the manual points to: a closed service valve, an undercharged system, low indoor airflow in cooling or low outdoor airflow in heating, EXV or TXV problems, and a restriction in the filter drier or the circuits. Fault 83 adds a reversing valve bypass and an uninsulated vapor line in cooling.

Homeowner lines:

- In cooling, check the indoor coil for ice or debris and clean or de-ice it if necessary. The manual also says to troubleshoot the indoor fan. If the coil is a solid block of ice, turn the system off and let it thaw. Running it will not blow the ice out. A dirty filter is a common reason that coil iced. Carrier 84's heating check names the filter directly. The indoor filter serves the cooling coil too.
- Check the outdoor coil for ice or debris as well, on 32 and on 83.

Goodman 01 / L1 causes: an open low pressure switch, low refrigerant charge or a restriction, low indoor airflow, the thermostat setting, and a supply-voltage problem. The homeowner step is to check the thermostat setting and look for anything restricting indoor airflow. The manual says to verify indoor airflow, charge and thermostat setting. Charge is the technician half of that sentence. The thermostat half is yours: a setpoint the system cannot reach, a fan set to a mode that does not match the call, or a thermostat that is not actually calling. See the [thermostat](/parts/thermostat/) page for how the manuals treat that part.

The technician steps on Goodman 01 are to check the resistance of the low pressure switch, read the pressure on a gauge, and replace the switch only if the pressure is not low. If the pressure is low, verify airflow and charge, and check voltage wires, involving the electric company if needed. Those are gauge and meter steps. They are why the code page says to call.

## Filters and the DOE note
The U.S. Department of Energy Energy Saver guide says to clean or replace furnace filters once a month or as recommended. The same filter is in the air path of a central air conditioner. ENERGY STAR's maintenance checklist says to inspect, clean or change filters monthly, and that a dirty filter can increase energy costs and damage equipment. A filter that is collapsed or packed with dust is the "restricted indoor airflow" these pressure codes name. Use the size printed on the old filter. The [air filter](/parts/hvac-air-filter/) and [filter size](/parts/furnace-filter-sizes/) pages cover how nominal size differs from actual size. The furnace-specific version of this advice is the [furnace filter guide](/guides/furnace-air-filter-guide/).

Changing a filter does not fix a closed service valve or a low charge. If the code returns after the coil is clear and the filter is new, the remaining causes on every one of these pages are technician causes.

## Goodman 03 is not a pressure code
[Goodman 03](/ac/goodman/03/) is short cycling: the outdoor unit is cycling on and off too quickly. Causes are an intermittent thermostat or thermostat wiring problem, a compressor relay or control board, loose low-voltage connections, and a main power or ground problem. Every step is technician: verify low voltage between R and Y, and if it fluctuates between 24 V and 0, check the thermostat and the wiring. It is on this page because it sits next to 01 and 02 on the same control and people read it as another pressure fault. It is not. Do not open the outdoor cabinet to measure R and Y yourself. Twenty-four volts is the control circuit, but the same cabinet contains line voltage.

[Goodman d2](/ac/goodman/d2/) is a system mismatch: the indoor and outdoor units are not an acceptable combination, or the airflow trim is set to a prohibited value. That is an installer or technician code. There is no filter step on it.

## What not to do
Do not jumper a pressure switch. The switch is what kept the compressor from running with no refrigerant or with the coil blocked. The furnace manuals on this site say the same thing about limit and pressure switches. The AC manuals assign the switch test to a technician with gauges.

Do not spray the outdoor coil with a pressure washer at close range. Folded fins are a new airflow restriction.

Do not add a can of refrigerant from a hardware store. Carrier 83 lists undercharge as a cause and overcharge as a cause of the high-pressure lockout. The direction is only known with the manufacturer's charging method. A technician who finds a closed service valve, which is on both 83 and 84, will fix that without adding refrigerant at all. A valve left closed after a seasonal service is a known cause on those pages.

## When to call
Call a licensed HVAC technician if 31 repeats or becomes 84, if 32 repeats or becomes 83, or if Goodman 01 or 02 is on the display. Carrier's reset times (6 minutes, then a 4-hour lockout) are the control protecting the compressor. Using the 6 minutes to put the disconnect in and out does not reset the count of occurrences that leads to the lockout. Goodman 02's note is blunter: the repeated protector trips can damage the compressor.

Dealer locators for Carrier and Goodman are linked from the code pages. They are the manufacturers' directories, not affiliate links.

The shop buttons on this guide search Amazon for a furnace air filter and a thermostat, which are the two homeowner parts these pages actually name. They do not search for refrigerant, capacitors or pressure switches. A capacitor is on the Goodman 02 cause list as a technician check. The [run capacitor](/parts/run-capacitor/) page explains what it is and why it holds a charge. It is not a DIY swap on a pressure-lockout call.

> **Safety first:** Switch off the outdoor disconnect and the breaker before you open any panel. Capacitors hold a charge after the power is off. Refrigerant, wiring, the compressor and the control board belong to a licensed HVAC technician. Ice on a coil means stop the system and let it thaw, not chip it off with a tool.
