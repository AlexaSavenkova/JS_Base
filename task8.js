'use strict';
/**
 * 
 * @param {*} val 
 * @param {*} pow  - целое число >= 0 ( проверку не делала)
 * 
 */
function power(val, pow) {

    if (pow == 0) return 1;

    if (pow == 1) {
        return val;
    } else {
        return val * power(val, pow - 1);
    }
}
console.log(power(2, 0));