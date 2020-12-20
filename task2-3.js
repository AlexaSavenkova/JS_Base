'use strict';
const Basket = {
    products: [
        {
            productId: 123,
            productName: 'товар 1',
            price: 400,
            quantity: 1,
        },
        {
            productId: 124,
            productName: 'товар 2',
            price: 4600,
            quantity: 2,
        }
    ],
    countBasketPrice() {
        return this.products.reduce((totalPrice, cartItem) => totalPrice += cartItem.price * cartItem.quantity, 0);
    },
    deleteItem() {
        // some code
    },
    editItem() {
        // возможность изменить количество, цвет, размер etc.
    },
    addItem() {
        // здесь я не уверена
        // возможно этот метод лучше добавит в объект "каталог"
    },
    makePayment() {
        // оплатить покупки
    }
};

console.log(Basket.countBasketPrice());

const Catalog = {
    products: [
        {
            productId: 123,
            productName: 'товар 1',
            price: 400,
            size: ['XS', 'S', 'M', 'L', 'XL'],
            color: ['red', 'blue', 'black', 'white'],
            // прочие характеристики
        },
        {
            productId: 124,
            productName: 'товар 2',
            price: 400,
            size: ['XXS', 'S', 'M', 'XL', 'XXL'],
            color: ['black', 'white', 'green'],
        }
    ],
    addToCart() {
        // добавить в корзину
    },
    sortProdacts() {
        // отсортировать (например по цене)
    },
    applyFilter() {
        // сделать выборку (например по размеру или в ценовом диапазоне)
    }
};