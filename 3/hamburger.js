class ProductList {
    constructor() {
        this.goods = [];
        this.filling = [];
        this.extra = [];
        this.allProducts = [];
        this._fetchProducts();
        this._render();
    }

    _fetchProducts() {
        this.goods = [
            {id: 1, title: 'Маленький', price: 50, calories: 20},
            {id: 2, title: 'Большой', price: 100, calories: 40}
        ];

        this.filling = [
            {id: 1, title: 'С сыром', price: 10, calories: 20},
            {id: 2, title: 'С салатом', price: 20, calories: 5},
            {id: 3, title: 'С картофелем', price: 15, calories: 10}
        ];

        this.extra = [
            {id: 1, title: 'Полить приправой', price: 15, calories: 0},
            {id: 2, title: 'Посыпать майонезом', price: 20, calories: 5}
        ]
    }

    _render() {
        let block = document.querySelector(".hamburgers");

        for (let product of this.goods) {
            const productObject = new ProductItem(product);
            this.allProducts.push(productObject);
            block.insertAdjacentHTML('beforeend', productObject.render());
        }
        block = document.querySelector(".filling");
        for (let product of this.filling) {
            const productObject = new ProductItem(product);
            this.allProducts.push(productObject);
            block.insertAdjacentHTML('beforeend', productObject.render());
        }
        block = document.querySelector(".extra");
        for (let product of this.extra) {
            const productObject = new ProductItem(product);
            this.allProducts.push(productObject);
            block.insertAdjacentHTML('beforeend', productObject.render());
        }
    }
}

class ProductItem {
    constructor(product) {
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
    }

    render() {
        return `<div class="product-item" data-id="${this.id}">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p><span class="price">${this.price}</span><span> \u20bd</span></p>
                    <button class="buy-btn" data-price="${this.price}">Добавить</button>
                </div>
            </div>`;
    }
}
new ProductList();