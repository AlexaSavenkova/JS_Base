'use strict';

// sum(5)(6)...(4)() // -> сумма всех переданных значений
function sum(a) {
        let result = a;
        return function addNext(b) {
            if (b === undefined) {
                return result;
            }
            result += b;
            return addNext;
        };
    }
console.log(sum(5)(6)(4)(15)(2)());


 // sum(5)(6)...(4) // -> сумма всех переданных значений
function sum1(a) {
    let result = a;
    function addNext(b) {
        result += b;
        return addNext;
    }
    addNext.toString = function () {
        return result;
    };
    return addNext;
}
console.log(sum1(5)(6)(4)(15)(2));

 