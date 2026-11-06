---
{
 "category": "ac",
 "shop": [],
 "title": "How to Read a Bryant Evolution Outdoor Status Light",
 "description": "How the amber status LED on a Bryant 288BNV heat pump or 189BNV air conditioner flashes a two-digit fault, including the timing and the technician recall step.",
 "answer": "On a Bryant 288BNV or 189BNV, the amber status light uses short flashes for the first digit and long flashes for the second. A short flash is 0.25 seconds and a long flash is 1.0 second. Three short and two long is code 32, low pressure. The wall control can show the same code. Shorting the force-defrost pins to recall a stored code is a technician step.",
 "updated": "2026-11-06",
 "faq": [
  {
   "q": "What does a steady amber light mean?",
   "a": "Table 6 calls a steady amber light, on with no flash, standby. A blinking amber light is a status or fault code. The green COMM light is communication with the wall control, not the fault number."
  },
  {
   "q": "How long is a short flash versus a long flash?",
   "a": "The service manual says the short flash is 0.25 seconds on and the long flash is 1.0 second on. The gap between flashes is 0.25 seconds. The gap between the short group and the first long flash is 1.0 second. The light stays off for 2.5 seconds before the code repeats."
  },
  {
   "q": "Can I recall the last code myself?",
   "a": "The manual's recall shorts the force-defrost connector, labeled J2, and then turns power on. The unit will not heat or cool while those pins stay shorted. That is inside a cabinet with line voltage, so it belongs to a technician. If the amber light or the wall control is already showing a code, write that down instead."
  }
 ],
 "sources": [
  {
   "name": "Bryant 288BNV heat pump / 189BNV air conditioner service manual (SM288BNV-189BNV-04)",
   "url": "https://www.shareddocs.com/hvac/docs/1009/Public/02/SM288BNV-189BNV-04.pdf"
  }
 ],
 "codes": [
  "ac/bryant/32",
  "ac/bryant/31",
  "ac/bryant/46",
  "ac/bryant/53",
  "ac/bryant/55",
  "ac/bryant/25"
 ]
}
---
## The amber light is the fault. The green light is not.
Service manual SM288BNV-189BNV-04 covers the Bryant 288BNV Evolution variable-speed heat pump and the 189BNV air conditioner. Most problems, the manual says, can be read from the amber status light on the outdoor control. A communicating system can also show the code on the wall control. The green COMM light only means the outdoor board is talking to that control. It is not a flash count.

Steady amber, on and not flashing, is standby in Table 6. Blinking amber is a code.

## How to count it
The code is two digits. Short flashes are the first digit. Long flashes are the second.

- Short flash: 0.25 seconds on.
- Long flash: 1.0 second on.
- Gap between flashes: 0.25 seconds.
- Gap between the last short flash and the first long flash: 1.0 second.
- The light stays off for 2.5 seconds, then the code repeats.

The manual's own example: 3 short flashes and 2 long flashes is code 32, and Table 6 calls that low pressure switch open. That page is [Bryant 32](/ac/bryant/32/). [Bryant 31](/ac/bryant/31/) is the high-pressure switch, 3 short and 1 long. [Bryant 46](/ac/bryant/46/) is the brownout, 4 short and 6 long.

Write the pattern down before you pull the disconnect. The disconnect kills the light.

## Stored codes
Active codes stay in memory when power is off. The manual recalls the most recent flashing code by shorting the force-defrost connector, labeled J2, with the unit off, then turning power on. Recall continues while the pins stay shorted, and the unit will not try to heat or cool. When the code has been read, power goes off and the short comes off.

That short is on the control board. Outdoor units carry line voltage with the thermostat off. Leave the recall to a technician. Counting a code that is already flashing, or reading it on the wall control, does not require opening the cabinet.

## Codes that are not the same number on a furnace
A Bryant furnace also blinks short then long, on a different board. [Furnace 25](/bryant/25/) is a model plug or setup switch inside the furnace. [Outdoor 25](/ac/bryant/25/) is the model plug on the 288BNV or 189BNV inverter. [Furnace 31](/bryant/31/) is the high-heat pressure switch. Outdoor 31 is the refrigerant high-pressure switch. Match the box you are looking at before you follow a page.

Sensor codes change defrost. If the outdoor air sensor fails, [code 53](/ac/bryant/53/), defrost starts from coil temperature and time. If the coil sensor fails, [code 55](/ac/bryant/55/), every heating defrost stops after 2 minutes. Neither one is fixed by adding refrigerant.

> **Safety first:** Switch off the outdoor disconnect and the breaker before you open a panel. Refrigerant, line-voltage wiring, and the inverter are for a licensed HVAC technician.
