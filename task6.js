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

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case '+':
            return addition(arg1, arg2);
        case '-':
            return subtraction(arg1, arg2);
        case '*':
            return multiplication(arg1, arg2);
        case '/':
            return division(arg1, arg2);
        default:
            return 'error';
    }
}


let a = 8;
let b = 2;
let operationSign = '+';

console.log(`${a} ${operationSign} ${b} = ${mathOperation(a, b, operationSign)}`);