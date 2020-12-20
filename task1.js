'use strict';

let example = 153;
const someObject = createObject(example);
console.log(someObject);
/**
 * 
 * @param {*} num число от 0 до 999 
 */
function createObject(num) {
    if (!Number.isInteger(num) || num < 0 || num > 999) {
        console.log(`${num} не удовлетворяет условию: целое число от 0 до 999`);
        return {};
    }
    num = String(num);
    while (num.length < 3) {
        num = '0' + num;
    }
    const result = {
        hundreds: num[0],
        tens: num[1],
        units: num[2],
    };
    return result;
}