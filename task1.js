'use strict';

// вариант 1
let i = 2;
outerLoop: while (i <= 100) {
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            i++;
            continue outerLoop;
        }
    }
    console.log(i);
    i++;
}

// вариант 2
i = 2;

while (i <= 100) {
    if (isPrime(i)) console.log(i);
    i++;
}

function isPrime(num) {
    for (let j = 2; j < num; j++) {
        if (i % j === 0) return false;
    }
    return true;
}