'use strict';

function addition(arg1, arg2) {
    return arg1 + arg2;
}

function subtraction(arg1, arg2) {
    return arg1 - arg2;
}

function multiplication(arg1, arg2) {
    return arg1 * arg2;
}

function division(arg1, arg2) {
    return arg1 / arg2;
}

let a = 8;
let b = 2;
console.log(`${a} + ${b} = ${addition(a, b)}`);
console.log(`${a} - ${b} = ${subtraction(a, b)}`);
console.log(`${a} * ${b} = ${multiplication(a, b)}`);
console.log(`${a} / ${b} = ${division(a, b)}`);