'use strict';

const cartBtn = document.querySelector('.cart');
const buyBtns = document.querySelectorAll('.buy-btn');

cartBtn.addEventListener('click', CartList.cartShow());

buyBtns.forEach(function(buyBtn) {
    buyBtn.addEventListener('click', CartList.addToCart())
});


class CartList {
    constructor(container = '.cart') {
        this.container = container;
        this.goodsInCart = [];
        this.allCartProducts = [];
    }

    static cartShow(product) {

    }

    static addToCart(product) {

    }
}

class CartItem {
    constructor(product) {
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
    }
    
    render() {
        
    }
}

new CartList();