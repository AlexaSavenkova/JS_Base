'use strict';
const settings = {
    cartBlock: '.cart',
    catalogBlock: '.catalog',
}
const cart = {
    cartBlock: null,
    products: [
        {
            productId: 123,
            productName: 'товар 1',
            price: 400,
            quantity: 1,
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
        this.cartBlock = document.querySelector(settings.cartBlock);
        this.render();
        this.initEventHandlers();
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
            <button  class = "deleteItemBtn" data-product_id="${item.productId}">Удалить</button>
            </div>`;
            this.cartBlock.insertAdjacentHTML('beforeend',itemHTML);
            
        }
    },
    
    initEventHandlers() {
        this.cartBlock.addEventListener('click', event => this.deleteItem(event));
    },

    deleteItem(event) {
        if (!event.target.classList.contains('deleteItemBtn')) return;
        const productId = +event.target.dataset.product_id;
        const index = this.findIndex(productId);
        this.products.splice(index,1);
        this.cartBlock.textContent = '';
        this.render();
    },
    
    findIndex(productId) {
        return this.products.findIndex(item => item.productId === productId);
    },

    addToCart (product) {
        const index = this.findIndex(product.productId);
        if (index === -1) {
            this.addNewItem(product);
        }else {
            this.products[index].quantity++;  
        }
        this.cartBlock.textContent = '';
        this.render();
    },

    addNewItem(product) {
        const newItem = Object.assign({quantity:1}, product);
        this.products.push(newItem);
    },

};
const catalog = {
    catalogBlock: null,
    products: [
        {
            productId: 123,
            productName: 'товар 1',
            price: 400,
        },
        {
            productId: 124,
            productName: 'товар 2',
            price: 4600,
        },
        {
            productId: 125,
            productName: 'товар 3',
            price: 100,
        },
        {
            productId: 126,
            productName: 'товар 4',
            price: 1000,
        }
    ],
   
    init() {
        this.catalogBlock = document.querySelector(settings.catalogBlock);
        this.render();
        this.initEventHandlers();
    },
    
    render() {
        let itemHTML = '';
        for (let item of this.products) {
            itemHTML = `<div class="item">
            <div><b>Наименование</b>: ${item.productName}</div>
            <div><b>Цена</b>: ${item.price} руб.</div>
            <button  class = "addToCartBtn" data-product_id="${item.productId}">Купить</button>
            </div>`;
            this.catalogBlock.insertAdjacentHTML('beforeend',itemHTML);
            
        }
    },
    
    initEventHandlers() {
        this.catalogBlock.addEventListener('click', event => this.addItemToCart(event));
    },

    addItemToCart(event) {
        if (!event.target.classList.contains('addToCartBtn')) return;
        const product = this.findProduct(event);
        cart.addToCart(product);
    },
    findProduct(event) {
        const productId = +event.target.dataset.product_id;
        return this.products.find(item => item.productId === productId);
    },
};
catalog.init();
cart.init();
