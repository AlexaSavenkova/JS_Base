'use strict';
/**
 *  basket - массив массивов [название товара, цена , количество ]
 */
let basket = [
    ['товар 1', 200, 2],
    ['товар 2', 100, 3],
    ['товар 3', 1000, 1],
    ['товар 3', 500, 2]
];

// вариант 1
function busketPrice1(basket) {
    let price = 0;
    for (let i = 0; i < basket.length; i++) {
        price += basket[i][1] * basket[i][2];
    }
    return price;
}
console.log(`В корзине товаров на ${busketPrice1(basket)} руб.`);

// вариант 2
function busketPrice2(basket) {
    return basket.reduce((sum, current) => sum + current[1] * current[2], 0);
}

console.log(`В корзине товаров на ${busketPrice2(basket)} руб.`);


// вариант 3
function busketPrice3(basket) {
    let price = 0;
    basket.forEach(element => {
        price += element[1] * element[2];
    });
    return price;
}
console.log(`В корзине товаров на ${busketPrice3(basket)} руб.`);