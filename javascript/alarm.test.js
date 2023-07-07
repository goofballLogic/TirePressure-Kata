import { alarm } from "./alarm.js";
import assert from "node:assert/strict";

describe("Alarm", () => {

    let check;
    beforeEach(() => {

        check = alarm();

    });

    test("Alarm is off by default", () => {

        assert.equal(false, check());

    });

});
