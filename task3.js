'use strict';

const cart = {
    cartBlock: null,
    products: [
        {
            productId: 123,
            productName: 'товар 1',
            price: 400,
            quantity: 1,
            clearBtn: null,
        },
        {
            productId: 124,
            productName: 'товар 2',
            price: 4600,
            quantity: 2,
            clearBtn: null,
        },
        {
            productId: 125,
            productName: 'товар 3',
            price: 100,
            quantity: 3,
            clearBtn: null,
        }
    ],
    countCartPrice() {
        return this.products.reduce((totalPrice, cartItem) => totalPrice += cartItem.price * cartItem.quantity, 0);
    },
    countItemsInCart() {
        return this.products.reduce((totalItems, cartItem) => totalItems += cartItem.quantity, 0);
        // или можно считать не общее кол-во, а кол-во позиций
       // return this.products.length;
    },
    
    init() {
        this.cartBlock = document.querySelector('.cart');
        this.render();
    },
    
    render() {
        if(this.products.length) {
            this.renderCartItems();

            this.cartBlock.insertAdjacentHTML('beforeend',`<p>Всего товаров: ${this.countItemsInCart()} </p> <p>Общая стоимость: ${this.countCartPrice()} руб.</p>`);

        } else {
            this.cartBlock.textContent = 'Корзина пуста';
        }       
    },
    renderCartItems() {
        let itemHTML = '';
        for (let item of this.products) {
            itemHTML = `<div class="item">
            <div><b>Наименование</b>: ${item.productName}</div>
            <div><b>Цена за шт.</b>: ${item.price} руб.</div>
            <div><b>Количество</b>: ${item.quantity}</div>
            <div><b>Стоимость</b>: ${item.quantity * item.price} руб. </div>
            </div>`;
            this.cartBlock.insertAdjacentHTML('beforeend',itemHTML);
            
            // добавляем кнопку "удалить" для каждого товара
            item.clearBtn = document.createElement('button');
            item.clearBtn.textContent = 'Удалить';
            this.cartBlock.appendChild(item.clearBtn); 
            this.cartBlock.insertAdjacentHTML('beforeend','<hr>');

            // добавляем обработчик событий для каждой кнопки "удалить"
            let key = this.products.indexOf(item);
            this.initEventHandlers(key);
        }
    },
    
    initEventHandlers(key) {
        this.products[key].clearBtn.addEventListener('click', () => {this.deleteItem(key);});
    },

    deleteItem(key) {
        this.products.splice(key,1);
        this.cartBlock.textContent = '';
        this.render();
    },
};

cart.init();