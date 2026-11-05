---
{
 "category": "ac",
 "shop": ["filter"],
 "title": "Heat Pump Not Heating in the Cold",
 "description": "Why a heat pump can blow cool air or stop heating in cold weather, from Carrier's defrost rules and the outdoor-sensor codes, plus the American Standard balance-point setting.",
 "answer": "A heat pump can stop heating in the cold because it is in a normal defrost, because an outdoor temperature sensor failed and changed how defrost runs, or because a furnace lockout temperature has handed the job to the gas furnace. Carrier's 25VNA8 manual only allows defrost below 50°F outdoors, and it says a failed coil sensor makes every heating defrost stop after 2 minutes. Refrigerant, sensors and the reversing valve are technician work. The filter and a debris-covered outdoor coil are the checks the manuals leave outside the electrical cabinet.",
 "updated": "2026-11-05",
 "faq": [
  {
   "q": "Is steam off the outdoor unit an emergency?",
   "a": "Carrier's defrost section says the outdoor fan comes back on 10 seconds before the reversing valve switches at the end of defrost, and defrost only runs below 50°F outdoor temperature. A short cloud at the outdoor unit in cold weather can be that cycle. A flash code that stays on is not normal defrost."
  },
  {
   "q": "Why did the heat pump get weaker after a sensor code?",
   "a": "If the coil temperature sensor fails, Carrier says defrost runs at every interval during heating and ends after 2 minutes. If the outdoor air sensor fails, defrost is started from coil temperature and time instead. Those are codes 55 and 53. They are not fixed by adding refrigerant."
  },
  {
   "q": "My American Standard furnace is heating and the heat pump is not. Is that a fault?",
   "a": "Not always. The S9V2 installer's guide has a heat-pump compressor lockout temperature. Below that setting the furnace is the primary heat. The default in the menu description is 45°F. A technician or the installer confirms the setting. It is not a flash code."
  }
 ],
 "sources": [
  {
   "name": "Carrier Infinity 25VNA8 heat pump / 24VNA9 air conditioner Service Manual (4SM)",
   "url": "https://www.shareddocs.com/hvac/docs/1009/Public/01/25VNA8-24VNA9-4SM.pdf"
  },
  {
   "name": "American Standard S9V2 installer's guide (18-CE01D1-1E-EN)",
   "url": "https://americanstandardair.com/content/dam/Trane/Commercial/global/products-systems/equipment/unitary/split-systems/Small%20Splits/Furnaces/18-CE01D1-1E-EN_11112016.pdf"
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
 "codes": [
  "ac/carrier/53",
  "ac/carrier/55",
  "ac/carrier/56",
  "ac/carrier/32",
  "ac/carrier/83",
  "ac/goodman/01-l1",
  "american-standard/e3-4"
 ]
}
---
## Cold weather is when these codes show up
A heat pump heats by running the refrigeration cycle backwards. In cold weather the outdoor coil ices up, and the control has to defrost it. The indoor air can feel cool during that defrost, and the outdoor unit can steam. That part is normal. A code that stays on the outdoor board, or a house that never recovers after the cloud of steam, is the fault.

Read the amber status light before you open the disconnect. On the Carrier Infinity 25VNA8 and 24VNA9, short flashes are the first digit and long flashes are the second. [Carrier 55](/ac/carrier/55/) is 5 short and 5 long. [Carrier 53](/ac/carrier/53/) is 5 short and 3 long. [Carrier 56](/ac/carrier/56/) is 5 short and 6 long.

## What Carrier says defrost is supposed to do
The 25VNA8 / 24VNA9 service manual only allows defrost below 50°F (10°C) outdoor ambient temperature. A defrost demand exists when the coil temperature is at or below 32°F (0°C) for 4 minutes during the selected interval. Defrost ends when the coil is warm enough: above 60°F if the outdoor air is warmer than 25°F, or above 45°F if the outdoor air is 25°F or colder, and never longer than 10 minutes. The outdoor fan turns on 10 seconds before the reversing valve switches back.

Two sensor failures change that on purpose:

- If the outdoor air thermistor fails, defrost is initiated from coil temperature and time. That failure is [code 53](/ac/carrier/53/).
- If the outdoor coil thermistor fails, defrost occurs at each time interval during heating and terminates after 2 minutes. That failure is [code 55](/ac/carrier/55/). A two-minute defrost, every interval, will not keep the coil clear in a hard freeze, and the indoor air stays lukewarm.

[Code 56](/ac/carrier/56/) is both thermistors out of range. The manual lists heating when cooling was demanded, a coil thermistor on the wrong tube, and an outdoor air sensor touching sheet metal. One action is to inspect the outdoor coil for obstructions. Do that with the disconnect and the breaker off. Leaves and a solid block of ice are visible without opening the electrical panel. The reversing valve, if the unit heats while the thermostat calls for cooling, is technician work.

## Airflow still matters in heating
Low pressure in heating is often the outdoor coil, not an empty system you can top off. [Carrier 32](/ac/carrier/32/) points at the fault 83 list, which includes low outdoor airflow in heating. [Carrier 83](/ac/carrier/83/) is the 4-hour lockout after those trips. [Goodman 01 / L1](/ac/goodman/01-l1/) is the low-pressure cutout on that outdoor control. The homeowner line on Goodman 01 is the thermostat setting and anything blocking indoor airflow. Charge is the technician half of the same sentence.

The filter is in that air path. The Department of Energy says to clean or replace furnace filters once a month or as recommended. ENERGY STAR says the same monthly check, and that a dirty filter can damage equipment. Use the size printed on the old filter. The [pressure-code guide](/guides/ac-high-and-low-pressure-codes/) has the rest of the high-side and low-side list.

## When the furnace is supposed to take over
Dual-fuel systems switch on purpose. The American Standard S9V2 installer's guide describes a heat-pump compressor lockout temperature. Below it, the furnace is the primary heat. The menu default printed there is 45°F. That is a setting, not a fault code. If the gas furnace never starts below that temperature, the furnace has its own code. [American Standard E3.4](/american-standard/e3-4/) is an open 2nd stage pressure switch: low stage can still run, and high stage locks out after three misses in the same call. The furnace pages are the next stop, not another refrigerant gauge.

Do not add refrigerant because the air feels cool. Do not hose an energized outdoor unit. If 53, 55 or 56 is on the board, or 32 has already become 83, call a licensed HVAC technician.

> **Safety first:** Outdoor units carry line voltage even when the thermostat is off. Switch off the disconnect and the breaker before you touch the cabinet. Refrigerant, sensors and the reversing valve are technician work.
