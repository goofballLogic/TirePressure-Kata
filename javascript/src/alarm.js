export const LOW_PRESSURE_THRESHOLD = 17;
export const HIGH_PRESSURE_THRESHOLD = 21;

export function alarm(sensor) {

    let count = 0;
    return () => {

        console.log(count, sensor);
        if(count++ == 0) return false;
        const sensed = sensor();
        return (sensed < LOW_PRESSURE_THRESHOLD) || (sensed > HIGH_PRESSURE_THRESHOLD);

    };

}
