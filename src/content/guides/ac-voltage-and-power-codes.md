---
{
 "category": "ac",
 "shop": ["voltage-tester"],
 "title": "AC Voltage and Power Codes: Brownout, L8, H8, E5",
 "description": "What Carrier 46, Goodman L8, H8 and E5 mean when an AC or heat pump reports low voltage, high voltage, or an open low-voltage fuse, and what is safe to check.",
 "answer": "Voltage codes mean the outdoor unit saw supply voltage outside the range it will run in, or a low-voltage fuse opened. Carrier 46 is a brownout. Goodman L8 is low line voltage and H8 is high line voltage. Goodman E5 is an open low-voltage fuse. The homeowner check on L8 is whether the breaker tripped. Measuring line voltage and replacing boards are technician steps, and the manuals say to involve the utility if the supply itself is wrong.",
 "updated": "2026-10-27",
 "faq": [
  {
   "q": "What voltage does the Carrier 46 page mention?",
   "a": "The service manual tells the technician to check for line voltage of more than approximately 180 V. If it is less than 180 V and that persists, the manual says to contact the power provider. That measurement is a technician step, not a homeowner step."
  },
  {
   "q": "What should I do if the breaker tripped?",
   "a": "Goodman L8 lists a tripped breaker or a blown fuse as a cause, and the homeowner line is to check that the outdoor disconnect and the main-panel breaker have not tripped. If it trips again as soon as the unit starts, leave it off and call a technician. Do not keep resetting a breaker that will not hold."
  },
  {
   "q": "Is a non-contact tester a way to measure the brownout?",
   "a": "No. A non-contact tester only indicates that voltage is present. It does not read 180 V or tell you whether the supply is high or low. Use it to confirm a disconnect you just switched off is actually dead before you look inside. The number on Carrier 46 is a meter reading for a technician."
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
  }
 ],
 "codes": ["ac/carrier/46", "ac/goodman/l8", "ac/goodman/h8", "ac/goodman/e5", "ac/goodman/ee"]
}
---
## The outdoor unit is watching the supply
Compressors are intolerant of voltage that is too low or too high. The controls on the Carrier and Goodman outdoor units covered here will stop and post a code rather than run that way. The code is often the first sign that the problem is the utility supply, a loose connection, or a breaker, and not the refrigerant circuit. Pressure codes are a different family. They are in the [high and low pressure guide](/guides/ac-high-and-low-pressure-codes/).

These codes are from the Carrier Infinity 25VNA8 / 24VNA9 service manual and the Goodman (Daikin) service manual RS6200007 revision 27 for ASXC, DSXC, GSXC, ASZC, DSZC and GSZC units. Another brand's "46" or "L8" is not this fault unless the manual for that model says so.

The cabinet stays live when the thermostat is set to Off. Line voltage is present until the outdoor disconnect and the breaker are off. Do not pull a panel to look at a fuse because a code mentioned one.

| Code | Meaning in the service manual |
|---|---|
| [Carrier 46](/ac/carrier/46/) | Brownout. Low line voltage reaching the unit. Reset time is 6 minutes. The LED pattern is 4 short flashes and 6 long flashes. |
| [Goodman L8](/ac/goodman/l8/) | Low line voltage. The supply to the outdoor unit is below the specified range. |
| [Goodman H8](/ac/goodman/h8/) | High line voltage. The unit may seem to run normally, but the compressor protector may be open, so the compressor and outdoor fan are off. |
| [Goodman E5](/ac/goodman/e5/) | Open fuse. The low-voltage fuse on the control is blown. |
| [Goodman EE](/ac/goodman/ee/) | Board misoperation. The manual lists welded compressor relay contacts as the error condition. |

## Carrier 46, brownout
Causes: low line voltage, a bad connection on L1 and L2, and the inverter not reading proper voltage.

Both steps are marked technician on the code page:

- Check for line voltage of more than approximately 180 V. If it is less than 180 V and that low voltage persists, contact the power provider.
- Check the connections on the line side and the load side. If nothing else is found, replace the inverter.

Approximately 180 V is the manual's figure for the technician's meter, on this Carrier family. It is not a Goodman figure and it is not a target to tune a household toward. If the lights in the house are dimming when the air conditioner starts, that is consistent with a supply problem, and the manual's instruction is to contact the power provider when the low reading persists. You do not need to confirm the number yourself before you call the utility or a technician. A technician has the meter and the procedure for opening the disconnect safely.

The reset time is 6 minutes. The unit may start again when the voltage recovers, which is why a brownout during a storm can look like an intermittent failure. If 46 returns every time the compressor tries to start, the connections or the supply are still wrong. Replacing the inverter is the last line of the manual's table, after the voltage and the connections have been checked. It is not the first part to buy.

## Goodman L8, low line voltage
Causes: low supply voltage, a tripped breaker or a blown fuse, and a unit that is not wired as specified on the rating plate.

The homeowner step Goodman includes: check that the circuit breaker has not tripped, at the outdoor disconnect and at the main panel. The manual says to check circuit breakers and fuses and to verify the unit is connected as specified on the rating plate. Looking at a breaker handle is the part of that sentence you can do without opening a live cabinet. Comparing the field wiring to the rating plate, and measuring the voltage, are the technician half.

