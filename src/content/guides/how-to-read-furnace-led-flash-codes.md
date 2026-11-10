---
{
 "shop": [
  "control-board",
  "limit-switch"
 ],
 "title": "How to Read a Furnace LED Flash Code",
 "description": "How to find and read the blinking LED or display code on a gas furnace control board, with brand-by-brand examples from the manuals.",
 "answer": "Most modern gas furnaces have a control board that reports faults with a blinking LED or a small digit display, seen through a window in the blower door. Count the flashes (or read the characters), then look the code up in the chart printed inside your furnace door or in its manual. The same number can mean different things on different brands, so always match the code to your brand and model.",
 "updated": "2026-11-10",
 "faq": [
  {
   "q": "Does the same flash code mean the same thing on every brand?",
   "a": "No. Each manufacturer uses its own code list. Carrier 33, Rheem 33 and Goodman codes all mean different things, so use your brand's chart."
  },
  {
   "q": "Will turning off power erase the code?",
   "a": "The light you are watching can go out, so write the pattern down first. Stored history is separate. York's TG9S manual says the last five codes stay in memory even if power is lost, and it assigns the LAST ERROR button to a qualified technician. American Standard's S9V2 guide stores the last six faults in the L6F menu."
  },
  {
   "q": "Where is my furnace's code chart?",
   "a": "Usually on a label inside the blower door, and in the installation or service manual for your model."
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
   "name": "Lennox SL280DFNV installation instructions 508150-02",
   "url": "https://www.lennox.com/dA/78477aadd3/508150-02a.pdf"
  }
 ],
 "codes": [
  "carrier/33",
  "goodman/ee3",
  "trane/e2-1",
  "lennox/red-slow-green-on",
  "rheem/11",
  "york/7-red-flashes",
  "amana/ee3",
  "american-standard/e2-1",
  "bryant/14",
  "bryant/33",
  "bryant/rapid-flashing",
  "bryant/25",
  "carrier/11",
  "carrier/12",
  "carrier/continuous-on",
  "goodman/ebl",
  "goodman/eaf",
  "rheem/d1",
  "lennox/e200",
  "lennox/e270",
  "lennox/e201",
  "lennox/e207",
  "lennox/e224",
  "lennox/e240",
  "lennox/e252",
  "lennox/e271",
  "lennox/e290",
  "lennox/e292"
 ]
}
---
## Where to find the code
The status light or display is on the furnace control board, usually behind the lower (blower) door, often visible through a small sight window. Read and note the code **before** you turn the furnace off or reset it. Several boards also keep a fault history: the Goodman manual describes a list of the last 10 faults, the Trane Service Facts the last 6 faults, the Rheem manual the six most recent faults, and the Carrier manual a recall of the last stored status code.

## How the brands show codes
| Brand (manual we used) | How the code is shown | Example |
|---|---|---|
| Carrier 59SC5 | LED flashes a two-digit status code: the first digit is the number of short flashes, the second the number of long flashes. A steady light and a dark light are statuses too | [Carrier 33](/carrier/33/): limit circuit fault. [Carrier 11](/carrier/11/) means no stored code. [Carrier 12](/carrier/12/) is the blower running about 90 seconds after power-up |
| Goodman GR9S96/GD9S96 | 7-segment display shows a code such as EE3, or a later code such as EbL or EAF | [Goodman EE3](/goodman/ee3/): primary limit circuit open. [Goodman EbL](/goodman/ebl/) is low blower current and a hard lockout. [Goodman EAF](/goodman/eaf/) is a lost R-32 sensor, heat off and the fan still running |
| Trane S9V2 | Seven-segment LED readout, e.g. E2.1 | [Trane E2.1](/trane/e2-1/): retry exceeded |
| Lennox ML180UH | Red and green LEDs in combinations of on, off, slow and fast flash | [Lennox red slow / green on](/lennox/red-slow-green-on/): limit switch open |
| Lennox SL280DFNV | Seven-segment diagnostic LED. These E-codes are not the ML180 red and green pair | [Lennox E200](/lennox/e200/): rollout hard lockout. [Lennox E270](/lennox/e270/): retries used up, no flame current. Also on this chart: [E201](/lennox/e201/) blower communication, [E207](/lennox/e207/) open ignitor, [E224](/lennox/e224/)–[E228](/lennox/e228/) pressure switch and calibration, [E240](/lennox/e240/) low flame current, [E252](/lennox/e252/) high discharge air, [E271](/lennox/e271/) pressure-switch retry lockout, [E290](/lennox/e290/) ignitor circuit, [E292](/lennox/e292/) blower will not start |
| Rheem R96V | Dual 7-segment diagnostic display. A letter code is not the same as a heat call | [Rheem 11](/rheem/11/): failed ignition. [Rheem d1](/rheem/d1/) is no model data. A lone H or h on that display is a call for gas heat, which is a normal-operation code in the same manual, not d1 |
| York TG9S | One LED behind the blower-door window. Red flashes are 1/3 second on and off, then a 2-second pause. Amber and green are normal or a flame warning | [York 7 red flashes](/york/7-red-flashes/): three failed ignition trials |
| Amana *MVC96 / *CVC96 | 7-segment display. The chart is in IOG-2015L | [Amana EE3](/amana/ee3/): primary limit open |
| American Standard S9V2 | 7-segment display. Last 6 faults are in the L6F menu | [American Standard E2.1](/american-standard/e2-1/): flame never sensed |
| Bryant 926TB | Amber LED. Short flashes, then long flashes | [Bryant 14](/bryant/14/): ignition lockout |
| Bryant 80% two-stage (TG-GFB80-02) | Same short-then-long amber LED. Rapid flashing with no pause is polarity | [Bryant 33](/bryant/33/): limit circuit fault. The count is in [how to read a Bryant furnace LED](/guides/how-to-read-bryant-furnace-led-codes/) |

## Step by step
1. Look through the sight window without removing the door, if your furnace has one.
2. Count the flashes, or write down exactly what the display shows. Note the pause between digits.
3. Check the code chart on the inside of the door or in your manual.
4. Look up your brand on our [code lookup](/) for the meaning, likely causes and safe checks.

## Why the code matters
The code tells you which safety circuit or component the control board is unhappy with, for example a limit switch, pressure switch, flame sensing or ignition. That decides whether a simple check (like the air filter) is reasonable or whether you need a technician.

> **Safety first:** If you smell gas, don't touch light switches or use a phone inside. Leave the building and call your gas utility from outside. Turn off power to the furnace before opening any panel, and never bypass or jumper a safety switch. Gas, venting, wiring and control-board work is for a licensed HVAC technician.
