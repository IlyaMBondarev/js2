Vue.component('cart-js', {
    data() {
        return {
            imgCart: 'https://placehold.it/50x100',
            cartUrl: '/getBasket.json',
            cartItems: [],
            showCart: false,
            total: 0,
        }
    },
    methods: {
        addProduct(product) {
            let find = this.cartItems.find(el => el.id_product === product.id_product);
            if (find) {
                this.$root.putJson(`/api/cart/${find.id_product}`, {quantity: 1, price: product.price});
                find.quantity++;
                this.total += product.price;
            } else {
                let prod = Object.assign(product);
                prod.quantity = 1;
                this.$root.postJson('/api/cart', prod)
                    .then(data => {
                        if (data.result === 1) {
                            this.cartItems.push(prod);
                            this.total += prod.price;
                        }
                    });
            }
        },
        addGood(product, addQuantity) {
            let find = this.cartItems.find(el => el.id_product === product.id_product);
            if (find) {
                this.$root.putJson(`/api/cart/${find.id_product}`, {quantity: +addQuantity, price: product.price});
                find.quantity += +addQuantity;
                this.total += product.price*(+addQuantity);
                this.$root.getJson(`/api/cart/`)
                    .then(data => {});
            } else {
                let prod = Object.assign(product);
                prod.quantity = +addQuantity;
                this.$root.postJson('/api/cart', prod)
                    .then(data => {
                        if (data.result === 1) {
                            this.cartItems.push(prod);
                            this.total += prod.price*prod.quantity;
                            this.$root.getJson(`/api/cart/`)
                                .then(data => {});
                        }
                    });

            }
        },
        remove(item) {
            this.$root.delJson(`/api/cart/${item.id_product}`, {quantity: 1, price: item.price})
                .then(data => {
                    if (data.result === 1) {
                        console.log(item.quantity);
                        if (item.quantity > 1) {
                            item.quantity--;
                            this.total -= item.price;
                        } else {
                            this.cartItems.splice(this.cartItems.indexOf(item), 1);
                            this.total -= item.price;
                        }
                    }
                })
        },
        change(item) {
            this.$root.changeJson(`/api/cart/${item.id_product}`, {quantity: item.quantity, price: item.price})
                .then(data => {
                    if (data.result === 1) {
                        if (item.quantity > 0) {
                            this.total = 0;
                            for (let el of this.cartItems) {
                                this.total += el.quantity * el.price;
                            }
                        } else {
                            item.quantity = 1;
                            console.log("Количество вещей должно быть не меньше одного!");
                            this.change(item);
                        }
                    }
                })
        },
        clear() {
            this.$root.clearJson(`/api/cart/`)
                .then(data => {
                    if (data.result === 1) {
                        this.cartItems = [];
                        this.total = 0;
                    }
                })
        }
    },
    mounted() {
        this.$root.getJson(`/api/cart/`)
            .then(data => {
                for (let el of data.contents) {
                    this.cartItems.push(el);
                    this.total += el.quantity * el.price;
                }
            });
    },
    template: `
        <div>
            <button class="btn-cart" type="button" @click="showCart = !showCart"><img src="img/cart.jpg" alt="cart" class="header_cart_image"></button>
            <div class="header_cart_drop" v-show="showCart">
            <div class="header_cart_empty">
                <p v-if="!cartItems.length" style="border-bottom: 1px solid rgba(237, 237, 237, 0.75); padding: 10px">Корзина пуста</p>
                <cart-item class="cart-item" 
                v-for="item of cartItems" 
                :key="item.id_product"
                :cart-item="item"
                @remove="remove">
                </cart-item>
                <div class="header_cart_drop_total">
                            <h3 class="header_cart_drop_total_h3">TOTAL</h3>
                            <h3 class="header_cart_drop_total_h3">{{ total }}</h3>
                        </div>
            <div class="header_cart_drop_buttons">
                            <a href="checkout.html" class="header_button header_cart_drop_checkout">Checkout</a>
                            <a href="shopping_cart.html" class="header_button header_cart_drop_go_to_cart">Go to
                                cart</a>
            </div>
                        </div></div>
        </div>`
});

Vue.component('cart-item', {
    props: ['cartItem'],
    data() {
        return {
            mainAPI: this.$root,
        };
    },
    template: `
                        <div class="header_cart_drop_flex">
                            <a href="single_page.html" @click="mainAPI.open(cartItem)"><img :src="cartItem.img.normal" alt="product" class="cart_img"></a>
                            <div class="header_cart_shopping_info">
                                <h3 class="header_cart_shopping_name">{{ cartItem.product_name }}</h3>
                                <h4 class="header_cart_shopping_price">{{ cartItem.quantity }} <span
                                        class="header_cart_shopping_price_x">x</span>
                                    {{ cartItem.price }}₽</h4>
                            </div>
                            <button class="header_cart_cancel_action" @click="$emit('remove', cartItem)"><img src="img/cart_cancel_action.jpg"
                                                                           alt="cart_cancel_action"></button>
                        </div>
    `
});
