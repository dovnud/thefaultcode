// Code-specific notes for pages that otherwise share one manual, one safety paragraph,
// and one display-pattern suffix. Every sentence restates a fact already on that code
// or in the guide that cites it. No new causes, voltages, or part numbers.

export const CODE_NOTES: Record<string, string> = {
  'ac/carrier/25':
`Carrier 25 is an invalid model plug. It is not a pressure code and not a voltage code. The amber status LED flashes 2 short and then 5 long. The control does not accept the model plug fitted to this inverter. Listed causes are a missing plug, the wrong plug, a damaged plug, a plug that is not fully seated, a plug that does not match the inverter size (the manual's example is a 2 ton plug on a 3 ton inverter), and a damaged AOC control. Both steps are for a technician: confirm the plug and its resistance against the wiring diagram, seat it to the silkscreen, and replace the plug, the inverter, or the AOC if that part is damaged. Code 25 has no coil check and no filter check.`,

  'ac/carrier/31':
`Carrier 31 means the high pressure switch opened. It is the warning, not the 4-hour lockout. Count 3 short flashes and 1 long flash. Each time the switch opens, the unit steps down a stage. Reset time is 6 minutes. If the switch opens again when the stage can no longer be lowered, the control elevates to fault 84. The manual points 31 at the fault 84 cause list: high outdoor or indoor load or an airflow problem, overcharge, a closed service valve, a restriction in the filter drier or expansion device, a loose or disconnected pressure switch, and a faulty pressure switch. The homeowner line for 31 is the outdoor coil: look for ice or debris, and clean or de-ice it with the power off. Troubleshooting the outdoor fan motor, the charge, the valves, the filter drier, and the switch harness is technician work. Code 31 does not use code 32's cooling-mode indoor-coil check.`,

  'ac/carrier/32':
`Carrier 32 is a low pressure trip, not the high-pressure switch (31) and not the 4-hour lockout (83). Count 3 short flashes and 2 long flashes. Reset time is 6 minutes. After 3 trips the control elevates to fault 83. The manual points 32 at the fault 83 cause list: a closed service valve, an undercharged system, low indoor airflow in cooling or low outdoor airflow in heating, an EXV or TXV problem, and a restriction in the filter drier or the circuits. In cooling, the homeowner check is the indoor coil for ice or debris. The outdoor coil is the second check, including in heating. Fan-motor diagnosis, charge, service valves, and the expansion device stay with a technician.`,

  'ac/carrier/46':
`Carrier 46 is a brownout: low line voltage reaching the unit. The LED flashes 4 short and 6 long. Reset time is 6 minutes. Causes are low line voltage, a bad connection on L1 and L2, and the inverter not reading voltage properly. Both steps are technician steps. The manual says to check for line voltage of more than approximately 180 V, and to contact the power provider if the reading stays under that and persists. Then check the connections on the line side and the load side. If nothing else is found, replace the inverter. Code 46 does not use the coil checks from 31 or 32, and it is not a homeowner meter job.`,

  'ac/carrier/48':
`Carrier 48 means the outdoor control (AOC) and the inverter (MOC) have stopped communicating. The LED flashes 4 short and 8 long. Fault 33 is the earlier local version: the manual logs 33 after 2 minutes with no communication, and elevates that to 48 after 3 consecutive failures within 20 minutes, or after 20 minutes of continuous loss. A 33 pattern is 3 short and 3 long. Causes are a loose or disconnected harness between AOC plug PL20 and the MOC, radio or electrical noise, and possible inverter damage. For noise, the manual says the system will try to self-mitigate with repeated start attempts. A technician checks the harness, then the inverter board: a steady green LD5 means the 5 volt link between AOC and MOC is intact, and a blinking amber LED3 means the MOC is communicating to the AOC. If the harness is good, the manual's action for possible inverter damage is to change the inverter drive. That work is inside a cabinet that carries line voltage.`,

  'ac/carrier/83':
`Carrier 83 is a low-pressure lockout for 4 hours, elevated from fault 32 after 3 occurrences. The LED flashes 8 short and 3 long. The 6-minute trip is code 32. The high-pressure lockout is code 84 (8 short and 4 long). Causes listed for 83 are a service valve left closed, an undercharged system, low indoor airflow in cooling or low outdoor airflow in heating, an EXV or TXV malfunction, reversing valve bypass, a restriction in the filter drier, expansion device, circuits or tubing, and an uninsulated vapor line in cooling. In cooling, check the indoor coil for ice or debris, and check the outdoor coil as well. Opening service valves, reading the charge, and troubleshooting the EXV, TXV, or reversing valve are technician steps.`,

  'ac/carrier/84':
`Carrier 84 is a high-pressure lockout for 4 hours, elevated from fault 31 when the stage can no longer be lowered. The LED flashes 8 short and 4 long. Causes listed for 84, beyond the shorter list code 31 points at, include low indoor airflow in heating, an overcharged system, a reversing valve stuck in cooling during a heating call, a service valve left closed, a loose or disconnected high-pressure-switch harness, a restricted filter drier or expansion device, non-condensables, a faulty pressure switch, and a sudden supply-voltage change. In heating, the homeowner check is the indoor coil and the filter. Also check the outdoor coil for ice or debris. Charge, valves, the harness, the filter drier, and the expansion device are technician work. The 4-hour lockout is the control stopping the retries that code 31 was still allowing.`,

  'ac/goodman/01-l1':
`Goodman 01, also shown as L1, is a low-pressure cutout. The low pressure switch tripped 3 times during the same thermostat call, so the compressor and the outdoor fan are off. The outdoor display reads 01 or L1. Causes are an open low pressure switch, low refrigerant charge or a restriction, low indoor airflow, the thermostat setting, and a supply-voltage problem. The homeowner step is the thermostat setting and anything restricting indoor airflow. The manual says to verify indoor airflow, charge, and the thermostat setting. Charge is the technician half of that sentence. Technician steps are to read the switch resistance, read pressure on a gauge, and replace the switch only if the pressure is not low. If the pressure is low, verify airflow and charge, and check the voltage wires, involving the electric company if needed. This is not the high-side fault 02 / L2.`,

  'ac/goodman/02-l2':
`Goodman 02, also shown as L2, is a high-side fault. The manual defines it as four consecutive compressor protector trips with an average run time of more than 1 minute and less than 15 minutes, while both pressure switches stay closed. The display reads 02 or L2. Causes are high pressure on the system, a dirty condenser coil or a failed outdoor fan motor, and a failed capacitor or a wiring fault. Every step is marked for a technician: check the high pressure switch and cycle power if it is open, replace the switch if pressure is not high, and if pressure is high, check and clean the condenser coil and check the outdoor fan, the capacitor, and the wiring. The published warning is that those repeated protector trips can damage the compressor. Code 02 is not the low-pressure cutout 01 / L1, and it does not list a thermostat-setting step.`,

  'ac/goodman/03':
`Goodman 03 is short cycling: the outdoor unit is turning on and off too quickly. It is the next code after 01 and 02 on the same display, and it is not a pressure fault. Causes are an intermittent thermostat or thermostat wiring problem, a compressor relay or control board problem, loose low-voltage connections, and a main power or ground problem. Both steps are for a technician. Verify low voltage between R and Y. If it moves between 24 V and 0, check the thermostat and the wiring. If the system will not stay running, check the low-voltage connections and the compressor relay, replace the control if needed, and check main power and ground. Measuring R and Y means opening a cabinet that also holds line voltage, so it is not a homeowner check.`,

  'ac/goodman/04':
`Goodman 04 is a locked rotor: the compressor is not turning properly. It is not short cycling (03) and it is not a pressure-switch code. Causes are a compressor failure or a bearing problem, a failed run capacitor, and low line voltage or a wiring problem. Both steps are for a technician: confirm that high voltage to the system is within specification, check the run capacitor and replace it if it is bad, check the wiring, and check compressor operation. The page's advice is to stop resetting the breaker, because a locked rotor stresses the compressor. Code 04 has no coil-cleaning step.`,

  'ac/goodman/d2':
`Goodman d2 flashes for a system mismatch. The outdoor and indoor units are not an acceptable combination, or the airflow trim is set to a prohibited value. Causes are a pair that is not certified, required airflow (CFM) above the indoor unit's maximum, and an indoor unit that is not an EEV type. Both steps belong to a technician or the installer: check the pair on the AHRI site and replace it with a certified combination if it is not one, and confirm the airflow trim was not set to a prohibited value. Code d2 has no filter step and no pressure-switch step.`,

  'ac/goodman/e5':
`Goodman E5 is an open fuse. The low-voltage fuse on the control is blown. It is not line voltage, so it is not H8 and not L8. Causes are the blown fuse itself and a short in the low-voltage wiring. Both steps are technician steps: check the fuse for continuity and replace it if it is open, then find the short and correct it. If there is no short, replace the board. A fuse opens for a reason, and a new fuse on a shorted low-voltage wire opens again, which is why the manual pairs those two steps. The code page notes that a blown fuse usually means a short somewhere in the low-voltage wiring.`,

  'ac/goodman/ee':
`Goodman EE is board misoperation. The manual names welded compressor relay contacts as the error condition, and the display reads EE. Causes are those welded contacts and wires landed on the wrong terminals. Both steps are technician steps: check that every wire is on the correct terminal, and if one is not, turn the power off, move it, and power the system back on. If the wiring is already correct, replace the board. Code EE is control-board and wiring diagnosis. It is not a charge check and not a line-voltage reading.`,

  'ac/goodman/h8':
`Goodman H8 is high line voltage. The unit may seem to run normally, while the compressor protector may be open, leaving the compressor and the outdoor fan off. The only listed cause is supply voltage above the specified range. This entry does not state a voltage number, so Carrier's approximately 180 V figure from code 46 does not belong on H8. Both steps are technician steps: check that voltage at the system is within specification, and if it is not, check the voltage wires and involve the electric company. If the voltage is already within specification, replace the board. H8 does not include L8's breaker check.`,

  'ac/goodman/l8':
`Goodman L8 is low line voltage: supply to the outdoor unit is below the specified range. Like H8, the entry does not state a voltage number. Causes are low supply voltage, a tripped breaker or a blown fuse, and a unit that is not wired the way the rating plate specifies. The homeowner check is the breaker handle at the outdoor disconnect and at the main panel. The manual says to check breakers and fuses and to confirm the unit is connected as the rating plate shows. Correcting the low voltage, contacting the utility, and replacing the board when voltage is already within specification are technician steps. L8 is the voltage code in this set with that breaker check. H8 does not have it, and Carrier 46's meter step is a different manual.`,

  'furnaces/carrier/13':
`Carrier furnace 13 is the limit-circuit lockout, not the open-switch fault. The LED flashes 1 short and 3 long. A limit or flame rollout switch stayed open longer than 3 minutes, and the control auto-resets after 3 hours. Code 33 is the fault while that switch is still open; 13 is what the board stores once the 3 minutes have passed. The homeowner checks published for 13 are a dirty filter, with the power off, and return and supply grilles that are open. The technician line is vent sizing and restrictions, the blower wheel, the blower motor or capacitor, and the switches. A flame rollout switch is reset by hand only after the cause is found. Code 13's cause list does not include the improper gas-input item that code 33 names.`,

  'furnaces/carrier/33':
`Carrier furnace 33 is the limit-circuit fault while a limit or flame rollout switch is open. The LED flashes 3 short and 3 long. If that switch stays open longer than 3 minutes, the board stores lockout 13. Code 33 is the earlier state; it is not the 3-hour lockout. Causes include a dirty filter or restricted ducts, a restricted or wrongly sized vent, a loose blower wheel, a defective blower motor or capacitor, a defective switch or its connections, improper gas input adjustment, inadequate combustion air when the rollout switch is open, and excessive wind. The gas-input item is on 33 and is not on the 13 list. Homeowner checks are the filter, with power off, and open return and supply grilles. A technician checks the blower, venting, gas input, and switches. The rollout switch is reset by hand only after the cause is corrected. Call if 33 returns after a filter change, or if the rollout switch tripped.`,

  'furnaces/carrier/14':
`Carrier furnace 14 is the ignition lockout. The LED flashes 1 short and 4 long. The furnace failed to ignite gas and prove flame in 4 attempts, and the control auto-resets after 3 hours. Code 34 is the proving failure during the trials; 14 is the lockout after those attempts are used up. The homeowner check on 14 is the manual gas shut-off valve and the gas valve control switch set to ON. Technician checks are a flame sensor cleaned with fine steel wool, flame current of 0.5 microamp DC minimum with 4.0 to 6.0 nominal, inlet gas pressure, the igniter, and the ground. The green/yellow ground wire must be connected to the furnace sheet metal. Call if the gas is on and the furnace still does not light.`,

  'furnaces/carrier/34':
`Carrier furnace 34 is an ignition proving failure: flame was not sensed during the trial for ignition. The LED flashes 3 short and 4 long. The control tries 3 more times, then stores lockout 14. Code 34 is those trials; it is not the 3-hour lockout. Causes are oxide on the flame sensor, a gas valve that is defective or off or a closed manual shut-off, low inlet gas pressure, weak flame carryover or rough ignition, a defective hot surface igniter, a ground-continuity problem, and a grounded flame sensor. The homeowner check is that the manual shut-off is open and the gas valve is ON. A technician cleans the flame sensor with fine steel wool, reads flame current (0.5 microamp DC minimum, 4.0 to 6.0 nominal), and checks the igniter, gas pressure, and ground. The green/yellow wire must land on the furnace sheet metal. Call if the gas is on and 34 stays.`,

  'furnaces/carrier/21':
`Carrier furnace 21 is a gas-heating lockout that will not auto-reset. The LED flashes 2 short and 1 long. Causes are a mis-wired gas valve, a gas-valve relay on the control that is stuck closed (a defective control), and a short to the gas valve wire. The only homeowner step published is to turn off power and wait 5 minutes, then retry. If it returns, the wiring and the control's valve relay are technician work. Code 21 is not code 22. Code 22 is flame proved while the gas valve is off. Code 21 is the valve circuit itself, and it does not clear on its own.`,

  'furnaces/carrier/22':
`Carrier furnace 22 is an abnormal flame-proving signal: flame is proved while the gas valve is de-energized. The LED flashes 2 short and 2 long. The inducer keeps running until the fault clears. Causes are a leaky gas valve and a gas valve stuck open. The only published step is for a technician: inspect the gas valve and replace it as needed. There is no filter check and no 5-minute retry on 22. That retry belongs to code 21, the gas-heating lockout that does not auto-reset. Code 22 is a gas-valve safety fault and the page says to call immediately.`,

  'furnaces/carrier/23':
`Carrier furnace 23 means the pressure switch did not open. The LED flashes 2 short and 3 long. Causes are obstructed pressure tubing and a pressure switch stuck closed. Both steps are for a technician: check the tubing for an obstruction, then check the switch and replace it if it is stuck closed. Code 23 is not the open 24-volt fuse (code 24, which is 2 short and 4 long). Nothing on 23 asks a homeowner to pull a thermostat wire or change a fuse.`,

  'furnaces/carrier/24':
`Carrier furnace 24 means the secondary voltage fuse, the 24 V fuse, is open. The LED flashes 2 short and 4 long. The listed cause is a short in the secondary wiring, including the thermostat leads. Both steps are for a technician: disconnect the thermostat leads to isolate the short, then repair the short and replace the fuse. Call if the fuse blows again, because the short is still there. Code 24 is not the pressure switch that failed to open (code 23). There is no tubing check on 24.`,

  'dishwashers/bosch/e16-e17':
`Bosch E16 and E17 are a water inflow problem: water may not be able to enter the dishwasher or the filling system. The only cause Bosch lists here is a kinked or damaged inlet hose, and the only check is to look at that hose. E16 / E17 does not add the water-supply-off step. That step, including Bosch's 10 l/min flow figure, is on E18. If the hose is undamaged and the code remains, the page says to contact Bosch Customer Support.`,

  'dishwashers/bosch/e18':
`Bosch E18 is a water flow problem: the water level is too low, or water is not being pumped correctly. It is not the inflow-only pair E16 / E17. E18 has two checks. First, the inlet hose must not be kinked or damaged, which is the same hose look E16 / E17 stops at. Second, the water supply has to be turned on. Bosch states the required flow as 10 l/min. That flow number is not on the E16 / E17 page. If E18 remains after both checks, contact Bosch Customer Support.`,

  'dishwashers/bosch/e22':
`Bosch E22 is a blocked filter. Food particles have clogged the filter, and Bosch says the filter needs cleaning regularly. The checks are to remove the filter, wash it under running water with mild soap and a soft brush, and reinstall it using the owner's manual. E22 does not ask you to open the drain pump. The pump cover under the filter is the E25 job: a blocked drain pump, or a cover that is loose or missing. If E22 comes back after the filter is clean, use Bosch's E22 guide or contact Bosch Customer Support.`,

  'dishwashers/bosch/e25':
`Bosch E25 is a drain pump that is blocked, or a drain pump cover that is loose or missing. It is not the filter-clog code E22. The filter still comes out, but only so you can see the pump cover underneath it. Check that the cover is not loose. To clear a blockage, pry the cover off with a spoon until it clicks, grip it, pull upward until you feel resistance, then pull forward to remove it. Take debris and standing water out with a sponge. Some debris is sharp. If E25 remains, use the owner's manual or contact Bosch Customer Support.`,

  'furnaces/york/1-red-flash':
`York TG9S 1 red flash means flame was sensed with no call for heat. The control runs the inducer and the supply blower. The only check in that paragraph is a leaking or slow-closing gas valve. It is not 7 red flashes, which is three failed ignition trials, and it is not 10 red flashes, which is the gas valve energized with no call for heat. If you smell gas, leave. Do not reset this to see if the smell goes away.`,

  'furnaces/york/2-red-flashes':
`York TG9S 2 red flashes means the pressure switch is already closed when the heat cycle starts. The control will not continue ignition. The manual names a faulty pressure switch or miswiring, and it says never to adjust a pressure switch so the furnace will run. Blocked vent and a broken hose are the 3 red flash list, not this one.`,

  'furnaces/york/3-red-flashes':
`York TG9S 3 red flashes means the pressure switch stayed open when it should have closed. The manual lists a faulty inducer, a blocked vent pipe, a broken pressure switch hose, disconnected pressure switch or inducer wires, and a faulty pressure switch. The outdoor pipe is the homeowner look. The hose, wires, inducer and switch are technician checks. Six red flashes is the same switch opening four times during a running cycle, then a one-hour lockout.`,

  'furnaces/york/4-red-flashes':
`York TG9S 4 red flashes means the main limit opened. The blower and inducer keep running while it is open. The manual lists a dirty filter, duct size, blower speed, firing rate, loose limit wiring and a faulty blower motor. If the limit is still open after five minutes, the control goes to a hard lockout and 11 red flashes. Five openings in one call for heat stay on 4 red flashes and add a one-hour soft lockout. Change a dirty filter with the power off. Call if it returns.`,

  'furnaces/york/5-red-flashes':
`York TG9S 5 red flashes means the rollout switch opened. It is a manual-reset switch and a hard lockout. The manual says to check combustion air, inducer operation, and the primary heat exchanger or burners, then cycle power only after that problem is corrected. Do not reset the switch to get through the night. Four red flashes is the main limit, which can be a dirty filter. Five red flashes is not that filter step.`,

  'furnaces/york/6-red-flashes':
`York TG9S 6 red flashes means the pressure switch opened four times during one call for heat. The furnace locks out for an hour and then tries again. Causes in the manual are a faulty inducer, a blocked vent pipe, or a faulty pressure switch. Three red flashes is the switch that never closed at the start. Six is the switch that opened again and again while the furnace was already running.`,

  'furnaces/york/7-red-flashes':
`York TG9S 7 red flashes means flame was not established in three ignition trials. The lockout lasts one hour, then the control tries again. The manual says to check that the gas valve switch is ON, then low or no gas pressure, a faulty gas valve, a dirty or faulty flame sensor, a faulty hot surface ignitor, loose wires, or a burner problem. The gas-valve switch and whether other gas appliances light are the homeowner checks. Eight red flashes is flame that was established and then lost five times.`,

  'furnaces/york/8-red-flashes':
`York TG9S 8 red flashes means the flame was lost five times, which the manual also calls four recycles, during the heating cycle. Then a one-hour lockout. The checks are low gas pressure, a dirty or faulty flame sensor, and a faulty gas valve. Seven red flashes is the code for flame that never established. Continuous amber is the low-current warning, below 1.5 microamps, while the furnace may still run.`,

  'furnaces/york/9-red-flashes':
`York TG9S 9 red flashes is reversed line polarity, a grounding problem, or reversed low-voltage transformer wires. Heating and cooling both stop starting the ignition sequence until it is fixed. The manual also says to check that the flame probe is not shorted to the chassis. There is no filter step and no vent-pipe step on this code.`,

  'furnaces/york/10-red-flashes':
`York TG9S 10 red flashes means the gas valve is energized when there is no call for heat. The main blower and the inducer run, and ignition does not start, until the condition clears. The manual says to check the gas valve and its wiring. One red flash is flame sensed with no call, which can be a valve that leaks or closes slowly. Ten red flashes is the valve being powered. If you smell gas, leave.`,

  'furnaces/york/11-red-flashes':
`York TG9S 11 red flashes means the main limit stayed open more than five minutes. The manual says that is usually a failed blower motor or blower wheel, and it is a hard lockout. Power is cycled only after the blower problem is corrected. It is the next step after 4 red flashes when the limit does not reclose. The dirty-filter check is on 4 red flashes, not on this hard lockout.`,

  'furnaces/york/continuous-amber':
`A continuous amber flash on a York TG9S, with no long pause, means flame current is under 1.5 microamps. The same page lists normal current at about 3.7 microamps, the warning at 1.5, and lockout at 0.1. The checks are to clean the flame sensor, check gas flow, and read the current at the flame test pad. That reading is a technician measurement. It is not a counted red code.`,

  'furnaces/american-standard/e2-1':
`American Standard S9V2 E2.1 is retry exceeded: flame was never sensed, then a one-hour lockout after three times. The same installer's guide says ignitor warm-up is about 20 seconds and flame has to be sensed within 4 seconds. E2.2 is the other lockout, flame sensed and then lost, after 10 recycles. This guide does not list a filter check for E2.1.`,

  'furnaces/american-standard/e2-2':
`American Standard S9V2 E2.2 is recycles exceeded. Flame was sensed, then lost, and the control locks out for one hour after 10 times. E2.1 is flame that was never sensed, after 3 times. The sequence in this guide measures flame current on the FP pads, typically 0.75 to 3.0 microamps. That measurement is technician work.`,

  'furnaces/american-standard/e2-3':
`American Standard S9V2 E2.3 means the 1st stage gas valve was not energized when the control expected it, and that happened until the count passed 10. It is not E7.1, which is the same valve energized when it should be off. Do not jumper the valve. The heating sequence closes the valve relay only after ignitor warm-up. This installer's guide does not name a replacement part. The Trane Service Facts flowchart for the same alarm says 24 VAC was not sensed on MVL and the step is to replace the integrated furnace control. That part is not copied onto this page as if this guide said it.`,

  'furnaces/trane/e2-3':
`Trane S9V2 E2.3 means the 1st stage gas valve was not energized when it should have been, 10 times in the same call for heat. The Service Facts flowchart says 24 VAC was not sensed on MVL those 10 times, and the step is to replace the integrated furnace control. It does not say to replace the gas valve. The American Standard installer's guide states the same alarm and does not name that part. E2.3 is not retry lockout E2.1.`,

  'furnaces/american-standard/e3-1':
`American Standard S9V2 E3.1 is a shorted 1st stage pressure switch. The sequence proves both pressure switches open before the inducer starts, so a switch that is already closed or shorted fails that test. E3.2 is the 1st stage switch that stays open. E3.3 would be the shorted 2nd stage switch. Do not jumper either switch.`,

  'furnaces/american-standard/e3-2':
`American Standard S9V2 E3.2 is an open 1st stage pressure switch. In the heating sequence the inducer starts and pressure switch 1 is supposed to close. The guide also says that if a thermal limit is open, 24 volts will not be present at either pressure switch, and that pressure-switch tubing has to rise so flue condensate does not run into the switch. E3.4 is the open 2nd stage switch, and low stage can still run on that one.`,

  'furnaces/american-standard/e3-4':
`American Standard S9V2 E3.4 is an open 2nd stage pressure switch. The sequence gives PS2 45 seconds to close. If it does not, the furnace records the open switch and stays in 1st stage. On the third miss in the same heat call, 2nd stage locks out until the thermostat call ends or power is cycled. The house can still have low-stage heat. E3.2 is the 1st stage switch, which stops ignition.`,

  'furnaces/american-standard/e04':
`American Standard S9V2 E04 is an open limit. The guide names three switches: the main thermal limit, a rollout switch, or the reverse airflow switch. It does not add a filter sentence on this row. The sequence proves all three closed before the inducer starts. If the burners show scorching, treat it as rollout: furnace off, and a technician finds the cause before any manual reset.`,

  'furnaces/american-standard/e05':
`American Standard S9V2 E05 means flame was detected when it should not be present. E08 is different: flame current is low but the furnace is still allowed to run. E7.1 is the 1st stage gas valve energized when it should be off. If E05 is on the display and you smell gas, leave. Do not keep resetting it.`,

  'furnaces/american-standard/e6-3':
`American Standard S9V2 E6.3 is an igniter fault. The guide lists two conditions: the igniter relay fails, or the igniter is open. The heating sequence turns the ignitor on for about 20 seconds after 1st stage pressure switch 1 closes. E2.1 is the lockout after flame is never sensed, which can follow an igniter that never got hot. The igniter check itself is technician work.`,

  'furnaces/american-standard/e08':
`American Standard S9V2 E08 means flame current is low and the furnace is still allowed to run. The sequence gives a typical range of 0.75 to 3.0 microamps, read as DC volts on the FP pads. E2.2 is what happens later if flame is sensed and then lost often enough to lock out. Measuring the current is a technician step.`,

  'furnaces/american-standard/e09':
`American Standard S9V2 E09 is an open inducer limit switch or an open condensate pressure switch. The heating sequence will not start the inducer until both are proved closed, so the burners never reach ignition. It is not E3.2, the 1st stage pressure switch that proves inducer draft. A frozen condensate line belongs in this technician check, not in a jumper.`,

  'furnaces/american-standard/e7-1':
`American Standard S9V2 E7.1 means the 1st stage gas valve, marked MVL, is energized when it should be off. E2.3 is the opposite problem: the valve was not energized when it should have been. If you smell gas with E7.1 on the display, leave and call the gas supplier from outside.`,

  'furnaces/american-standard/e12':
`American Standard S9V2 E12 means the fuse is open. The control drawing in this installer's guide labels that fuse as 5 amp. The alarm line does not add a thermostat-wiring procedure. Do not fit a larger fuse. A technician has to find why it opened. This is not E6.1, reversed polarity, which is a different alarm on the same table.`,

  'furnaces/amana/ee0':
`Amana EE0 on the *CVC96 / *MVC96 chart in IOG-2015L is a lockout after 3 ignition retries. Flame was never established, or it was lost after it was established. The chart says to correct a gas interruption, then a technician checks the front cover pressure switch and drainage, the igniter, the flame sensor, the flue, and the induced draft blower. The manual also says the control can try again after one hour, and will return to lockout if the cause is still there. This is the two-stage family, including Amana AMVC96 and ACVC96. It is a different document from the Goodman GR9S96 single-stage guide.`,

  'furnaces/amana/ee2':
`Amana EE2 means the low-stage pressure switch circuit is not closed. The induced draft blower runs and the furnace does not light. The chart lists a blocked, pinched, or badly connected pressure switch hose, a blocked flue or inlet, a blocked drain, a weak inducer, a bad switch, and loose wiring. The outdoor pipes are the homeowner look. EE9 is the high-stage switch that will not close; low stage can still run on EE9. EE2 stops the heating cycle.`,

  'furnaces/amana/ee3':
`Amana EE3 means the primary limit is open. The circulator runs continuously and there is no heat. The chart names blocked filters, restrictive ducts, blower speed or a failed blower motor, and loose high-limit wiring. Check the filter with the power off. EEd is the auxiliary limit in the blower compartment, a different switch with its own filter sentence. EE3 is the primary limit.`,

  'furnaces/amana/ee4':
`Amana EE4 means flame was sensed when heat was not called. The induced draft blower and the circulator both keep running. The chart lists a short in the flame sense circuit, a lingering burner flame, and a slow-closing gas valve. If you smell gas, leave. This is not EE6, which is a low flame signal while the furnace is otherwise operating normally.`,

  'furnaces/amana/ee5':
`Amana EE5 is an open fuse, and the furnace does not run. The chart pairs that with a short in the low-voltage wiring. Replace the fuse only after the short is found, which is technician work. A larger fuse is not the fix. EE0 lockout still shows a code and has tried to light. EE5 does not get that far.`,

  'furnaces/amana/ee6':
`Amana EE6 is a low flame-sense signal while the furnace can still be operating normally. The chart says the flame sensor may be coated or oxidized, or sitting wrong in the flame, or the flame is lazy because of gas pressure or combustion air. Cleaning and the gas-pressure comparison to the rating plate are technician steps. EE0 is the lockout after the signal fails often enough.`,

  'furnaces/amana/ee7':
`Amana EE7 is an igniter circuit fault and the furnace does not operate. The chart lists the igniter circuit, a misconnected or shorted igniter, poor ground, and an igniter relay fault on the integrated control module. The technician checks are the wiring to the igniter, the ground, and igniter output from the control. EE0 can be what you see later if ignition never happens. EE7 names the igniter circuit itself.`,

  'furnaces/amana/ee8':
`Amana EE8 means the high-stage pressure switch is closed at the start of the cycle. High stage will not run. Low stage can. The induced draft blower is on. The chart says the contacts may be sticking or the switch wiring is shorted. EE9 is the high-stage switch that will not close. EE2 is the low-stage switch that will not close, and that one stops heat.`,

  'furnaces/amana/ee9':
`Amana EE9 means the high-stage pressure switch did not close. The furnace can still run on low stage, with the induced draft blower operating. The chart says to inspect the pressure switch hose, the flue and inlet piping, the drain, inducer performance, and the wiring. Look at the outdoor terminations. EE2 is the low-stage version of an open switch and does not leave you with low-stage heat.`,

  'furnaces/amana/eed':
`Amana EEd is the auxiliary limit in the blower compartment. The furnace does not operate. The chart says to check filters and ductwork, blower speed or a failed blower motor, and the wiring. The filter is the homeowner step, with power off. EE3 is the primary limit, also with a filter step, and on EE3 the circulator is described as running continuously. EEd is the blower-compartment switch.`,

  'furnaces/amana/eef':
`Amana EEF is the condensate auxiliary limit, the condensate switch, open. The chart's corrective action is to check the evaporator drain pan, trap, and piping. That is technician work. Do not bypass the switch. EEd is the blower-compartment auxiliary limit and has the filter step. EEF does not.`,

  'furnaces/bryant/13':
`Bryant 926TB code 13 is the limit-circuit lockout. Count 1 short flash and 3 long flashes. The troubleshooting guide says the limit or the flame rollout switch was open longer than 3 minutes, or high heat had 10 limit trips in a row. The control auto-resets after 3 hours and says to see code 33 for the fault itself. This page does not invent a code 33 cause list. If rollout opened, leave the furnace off.`,

  'furnaces/bryant/14':
`Bryant 926TB code 14 is ignition lockout. Count 1 short flash and 4 long flashes. The guide says the furnace failed to ignite gas and prove flame in 4 attempts, then auto-resets after 3 hours, and says to see code 34. The sequence in the same manual warms the hot-surface igniter for 17 seconds and then allows a 2-second proving window. It also says the control must be grounded or it will lock out. Resetting the 3-hour timer is not a repair.`,

  'ac/carrier/33':
`Carrier 33 on the Infinity 25VNA8 / 24VNA9 is lost inverter communication, the local fault. Count 3 short flashes and 3 long flashes. It is logged after 2 minutes with no talk between the outdoor control and the inverter, and it becomes fault 48 after 3 failures in 20 minutes or after 20 minutes continuous. The manual says to use the fault 48 checks: the harness between AOC plug PL20 and the MOC, electrical noise, and possible inverter damage. Furnace code 33 on a Carrier furnace is a limit switch. This outdoor 33 is not that.`,

  'ac/carrier/53':
`Carrier 53 is an outdoor air temperature sensor fault on the 25VNA8 / 24VNA9. Count 5 short flashes and 3 long flashes. Causes are an unplugged or damaged harness, a damaged sensor, or a damaged outdoor control. If that sensor fails, the manual says defrost is started from coil temperature and time instead. It is not a charge code. Code 55 is the coil temperature sensor.`,

  'ac/carrier/55':
`Carrier 55 is a coil temperature sensor fault. Count 5 short and 5 long. The manual wants the thermistor clipped to the distributor entry tube, the harness checked, and the outdoor control replaced only if its hardware is damaged. If this sensor fails, defrost runs every interval in heating and stops after 2 minutes. That short defrost is why a heat pump can feel like it is not heating. Code 53 is the outdoor air sensor, which fails over to a different defrost rule.`,

  'ac/carrier/56':
`Carrier 56 means the outdoor air and coil thermistors are out of range. Count 5 short and 6 long. The manual calls it an event. Causes include heating when cooling was called, a coil thermistor clipped in the wrong place, and an outdoor air sensor body touching sheet metal. One listed action is to inspect the outdoor coil for obstructions, with the power off. The reversing valve, if the unit heats in cooling, is technician work. It is not code 55's failed-sensor defrost rule.`,
  'furnaces/bryant/12':
`Bryant 12 on the TG-GFB80-02 chart is the blower running for 90 seconds after power returns, not a lockout. It flashes when the furnace is powered up during a heat call, or when the heat call opens during the blower on-delay. The amber LED goes back to continuous on after those 90 seconds if no fault is stored. It is not code 15, the blower-motor lockout, and it is not rapid flashing, which is reversed line polarity.`,

  'furnaces/bryant/15':
`Bryant 15 is the blower-motor lockout on the 80% two-stage chart, not the fault while the blower is still being watched. The blower failed to reach 250 RPM, or failed to communicate, within 30 seconds after it was turned on, and that happened on two heating cycles in a row. The control auto-resets after 3 hours and says to see code 41. Code 41 is the fault itself, including a miss during steady running. Code 12 is only the 90-second blower run after power-up.`,

  'furnaces/bryant/21':
`Bryant 21 on the 80% two-stage chart is a gas-heating lockout that will not auto-reset. The chart lists a mis-wired gas valve and a defective control valve relay. It is not code 22, which is flame proved while the gas valve is off. Code 21 does not clear on the 3-hour timer used by codes 13, 14, and 15.`,

  'furnaces/bryant/22':
`Bryant 22 means flame is proved while the gas valve is de-energized. The inducer keeps running until the fault clears. The chart lists a leaky gas valve or a gas valve stuck open. There is no filter check and no 3-hour auto-reset on this row. Code 21 is the lockout that will not auto-reset because of valve wiring or the valve relay. If you smell gas with 22 on the LED, leave.`,

  'furnaces/bryant/23':
`Bryant 23 means the pressure switch did not open. The chart lists obstructed pressure tubing and a pressure switch stuck closed. It is not code 24, the open 24 V fuse, which is 2 short and 4 long. Nothing on 23 asks you to pull a thermostat wire or change a fuse. Code 32 is the low-heat switch that did not close.`,

  'furnaces/bryant/24':
`Bryant 24 on the 80% two-stage chart means the secondary-voltage fuse is open. The only check in that row is a short in the 24 V wiring. It is not code 23, the pressure switch that did not open. The 987MA modulating chart adds thermostat leads to its own code 24. This page does not copy that sentence onto the 80% chart.`,

  'furnaces/bryant/25':
`Bryant furnace 25 is a model-selection or setup error on the 80% two-stage chart, not a pressure code. Four flashes at power-up means the model plug is missing and the control is using the model stored in memory. Continuous 25 means the plug is missing or wrong, a heat or cool call is present with SW1-1 or SW1-6 on, both of those switches are on together, or two different models are twinned. Bryant heat pump 25 is a different fault, on the outdoor amber LED.`,

  'furnaces/bryant/31':
`Bryant furnace 31 is the high-heat pressure switch or relay that did not close, or that reopened. The chart says the control relay may be defective or the gas valve may be mis-wired, and it says to see code 32. This page does not copy the code 32 vent list onto 31. Bryant outdoor code 31 is the high-pressure switch on a 288BNV or 189BNV, a different appliance.`,

  'furnaces/bryant/32':
`Bryant furnace 32 is the low-heat pressure switch that did not close or that reopened. If it stays open longer than five minutes, the inducer shuts off for 15 minutes before a retry. If it opens during the blower on-delay, the blower runs the selected off-delay. The chart lists vent sizing, a restricted vent, the inducer, 115 V to the inducer, the switch, low inlet gas pressure if an LGPS is used, wind, combustion air, and the pressure tubing. Code 23 is the switch that did not open. Code 31 is the high-heat switch.`,

  'furnaces/bryant/33':
`Bryant 33 on the 80% two-stage chart is the limit circuit fault while a limit, draft safeguard, flame rollout, or blocked-vent switch is open, or while the furnace is locked into high heat after two low-heat limit trips. The blower runs 4 minutes or until the switch remakes. Open longer than 3 minutes becomes lockout 13. The flame rollout switch needs a manual reset. A dirty filter is on this list. The 926TB install manual points its own lockout 13 at a status code 33, and that service-label figure is not copied here.`,

  'furnaces/bryant/34':
`Bryant 34 on the 80% two-stage chart is an ignition proving failure. The control tries three more times, then stores lockout 14. The chart lists low inlet gas pressure, ground continuity, a gas valve that is off or defective, a closed manual valve, oxide on the flame sensor, flame current of 0.5 microamps DC minimum with 4.0 to 6.0 nominal, the green/yellow wire on the furnace sheet metal, poor flame carryover, and a grounded flame sensor. It does not list a hot-surface igniter. Bryant 14 already on this site is the 926TB lockout, which also says to see code 34.`,

  'furnaces/bryant/41':
`Bryant 41 is the blower motor fault, not the lockout. The blower failed to reach 250 RPM or failed to communicate within 30 seconds after being turned on, or within 10 seconds during steady running. Lockout 15 is what the chart stores after that miss happens on two heating cycles in a row, and 15 says to see 41. The component-test row for 41 says to check the blower, the wiring, and the furnace control.`,

  'furnaces/bryant/43':
`Bryant 43 means the low-heat pressure switch is open while the high-heat pressure switch is closed. The chart lists disconnected or obstructed pressure tubing, low inlet gas pressure if an LGPS is used, mis-wired pressure switches, and a low-heat switch stuck open. It is not code 32, which is the low-heat switch that did not close on its own, and it is not code 23, which is a switch that did not open.`,

  'furnaces/bryant/45':
`Bryant 45 is a control-circuitry lockout with a 1-hour auto-reset. The chart names a flame-sense circuit failure, a gas-valve relay stuck open, or a software check error. Reset power to clear it. Replace the control if 45 repeats. It is not ignition lockout 14, which is a 3-hour reset after four failed proving attempts.`,

  'furnaces/bryant/rapid-flashing':
`Rapid flashing on this Bryant chart is the amber LED blinking with no pause. The status table calls it reversed 115 V polarity. The rapid-flashing section adds a second case: transformers out of phase when two furnaces are twinned. A counted code, short flashes then long flashes, is not this pattern. Continuous on means the control has 24 V. Continuous off means check 115 V at L1 and L2 and 24 V at SEC-1 and SEC-2.`,

  'furnaces/bryant/35':
`Bryant 35 is a gas-valve fault on the 987MA Series A modulating chart only. The modulating valve did not answer a command from the furnace control, or power to the valve electronics was interrupted. The check is an intermittent red, yellow, or orange wire at the gas valve or at PL8. The 80% two-stage chart used for the other Bryant furnace pages has no code 35. Code 22 on that other chart is flame proved while the valve is off.`,

  'furnaces/bryant/42':
`Bryant 42 is an inducer motor fault on the 987MA Series A modulating chart. The inducer did not start within 20 seconds after a call for heat, the RPM is outside its valid range, or the RPM signal was lost for 5 seconds while running. The chart lists vent sizing, a restricted vent, and a failed inducer. The 80% two-stage chart has no code 42. Code 41 on that chart is the blower, not the inducer.`,

  'ac/bryant/25':
`Bryant outdoor 25 is an invalid model plug or inverter size on the 288BNV / 189BNV. It is not a pressure code. Causes in Table 6 are a missing plug, the wrong plug, a damaged plug, a plug that is not fully seated, a plug that does not match the inverter size, and a damaged outdoor control. The manual's size example is a 2 ton plug on a 3 ton inverter. Furnace code 25 is the setup-switch fault on the 80% furnace chart. Both steps here are for a technician.`,

  'ac/bryant/31':
`Bryant outdoor 31 means the high pressure switch opened. The unit steps down a stage for each occurrence and elevates to fault 84 when that happens on the lowest stage. Reset time is 6 minutes, then reduced-stage operation. Reduced capacity clears after 2 hours of continuous running at any stage. Table 6 says to use the fault 84 checks. Furnace code 31 is the high-heat pressure switch inside the furnace, a different fault.`,

  'ac/bryant/32':
`Bryant outdoor 32 is a low pressure trip, not the high-pressure switch. It elevates to fault 83 after 3 occurrences. Reset time is 6 minutes. Table 6 says to use the fault 83 checks: a closed service valve, low charge, low indoor airflow in cooling, low outdoor airflow in heating, and a restriction in the filter drier or expansion device. Code 31 is the high-pressure switch. Furnace code 32 is the furnace low-heat pressure switch.`,

  'ac/bryant/33':
`Bryant outdoor 33 is lost inverter communication, the local fault. It is logged after 2 minutes with no talk between the outdoor control and the inverter, and it becomes fault 48 after 3 failures in 20 minutes or after 20 minutes continuous. The manual says to use the fault 48 checks. Furnace code 33 is a limit switch. This outdoor 33 is not that.`,

  'ac/bryant/46':
`Bryant outdoor 46 is a brownout. Reset time is 6 minutes. The manual says to check for line voltage approximately greater than 180 V, and to contact the power provider if the reading stays under that. Then check the connections on L1 and L2. If the inverter is not reading voltage properly, replace the inverter. Code 46 does not use the coil checks from 31 or 32. It is not a homeowner meter job.`,

  'ac/bryant/48':
`Bryant outdoor 48 means the outdoor control and the inverter have stopped communicating. It is elevated from fault 33 after 3 occurrences. Causes are a loose harness between AOC plug PL20 and the inverter, electrical noise, and possible inverter damage. For noise, the manual says the system tries repeated starts. If the harness is good and the inverter is damaged, change the inverter drive. Code 33 is the local fault after 2 minutes. This page is the lockout-style communication fault.`,

  'ac/bryant/53':
`Bryant outdoor 53 is an outdoor air temperature sensor fault. Causes are a harness not plugged into the outdoor control, a broken or loose harness wire, a broken or damaged sensor, and hardware damage to the outdoor control. If that sensor fails, the manual says defrost is started from coil temperature and time instead. It is not a charge code. Code 55 is the coil temperature sensor.`,

  'ac/bryant/55':
`Bryant outdoor 55 is a coil temperature sensor fault. The manual wants the thermistor clipped to the distributor entry tube, the harness checked, and the outdoor control replaced only if its hardware is damaged. If this sensor fails, defrost runs at each interval in heating and stops after 2 minutes. That short defrost is why a heat pump can feel like it is not heating. Code 53 is the outdoor air sensor, which fails over to a different defrost rule.`,

  'ac/bryant/56':
`Bryant outdoor 56 means the outdoor air and coil thermistors are out of range. The manual calls it an event. Causes include heating when cooling was called, a coil thermistor clipped in the wrong place, and an outdoor air sensor body touching sheet metal. One listed action is to inspect the outdoor coil for obstructions. If the thermistors are out of range, defrost runs every heating interval and stops after 2 minutes, the same short defrost as a failed coil sensor. Code 55 is the failed coil sensor itself.`,

  'ac/bryant/83':
`Bryant outdoor 83 is a low-pressure lockout for 4 hours, elevated from fault 32 after 3 occurrences. The 6-minute trip is code 32. Causes listed for 83 include a service valve left closed, an undercharged system, low indoor airflow in cooling, low outdoor airflow in heating, an EXV problem in heating, a restriction in the filter drier, and an expansion-device restriction. In cooling, check the indoor coil for ice or debris. In heating, check the outdoor coil.`,

  'ac/bryant/84':
`Bryant outdoor 84 is a high-pressure lockout for 4 hours, elevated from fault 31 when the stage can no longer be lowered. Causes include low outdoor airflow in cooling, low indoor airflow in heating, overcharge, a service valve left closed, a loose high-pressure-switch harness, a restricted filter drier, non-condensables, a faulty pressure switch, and a reversing valve stuck in cooling. In heating, the homeowner check is the indoor coil and the filter. Also check the outdoor coil for ice or debris.`,

  'ac/carrier/49':
`Carrier 49 is a compressor overcurrent fault, the local code. It elevates to fault 95 after 5 occurrences. Reset time is 6 minutes. Table 6 says to use the fault 95 checks. It is not brownout 46, and it is not the 2-hour lockout 95. Count 4 short flashes and 9 long flashes.`,

  'ac/carrier/57':
`Carrier 57 is a suction pressure sensor fault. It is not low-pressure trip 32 and not high-pressure switch 31. Causes are an electrical short that destroyed the transducer electronics, and heat damage during brazing. The actions are to compare the transducer reading with a gauge at the service valve, correct the short, and replace the transducer. There is no filter step and no coil-cleaning step on this row.`,

  'ac/carrier/65':
`Carrier 65 is DC-volts low, speed limiting. The manual's voltage on this row is supply under 197 V. Causes are that low supply, a loose wire in the control box, and internal inverter damage. It is not brownout 46, which uses approximately 180 V. Code 65 has no reset time in the table. The actions are to check supply voltage and call the utility if it is low, find the loose wire, or replace the inverter.`,

  'ac/carrier/88':
`Carrier 88 is a compressor and inverter lockout for 2 hours, elevated from fault 79 after 5 occurrences. Causes in the table are a blocked inverter heat exchanger, condenser airflow too low, evaporator airflow too low, high load in cold-ambient heating or high-ambient cooling, overcharge, and inverter damage. Code 79 is the local fault when the compressor fails to start. 88 is the lockout after those attempts.`,

  'ac/carrier/95':
`Carrier 95 is the compressor overcurrent lockout for 2 hours, elevated from fault 49 after 5 occurrences. The 6-minute event is code 49. Causes include high superheat, the compressor outside its allowed envelope, supply voltage, loose connections, phase imbalance, low outdoor airflow, overcharge, inverter damage, and compressor internal damage. The outdoor-coil check is the airflow line. Voltage is compared with the rating plate, not with code 46's 180 V figure.`,

  'ac/goodman/a2':
`Goodman A2 on the PCBHR104 chart is an outdoor air temperature sensor fault. Digit 2 is A and digit 1 is 2. Causes are a shorted sensor, an open sensor, a disconnected sensor, and a sensor out of range. The actions are to check the connection and replace an open or shorted sensor. It is not outdoor coil sensor A3, which the same chart ties to a heat pump that will not run in heating. The chart is repeated on PCBHR105 with the same fault text.`,

  'ac/goodman/a3':
`Goodman A3 on the PCBHR104 chart is an outdoor coil temperature sensor fault, and the symptom line says the heat pump fails to operate in heating. Causes match A2: shorted, open, disconnected, or out of range. A2 does not carry that heating-failure symptom. The actions are to check the connection and replace an open or shorted sensor. The same text is repeated on the PCBHR105 chart.`,

  'ac/goodman/b0':
`Goodman b0 on the PCBHR104 chart means the circulator blower motor is not running when it should be. The air conditioner or heat pump fails to operate. Causes are an indoor blower motor problem and a communications error between the indoor and outdoor units. The actions are the indoor blower motor, its wiring, the indoor control, and repairing or replacing faulty wiring or the motor. It is not b9, which is airflow lower than demanded while the system still runs at reduced performance. The display uses a lowercase b.`,

  'ac/goodman/b9':
`Goodman b9 means airflow is lower than demanded. The system can keep running at reduced performance, or stay in low stage when high stage was expected. Causes are an indoor blower motor problem, blocked filters, restrictive or undersized ductwork, and an indoor and outdoor unit mismatch. The filter is the homeowner check. Motor, duct size, and the approved system match are technician checks. b0 is the blower that is not running at all.`,

  'furnaces/lennox/e200':
`Lennox E200 is the SL280DFNV seven-segment code for a rollout hard lockout. The installation instructions say the rollout circuit is open or was open, and the action is to correct that cause or replace the flame rollout switch, then test the furnace. It clears after the fault is recovered. It is not the ML180 red-slow / green-on limit pattern, and it is not E250, which is the limit circuit on this same control.`,

  'furnaces/lennox/e223':
`Lennox E223 on the SL280DFNV means the low pressure switch failed open. The row says to measure the switch in inches of water column on a heat call and to inspect the vent and the combustion air inducer. The outdoor termination is the homeowner look. It is not the ML180 red-off / green-slow prove-switch pattern.`,

  'furnaces/lennox/e250':
`Lennox E250 is the SL280DFNV limit circuit open. If the limit stays open 3 minutes, the furnace goes into a 1-hour soft lockout. The row names firing rate, a blockage in the heater, and airflow. It does not name a dirty filter. E291 is the airflow lockout that does name the filter. E200 is the rollout hard lockout.`,

  'furnaces/lennox/e270':
`Lennox E270 is a soft lockout after the maximum retries, with no flame current sensed. It clears when a heat call finishes successfully. The row says to check gas flow, that the ignitor is lighting the burner, and flame sensor current. It is not E223, the pressure switch, and not E200, the rollout lockout.`,

  'furnaces/lennox/e291':
`Lennox E291 means heat airflow is below the minimum on an SL280DFNV, and the furnace is in a 1-hour soft lockout. The row names a dirty filter, other airflow restriction, and blower performance. It clears when a heat call finishes. E250 is the open limit circuit and does not use this filter sentence.`,

  'water-heaters/navien/e003':
`Navien E003 on the NPE-2 user's chart is ignition failure. The owner action is to make sure the main gas supply valve is open. E004 is false flame, and its action is a grounded cord. E012 is flame loss after the burner had lit, and that row adds the intake-air filter.`,

  'water-heaters/navien/e012':
`Navien E012 is flame loss: the burner lit, then the flame went out. The chart says to clean the intake air filter and to make sure the cord is grounded. E003 is the burner that never lit. E110 is abnormal air pressure and also names that filter, plus a blocked exhaust pipe.`,

  'water-heaters/navien/e110':
`Navien E110 is abnormal air pressure. The chart says to make sure the exhaust pipe is free of obstructions and to clean the intake air filter. Section 4.5 also says a clogged intake filter can stop the heater and show error 110. It is not E016 or E030, which are overheating and name the cold-water inlet filter and a heat-exchanger flush.`,

  'water-heaters/rinnai/11':
`Rinnai code 11 in the N-series with-pump manual is no ignition: the heater is not turning on. The owner lines are gas on at the heater, meter or cylinder, and gas in a propane tank. Code 12 is no flame and repeats the gas checks, then hands the flame rod to a technician. Code 10 is an air-supply or exhaust blockage, or a full condensate trap.`,

  'water-heaters/rinnai/12':
`Rinnai code 12 is no flame. Code 11 is no ignition. Both start with the gas supply. Code 12's other listed checks are the flame rod wire, gas type and inlet pressure, and air in the gas line, which the manual marks for a qualified professional.`,

  'water-heaters/rinnai/ss':
`Rinnai SS is the service-soon timer, not a lockout. The manual says it is time to flush the heat exchanger (section 6.3). Pressing On/Off five times in five seconds clears the code. It is not code 14, which is heat exchanger overheat.`,

  'ac/daikin/u4':
`Daikin U4 on the FTX-N service manual is a signal transmission error between the indoor and outdoor units. It is not A5. A5 is freeze-up protection in cooling or heating peak-cut, and A5 is the code whose checks start with the air path and the indoor filter.`,

  'ac/daikin/a5':
`Daikin A5 stops the unit when the indoor heat exchanger is below 32°F in cooling, or above about 140°F in heating. The manual's first checks are a short-circuited air path and a dirty indoor filter. U4 is the indoor-to-outdoor transmission error and does not use that filter step.`,

  'ac/mitsubishi/3-blinks':
`Mitsubishi 3 blinks on MSZ-FS table 9-4 are the indoor fan: the rotation feedback signal is not emitted while the fan should be running. 5 blinks are the outdoor power system, after the compressor has already stopped three times for overcurrent or start-up failure. The failure-mode recall function uses different blink counts. Do not mix the two tables.`,

  'ac/mitsubishi/5-blinks':
`Mitsubishi 5 blinks on table 9-4 mean the outdoor power system. The compressor stopped for overcurrent or start-up failure three times within a minute of starting, and both units stay off. The manual points at the inverter, the compressor, and the stop valve. 3 blinks are the indoor fan. 7 blinks are the outdoor control memory.`,

  'ac/mitsubishi/continuous-blink':
`A steady 0.5-second blink of the left lamp, with no 2.5-second pause, is table 9-4 row 1: miswiring or a missing serial signal for 6 minutes. It is not a counted blink. The manual warns that miswiring can damage the indoor control board.`,

  'ac/fujitsu/11':
`Fujitsu 11 on ASUG09/12/15LZAS is a serial communication error. The operation lamp blinks once and the timer lamp blinks once, and the economy lamp flashes continuously. Code 41 blinks 4 and then 1 and is the room temperature sensor. The service manual's first check for 11 is a power reset. If the blink returns, the wiring and the outdoor board are technician work.`,

  'ac/fujitsu/41':
`Fujitsu 41 is the room temperature thermistor open or short. The lamps blink 4 and then 1. Code 42 blinks 4 and then 2 and is the indoor heat exchanger sensor. Do not use the 41 page for a 4-and-2 blink.`,

  'dishwashers/bosch/e09':
`Bosch writes E09 and E20 with the same sentence: a heat pump internal heater fault. Both get a 30-second breaker reset, then Customer Support. E12 is limescale in the heat pump and uses a descaler. E21 is a blocked heat pump. E01 is the heat pump motor circuit at the main control board.`,

  'dishwashers/bosch/e20':
`Bosch's page gives E20 the same meaning it gives E09: heat pump internal heater fault, 30-second breaker reset, then Customer Support. It is not E12. Descaling is the E12 step, not this one.`,

  'washers/lg/cd':
`LG Cd is cool down after a drying cycle on a washer-dryer combo, not a fault. It can tumble for up to 4 hours. The message stays until the clothes are removed or START/PAUSE is pressed. A wash-only machine does not use this display.`,

  'washers/lg/opn':
`LG OPn means the detergent drawer was not fully inserted, or it was opened while the washer was running. Seat the drawer. It is not OE, the drain code, and it is not Sud.`,

  'washers/lg/dcl':
`LG dcL means the ezDispense nozzle-clean program is running. LG says it takes about 16 minutes, and the compartment being cleaned has to be empty of detergent or softener and filled with water to the max line. It is not OPn and it is not Sud. ezDispense models only.`,

  'washers/samsung/ddc':
`Samsung ddC, also shown as dC3, is the Add Door, not the main door. dE is the main door. A lone dC can be a door error or an unbalanced load, depending on the model. Do not use that dC note for ddC.`,

  'washers/samsung/cb':
`Samsung Cb, also shown as C6, is weight-calibration mode, not a fault. The tub has to be empty. The rotation lasts 1 to 3 minutes and then ends. It is not Child Lock.`,

  'dishwashers/samsung/ap':
`Samsung dishwasher AP is Access Point mode for pairing with a phone, not a fault. If you are not pairing, turn the dishwasher off and on. It is not a leak code.`,

  'dishwashers/samsung/pe':
`Samsung dishwasher PE means the half-load function is not performing correctly. Empty the dishwasher, add detergent, and run a half-load cycle. It is not the leak code and not HE or HC.`,

  'dishwashers/lg/pf':
`LG dishwasher PF means power was cut and the cycle can resume. It is not an error. Press start/pause. The LG washer PF reset, unplug and hold START/PAUSE for 5 seconds, is a different appliance.`,

  'ac/lg/ch04':
`LG CH04 is condensate. Window and portable units: unplug, then drain the rear port into a pan. Ceiling units: power off for 5 minutes, then restore power, and request service if it returns. Some window and portable units show FL instead of CH04. Do not use the ceiling reset as the only step on a window unit.`,

  'ac/lg/ch07':
`LG CH07 means heating and cooling are selected at the same time on a 2-in-1 or a multi-room system. Set every indoor unit to heating, or to cooling or dehumidification. Cooling with dehumidification is allowed. Air Purification and Fan are allowed with either family. It is not CH04.`,

  'furnaces/weil-mclain/ignition-fault':
`Weil-McLain Ultra ignition fault is five tries with no flame, then a one-hour automatic reset. The fault row's cable figure is 1,000 ohms plus or minus 50. The annual startup in the same manual says 900 to 1,000 ohms for a good cable. The spark gap on this row is 3.5 mm. Flame fault is flame when there should be none, and it does not use the one-hour reset.`,

  'furnaces/weil-mclain/flame-fault':
`Weil-McLain flame fault is flame detected when there should be no flame, cleared only from the manual reset screen. If flame continues after shutdown, the row says to replace the gas valve and the venturi. Figure 119's shutdown flame-signal values, and the rule of staying at least 20 above them, are the maintenance check in the same manual. Ignition fault is five misses and no flame.`,

  'furnaces/weil-mclain/flue-temp-too-high':
`Weil-McLain flue temp too high is the flue sensor above 216°F. It can reset itself after 2.5 minutes below 216°F. Above 225°F it needs a manual reset. The maintenance comparison, flue no more than 54°F above return water at high fire, is a different number. Supply 58F > return is outlet water versus inlet water.`,

  'furnaces/weil-mclain/temp-rise-too-quickly':
`Weil-McLain temp rise too quickly is supply water climbing faster than 2°F per second in the first two minutes of burner operation. Five automatic resets in the same Priority demand force a manual reset. The Ultra 80 and 105 line on this row includes a Taco 007 as well as a 007e ECM. The supply-58 row does not name the 007.`,

  'furnaces/weil-mclain/supply-58f-gt-return':
`Weil-McLain supply 58F > return is boiler outlet more than 58°F above boiler inlet while the burner is on, with a 30 second automatic reset. It does not count five resets. The Ultra 80 and 105 circulator on this row is the Taco 007e ECM only. Temp rise too quickly is a rate, 2°F per second, not a 58°F gap.`,

  'furnaces/weil-mclain/return-gt-supply':
`Weil-McLain return > supply is return water at least 10°F hotter than supply. System sensors must hold that difference for 10 minutes. The row does not put that wait on the boiler sensors, and it names no pipe size and no Taco model. It clears when the gap is gone. Supply 58F > return is the other direction.`,

  'furnaces/weil-mclain/temperature-sensor':
`Weil-McLain temperature sensor is two rows with the same words. SHORT or OPEN uses Diagnostics, Temperatures, and Figure 123. Unused outdoor, system supply, and system return sensors show OPEN, and that is normal. The other row is the pair spread by more than 10°F. Flue temp too high tells you to start with this short-or-open check, then adds 216°F.`,

  'furnaces/weil-mclain/low-wtr-cutoff-open':
`Weil-McLain low WTR cutoff open is the cutoff contacts open for more than 1 second. It needs a manual reset of the U-Control and sometimes of the cutoff itself. Read it on Diagnostics, Inputs. Limit open is the external limit on orange connector P13, not this input.`,

  'furnaces/weil-mclain/limit-open':
`Weil-McLain limit open is an external manual or automatic limit. The automatic one resets 2.5 minutes after the device closes. The manual one waits for Reset Lockout. P13 pins 1 and 2 are the manual-reset pair. Pins 3 and 4 are the automatic pair. Jump the pair you are not using. High temp limit does not use P13.`,

  'furnaces/weil-mclain/high-temp-limit':
`Weil-McLain high temp limit is a boiler temperature sensor at the high-limit setting, and that setting is no higher than 200°F. It is a manual reset. Priority circulator outputs and the pipe sizes are on this row. Flue temp too high is 216°F at the flue sensor. Temp rise too quickly can trip in the first two minutes without reaching 200°F.`,

  'furnaces/weil-mclain/blower-fault':
`Weil-McLain blower fault is a blower that cannot reach speed, or that does not fall to 0 RPM when off. Standby speed must read 0 on Diagnostics, Inputs, or the blower is replaced. 120 Vac at the blower with no start also replaces the blower. No 120 Vac at the U-Control replaces the U-Control. The one-hour reset is this row. Figure 121's RPM bands are the manual-test procedure, not this fault text.`,

  'furnaces/weil-mclain/gas-valve-fault':
`Weil-McLain gas valve fault is the U-Control's gas-valve output circuit. It retries, then again after one hour, then it wants a manual reset. The row says to check the harness and, if the lockout returns, replace the U-Control. It does not say to replace the gas valve. Flame fault is the row that replaces the gas valve and venturi, and only if flame continues after shutdown. The resistance sentence in the table is unfinished, so this page states no ohm value.`,

  'furnaces/weil-mclain/air-pressure-sw-fault':
`Weil-McLain air pressure SW fault on a residential Ultra is an open air-pressure input on a boiler that uses a jumper between P7 pins 4 and 5, plus a boiler-size check against the rating label. Gas pressure SW fault, HW fault expansion brd, GV fault expansion brd, and exp board com fault are the same size check without that jumper. They are not separate pages.`,

  'furnaces/weil-mclain/no-display-blower-full':
`A blank Ultra display with the blower at full speed means the control is not receiving 24V. The fuse on this row is the 3-amp low-voltage fuse. Replace the transformer only when it has 120 VAC in and no 24 VAC out. The blank display with nothing else running is the 12-amp, 120V row.`,

  'furnaces/weil-mclain/no-display-no-power':
`A blank Ultra display with no other component running means no 120V. The fuse on this row is 12 amps. The power switch behind the control pod is part of this row. A blower that is already running at full speed is the 24V, 3-amp row instead.`,

  'furnaces/weil-mclain/no-display-boiler-running':
`A blank Ultra display while the boiler still runs is lost communication at plug P9, and the row ends at a new display module. DISPLAY COMM is the named code for communications out for 30 seconds, and it resets itself when the link returns. It names the molex, not a new display. Neither row is a missing 24V or 120V supply.`,

  'furnaces/bosch/ea':
`Bosch Greenstar EA is no flame, and the safety time expired. The list includes the gas cock, inlet gas pressure, the gas/air ratio, the fan-inlet diaphragm, and the code plug. F7 is flame with the burner off and does not use those items. The gas valve is printed twice on the EA row.`,

  'furnaces/bosch/e9':
`Bosch Greenstar E9 is the heat exchanger safety high limit or the flue gas temperature limiter. The pump item is the capacitor. The fuse is 6.3 A to the IEC default. The DHW side of the heat exchanger is on this row. The letterless temperature-rise row uses pump speed and the service valves, not this fuse.`,

  'furnaces/bosch/d3':
`Bosch Greenstar d3 is a defective temperature high limit, a tripped external guard, or a locked-out temperature limiter. TB1 and the jumper across 8-9 or PR-P0 are this row. E9 does not use that jumper. CC, which is not a separate page, is the outdoor sensor on terminals A and F.`,

  'furnaces/bosch/f7':
`Bosch Greenstar F7 is flame detected while the burner is off. The list is electrodes, the flue, and moisture on the PCB. FA is flame after the gas is switched off, and FA adds the gas valve and the condensate trap. F7 does not. F0's 3-second reset is not this code.`,

  'furnaces/bosch/fa':
`Bosch Greenstar FA is flame detected after the gas is switched off. The first action is the gas valve. Then the condensate trap, the electrodes and leads, and the flue. F7's moisture-on-the-PCB step is not on FA. Fd is a reset button pressed by mistake.`,

  'furnaces/bosch/temperature-rise-too-fast':
`Bosch Greenstar temperature rise too fast has no letter. It is the temperature gradient limiter. Open the service valves, check the heating-zone pump connection to the Heatronic, the plug, a manual pump test, and pump speed. The manual states no degrees-per-second figure. E9 is the letter code for a tripped high limit.`,

  'water-heaters/rinnai/15':
`Rinnai 15 in document 100000652 is SENSEI venturi control at connector D. Red pin 12 to black pin 30 is 12 to 14 VDC. The two ohm pairs are 35 to 41 ohms. Code 17 is a blocked venturi and uses the t, F, S, E, ECL button reset. Code 15 resets by cycling main power.`,

  'water-heaters/rinnai/17':
`Rinnai 17 is venturi blockage: condensate drain, the vent, then debris in the venturi after it is removed from the fan. The reset is button B through t, F, S, and E, then A and B for 10 seconds until ECL. E is only for code 17 or 52. Code 15 does not use those buttons.`,

  'water-heaters/rinnai/19':
`Rinnai 19 is an electrical short that shows up immediately when water flows, with no flame in the burner box. Unplug one DC component at a time. Three cycles after that unplug means the short is in that part. It applies to SENSEI and non-SENSEI. Code 12 is no flame and starts with the gas supply.`,

  'water-heaters/rinnai/32':
`Rinnai 32 is the outgoing water thermistor. Drain the heater, clean scale, and use the O-ring. At 86°F the band in this document is 6.4 to 7.7k ohms. Code 33, the heat exchanger thermistor, repeats these steps and is not its own page. Code 38 is the exhaust sensor and adds the manometer and the fins.`,

  'water-heaters/rinnai/38':
`Rinnai 38 is the exhaust gas temperature sensor, reinstalled in the exhaust port, not in the water with an O-ring. If the resistance is already good, the procedure continues to gas type, conversion, clearances, forced low and high manifold pressure, and the copper fins. Replacement of the sensor is the last step.`,

  'water-heaters/rinnai/41':
`Rinnai 41 is the freeze-protection sensor. A KB heater will not fire. A VC heater will fire and flash 41 against the set point. An open outside-air thermistor on an outdoor model also lets the heater keep running. The sensor has to see outside air. Code 32 is the outgoing water thermistor and does not use this keep-running rule.`,

  'water-heaters/rinnai/52':
`Rinnai 52 is the gas valve. On the SENSEI block, connector D pins 27 and 29 are 18 to 22 ohms or 11 to 13 VDC, then the valve and venturi are replaced and the t, F, S, E, ECL reset is run. The POV block measures the coil against the tech data sheet and ends at a new PC board. Code 71 adds the DIP switch and the moisture tube.`,

  'water-heaters/rinnai/54':
`Rinnai 54 cuts firing rate when exhaust exceeds 163°F and shuts down if that lasts 120 seconds. The scale flush in this section is four gallons of vinegar. Burner gasket 101 must not be reused. Inlet water "too high" has no degree number on this 2019 page. Code 14 is a different overheat code.`,

  'water-heaters/rinnai/70':
`Rinnai 70 is the PC board fault. Check parameters and the harnesses at the board, then replace the board. The data-transfer cable sentence on code 70's SENSEI line is explicit. Code 21 is a transfer that was never finished after a board was already replaced. Code 72 replaces a board only after the flame-rod test.`,

  'water-heaters/rinnai/71':
`Rinnai 71 is the solenoid valve circuit. The single DIP switch must be OFF. Pins 27 and 29 match code 52's 18 to 22 ohms or 11 to 13 VDC, and this code adds a grounded-circuit check. The SV0 through SV4 block looks for moisture in the plastic tube to the gas valve and for a solenoid with no resistance. Code 52 does not mention that tube.`,

  'water-heaters/rinnai/72':
`Rinnai 72 is the flame rod. It has to touch the flame, and the output has to hold at least 1 microamp. Carbon means a new rod and gasket. A leaking heat exchanger is on this list. The 1 microamp figure is not on code 52 or code 71. SENSEI board replacement still needs the data transfer.`,

  'water-heaters/rinnai/79':
`Rinnai 79 in document 100000652 is the non-SENSEI leak detector. Dry a wet bottom pan and the sensor. If the cabinet is already dry and the heater runs with the sensor unplugged, replace the sensor and the screw. Code 19's three-cycle unplug test is a different short. The N-series section 5.6 chart does not list 79.`,

  'water-heaters/rinnai/lc':
`Rinnai LC on non-SENSEI heaters is scale. Older units keep running, beep, and alternate LC with the set temperature. Newer units lock out. Five presses of on/off buy 70 hours. This page does not add "within five seconds." That timing belongs to SENSEI code SS. The hard reset is A and B together for five seconds, and it is not the t, F, S, E sequence.`,

  'water-heaters/noritz/11':
`Noritz 11 in owner's guide SBB81M1 is ignition failure. Open the gas valve, then close and open the hot fixture, or cycle the POWER button. If the blinking number stays away, the guide says it is solved. Code 90 adds the vents and the condensate line. Code 91 is the conversion, and it does not use this faucet cycle.`,

  'water-heaters/noritz/90':
`Noritz 90, 901, and 902 are one row: indoor air-supply vent, exhaust vent, low gas supply pressure for a professional, and a condensate line that is clogged or frozen. Steam on a cold day is normal and is not this code. Code 11 does not use these vent checks. A missing propane conversion sticker is the odor note, which belongs with code 91.`,

  'water-heaters/noritz/91':
`Noritz 91 means gas conversion was not done correctly. The only chart action is to contact the installer. Factory gas is natural. Propane needs the supplied kit, a new orifice, a sticker, a manometer, and a gas analyzer. The work is charged even in warranty. Do not run a propane unit that has no sticker.`,

  'water-heaters/noritz/06':
`Noritz 06, 061, and 062 are recirculation abnormality, and the chart marks them NRCR only. Check the return line filter and the crossover valve's filter. EZ models in the same guide are not this row. C1# is the descaling reminder. Turning recirculation off is not the listed repair.`,

  'water-heaters/noritz/c1':
`Noritz C1# is the descaling reminder, with the last digit from 1 to 9. It is not a lockout. The chart says scale can cause premature heat exchanger failure, and dust or lint in the fan and intake can affect combustion. The action is to call 1-866-766-7489 for the maintenance procedure. It does not state a vinegar quantity.`,
};

export function codeNote(key: string): string | undefined {
  return CODE_NOTES[key];
}
