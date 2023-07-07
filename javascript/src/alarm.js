import { sensor } from "./sensor.js";

const LOW_PRESSURE_THRESHOLD = 17;
const HIGH_PRESSURE_THRESHOLD = 21;

export function alarm() {

    let count = 0;
    return () => {

        if(count++ == 0) return false;
        const sensed = sensor();
        return (sensed < LOW_PRESSURE_THRESHOLD) || (sensed > HIGH_PRESSURE_THRESHOLD);

    };

}
