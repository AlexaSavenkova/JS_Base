'use strict';
/**
 * 
 * @param {*} num - целое число (проверку не делала)
 */
function numberToString(num) {
    if (num >= 0) {
        return '' + num;
    } else {
        return `(${-num})`;
    }
}
console.log(numberToString(-5));