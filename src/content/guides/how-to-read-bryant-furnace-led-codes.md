---
{
 "shop": [],
 "title": "How to Read a Bryant Furnace LED Code",
 "description": "How the amber LED on a Bryant 80% two-stage variable-speed furnace flashes a two-digit status code, and how the troubleshooting guide says to recall stored codes.",
 "answer": "On the Bryant furnaces covered by troubleshooting guide TG-GFB80-02, the amber LED uses short flashes for the first digit and long flashes for the second. Rapid flashing with no pause is reversed line polarity, not a numbered code. Stored codes are recalled with setup switch SW1-1, and that recall is a technician step because the blower door has to come off.",
 "updated": "2026-11-06",
 "faq": [
  {
   "q": "What does a rapidly blinking Bryant furnace light mean?",
   "a": "On this chart, rapid flashing with no pause means 115 V polarity is reversed, or the transformers are out of phase if two furnaces are twinned. A pause between groups of flashes is a numbered code. Count the short flashes, then the long flashes."
  },
  {
   "q": "Will turning the furnace off erase the code?",
   "a": "The light you are watching can go out, so write the pattern down first. This guide says stored codes are erased after 72 hours, or when a technician puts SW1-1 on and jumpers R, W/W1, and Y/Y2 until code 11 flashes."
  },
  {
   "q": "Is this the same chart as a Bryant 926TB?",
   "a": "Both use short flashes then long flashes. The 926TB install manual points lockout 13 at code 33 and lockout 14 at code 34, and its full chart is a service-label figure. The numbered checks on the new Bryant pages are from TG-GFB80-02, the 80% two-stage guide, plus codes 35 and 42 from the 987MA modulating guide."
  }
 ],
 "sources": [
  {
   "name": "Bryant 80% variable-speed two-stage furnace troubleshooting guide (Catalog No. TG-GFB80-02)",
   "url": "https://www.shareddocs.com/hvac/docs/1009/Public/0D/TG-GFB80-02.pdf"
  },
  {
   "name": "Bryant 987MA Series A modulating furnace troubleshooting guide (Form 987MA-01T)",
   "url": "https://www.shareddocs.com/hvac/docs/1009/Public/06/987MA-01T.pdf"
  },
  {
   "name": "Bryant 926TB installation, start-up, operating and service instructions",
   "url": "https://www.shareddocs.com/hvac/docs/1009/Public/06/II926TB-04.pdf"
  }
 ],
 "codes": [
  "bryant/12",
  "bryant/rapid-flashing",
  "bryant/25",
  "bryant/33",
  "bryant/34",
  "bryant/14",
  "bryant/13"
 ]
}
---
## Count short flashes, then long flashes
The Bryant 80% variable-speed two-stage troubleshooting guide (catalog TG-GFB80-02) uses one amber LED on the furnace control. A numbered status code is two digits. The first digit is the number of short flashes. The second digit is the number of long flashes. [Bryant 33](/bryant/33/) is 3 short and 3 long. [Bryant 34](/bryant/34/) is 3 short and 4 long.

Three other patterns are not a two-digit code:

- Continuous off: the guide says to check for 115 V at L1 and L2, and 24 V at SEC-1 and SEC-2.
- Continuous on: the control has 24 V power.
- [Rapid flashing](/bryant/rapid-flashing/), with no pause: line polarity is reversed, or the transformers are out of phase on twinned furnaces.

[Code 12](/bryant/12/) is the blower running for 90 seconds after power returns during a heat call. It is not a lockout. If the LED returns to steady on, the guide is saying no fault is present.

## Do not pull the blower door to read the light
The Start Here section says to remove the main furnace door first and not to remove the blower access panel, then record the amber LED. Write the pattern down before you cut power. The same section says the blower door switch can be held in with tape only after that, and only as part of the voltage checks. Those checks are for a technician. The panel covers line voltage.

## Recalling stored codes
The guide says stored codes erase after 72 hours. To read them sooner, there must be no thermostat inputs and every time delay must have expired. Disconnect the R lead, or the ABCD connector if a communicating wall control is used, wait for the blower to stop, and turn setup switch SW1-1 on. The codes flash in the order they occurred, and they repeat after code 11. Code 11 means there is no previous code.

To clear the history, SW1-1 stays on and R, W/W1, and Y/Y2 are jumpered together until 11 flashes. Leave SW1-1 on during a real call for heat and the control can store [code 25](/bryant/25/), which is a setup error, not a failed part. Turn SW1-1 off when you are done.

Opening the blower door and moving SW1-1 is technician work. If you can already see the live pattern through the sight window, you do not need the history to look the code up.

## Which Bryant chart you are on
[Bryant 13](/bryant/13/) and [Bryant 14](/bryant/14/) on this site are the 926TB install manual. That manual uses the same short-then-long amber LED and tells you to see code 33 or 34. Its full chart is a service-label figure, so those two pages do not invent the rest of the label. The cause lists for [33](/bryant/33/), [34](/bryant/34/), and the other two-digit pages are the words in TG-GFB80-02.

[Bryant 35](/bryant/35/) and [Bryant 42](/bryant/42/) are not on that 80% chart. They are the 987MA Series A modulating guide: a gas-valve fault, and an inducer fault. If the rating plate says 987MA, use those pages. If it is the 80% two-stage furnace this guide names, it will not flash 35 or 42.

> **Safety first:** If you smell gas, don't touch light switches or use a phone inside. Leave the building and call your gas utility from outside. Turn off power to the furnace before opening any panel, and never bypass or jumper a safety switch. Gas, venting, wiring and control-board work is for a licensed HVAC technician.
