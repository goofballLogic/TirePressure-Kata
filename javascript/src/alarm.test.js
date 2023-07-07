import { HIGH_PRESSURE_THRESHOLD, LOW_PRESSURE_THRESHOLD, alarm } from "./alarm.js";
import { sensor as actualSensor } from "./sensor.js";
import assert from "node:assert/strict";

describe("Alarm", () => {

    let check, sensorSeam, defaultState;
    beforeEach(() => {

        sensorSeam = actualSensor;
        check = alarm(() => sensorSeam());
        defaultState = check();

    });

    test("Alarm is off by default", () => {

        assert.equal(false, defaultState);

    });

    const cases = [
        ["falls below threshold", () => LOW_PRESSURE_THRESHOLD - 1, true],
        ["rises above threshold", () => HIGH_PRESSURE_THRESHOLD + 1, true],
        ["on the lower threshold", () => LOW_PRESSURE_THRESHOLD, false],
        ["on the upper threshold", () => HIGH_PRESSURE_THRESHOLD, false],
        ["within the thresholds", () => LOW_PRESSURE_THRESHOLD + 1, false]
    ];

    cases.map(([scenario, strategy, isOn]) => {

        describe(`When the sensor ${scenario}`, () => {

            beforeEach(() => {

                sensorSeam = strategy;

            });

            test(`Alarm is ${isOn ? "on" : "not on"}`, () => {

                assert.equal(check(), isOn);

            });

        });

    });

});
