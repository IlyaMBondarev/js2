const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

let getRequest = (url, file) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (url) {
                resolve(url + file);
            } else {
                reject('Error!');
            }
        }, 100);
    });
};

class ProductList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this.allProducts = [];
        this._getProducts()
            .then(data => {
                this.goods = [...data];
                this._render();
                new CartList();
            });
    }

    _getProducts() {
        return fetch(`${API}/catalogData.json`)
            .then(response => response.json())
            .catch(error => {
                console.log(error);
            });
    }

    calcSum() {
        return this.goods.reduce((sum, good) => sum + good.price, 0);
    }

    _render() {
        const block = document.querySelector(this.container);

        for (let product of this.goods) {
            const productObject = new ProductItem(product);
            this.allProducts.push(productObject);
            block.insertAdjacentHTML('beforeend', productObject.render());
        }
    }
}

class ProductItem {
    constructor(product, img = 'https://placehold.it/200x150') {
        this.title = product.product_name;
        this.price = product.price;
        this.id = product.id_product;
        this.img = img;
    }

    render() {
        return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price} \u20bd</p>
                    <button class="buy-btn" data-id="${this.id}" data-title="${this.title}" data-price="${this.price}" data-img="${this.img}">Купить</button>
                </div>
            </div>`;
    }
}

function showCartList() {
    document.querySelector('.cart').classList.toggle('hidden');
}

class CartList {
    constructor() {
        this.container = '.cart';
        this.cartProducts = [];
        this.sum = 0;
        this.count = 0;
        this.allCartProducts = [];
        this._getBasket()
            .then(data => {
                this.cartProducts = [...data.contents];
                this._render();
            });
        document.querySelectorAll('.buy-btn').forEach(function (buyBtn) {
            buyBtn.addEventListener('click', event => CartList.addProduct(event))
        });
        document.querySelector('.btn-cart').addEventListener('click', event => showCartList());
    }

    _getBasket() {
        return fetch(`${API}/getBasket.json`)
            .then(response => response.json())
            .catch(error => {
                console.log(error);
            });
    }

    _render() {
        const block = document.querySelector(this.container);

        for (let product of this.cartProducts) {
            const productObject = new CartItem(product);
            this.allCartProducts.push(productObject);
            block.insertAdjacentHTML('beforeend', productObject.render());
            this.sum += product.price;
            this.count += product.quantity;
        }
        block.insertAdjacentHTML('beforeend', `<p class="total">Общая сумма: ${this.sum}</p>
                                               <p class="total">Количество предметов: ${this.count}</p>`)
    }

    static addProduct(buyBtn) {
        return fetch(`${API}/addToBasket.json`)
            .then(response => response.json())
            .then(data => {
                if (data.result) {
                    if (!this.checkIfAdded(buyBtn)) {
                        this.allCartProducts.push(new CartItem(cartItem));
                        this._render();
                        this.sum += buyBtn.dataset.price;
                        this.count++;
                    }
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }

    checkIfAdded(cartItem) {
        for (const productObject in this.allCartProducts) {
            if (cartItem.dataset === productObject.id_product) {
                return true;
            }
        }
        return false;
    }
}

class CartItem {
    constructor(product, img = 'https://placehold.it/200x150') {
        this.title = product.product_name;
        this.price = product.price;
        this.id = product.id_product;
        this.img = img;
    }

    render() {
        return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price} \u20bd</p>
                    </div>
            </div>`;
    }
}

new ProductList();