If the breaker is tripped, reset it once. If it trips again immediately, leave it off. A breaker that will not hold is a short or a compressor that is not starting freely, which is [Goodman 04](/ac/goodman/04/), locked rotor, a different code and a technician call. Do not put a larger breaker in. The rating plate is what the manual says the unit was wired to.

Technician steps on L8: correct the low line voltage and contact the local utility if needed. If the voltage is within specification, replace the board. "Within specification" is the manual's phrase. This page does not add a numeric window for Goodman, because the L8 entry we publish does not state one. Do not paste Carrier's 180 V figure onto a Goodman data plate.

## Goodman H8, high line voltage
H8 means the supply is above the specified range. Goodman notes the unit may seem to run normally, while the compressor protector is open and the compressor and outdoor fan are off. From the house it can look like "the air conditioner died" even though the code is a high-voltage code, not a dead compressor.

Both steps are technician: check that the voltage to the system is within specification, and if it is not, check the voltage wires and involve the electric company if necessary. If the voltage is within specification, replace the board. Call a licensed HVAC technician, and the electric company if they confirm the supply is high. There is no homeowner breaker step on H8 the way there is on L8. A breaker does not protect you from voltage that is too high.

## Goodman E5, the low-voltage fuse
E5 is not line voltage. It is the low-voltage fuse on the control, the fuse in the 24-volt circuit that runs the thermostat and the contactor coil. Causes: a blown fuse, and a short in the low-voltage wiring.

Both steps are technician: check the fuse for continuity and replace it if it is open, then check the low-voltage wiring for a short and correct it. If there is no short, replace the board. A fuse opens for a reason. Putting a new fuse in a shorted thermostat wire blows the new fuse, which is why the manual pairs the two steps. The code page says a blown fuse usually means a short somewhere in the low-voltage wiring.

Homeowners sometimes swap this fuse because it looks like the fuse in a furnace board. The Goodman AC page does not list that as a homeowner step. The furnace pages that do mention a 3-amp or 5-amp fuse are a different appliance. Do not move a furnace fuse procedure onto this outdoor control.

[Goodman EE](/ac/goodman/ee/) is the neighboring "the board is wrong" code: welded compressor relay contacts. There is no reset that separates welded contacts. That is a technician diagnosis. If the display says EE, call. Do not confuse it with E5.

## A non-contact tester is only a dead-or-live check
The shop button on this page searches Amazon for a non-contact voltage tester. The [voltage tester](/parts/voltage-tester/) page describes what that tool does: it signals when it is near live AC. It does not display a voltage number, so it cannot confirm Carrier's approximately 180 V, and it cannot tell H8 from L8. The legitimate use while you are standing at an outdoor unit is to confirm that a disconnect you switched off is actually off before you look past the cover, and to re-check before you touch anything. Test the tester on a known live outlet first, or it will tell you a live cabinet is safe.

A multimeter that can read line voltage is a different tool, and using it inside a disconnect is the technician work the manuals already assigned. The [multimeter](/parts/multimeter/) page is the general note. This guide does not walk through probe placement on L1 and L2.

## Furnaces have voltage codes too
They are not these codes, and the thresholds are not interchangeable.

- [Lennox alternating fast flash](/lennox/alternating-fast-flash/) means improper main ground, or line voltage below 90 volts. The control will not respond to a heat call until voltage rises above 95 volts. Those numbers are in the Lennox furnace manual summary, not in the Carrier 46 table.
- [Carrier furnace rapid flashing](/carrier/rapid-flashing/) means line-voltage polarity is reversed, or, if the furnaces are twinned, the 24 V transformer phasing. Polarity is not a brownout.
- [Goodman furnace EEA](/goodman/eea/) is reversed polarity of 115-volt AC, or a poor unit ground.
- [Samsung washer 9C1](/washers/samsung/9c1/) is that washer's power-supply error: an irregularity in the electrical current reaching the washer. It has nothing to do with an outdoor heat pump.

If the code is on a furnace board, use the furnace page. The pressure and limit codes that people reset alongside a voltage code are covered in the [furnace blinking](/guides/why-is-my-furnace-blinking/) and [reset](/guides/how-to-reset-a-furnace/) guides.

## When the utility is the right call
Call the power provider when a qualified person has measured supply voltage that stays low, which is the Carrier 46 instruction, or high, which is the Goodman H8 instruction, or when Goodman L8's technician steps say the supply itself is low. Call them without a measurement if the whole house is dim, neighbors are affected, or a storm damaged the service. An air conditioner that only misbehaves when it starts, with the rest of the house normal, is more often a connection, a breaker or a failing compressor, which is the HVAC technician.

Do not open the utility meter. Do not re-wire the disconnect to a different breaker to "borrow" capacity. The rating plate is the wiring the Goodman manual tells the technician to verify.

> **Safety first:** Outdoor units are line voltage with the thermostat off. Disconnect and breaker both off before any panel comes open. A breaker that trips again stays off. Capacitors hold a charge. Refrigerant and inverter replacement are licensed HVAC work. If you only remember one check, it is the breaker handle on Goodman L8, and then the phone.
