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

    describe("When sensor falls below threshold", () => {

        beforeEach(() => {

            sensorSeam = () => LOW_PRESSURE_THRESHOLD - 1;

        });

        test("Alarm is on", () => {

            assert.equal(true, check());

        });

    });

    describe("When the sensor rises above threshold", () => {

        beforeEach(() => {

            sensorSeam = () => HIGH_PRESSURE_THRESHOLD + 1;

        });

        test("Alarm is on", () => {

            assert.equal(true, check());

        });

    });

});
