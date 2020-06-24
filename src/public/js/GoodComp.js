Vue.component('good-img-js', {
    data() {
        return {
            goodImg: "",
        }
    },
    mounted() {
        this.$root.getJson(`/api/good/`)
            .then(data => {
                this.goodImg = data.img.big;
            });
    },
    template:`<div class="product_png">
        <a href="img/product.png" target="_blank" class="product_open"><img :src="goodImg" alt="good"></a>
        <a href="#" class="turn_left absolute"><img src="img/arrow_left.jpg" alt="arrow_left"></a>
        <a href="#" class="turn_right absolute"><img src="img/arrow_right.jpg" alt="arrow_right"></a>
    </div>`
});

Vue.component('description-js', {
    data() {
        return {
            good: {},
            quantity: 1,
            cartAPI: this.$root.$refs.header.$refs.cart,
        }
    },
    mounted() {
        this.$root.getJson(`/api/good/`)
            .then(data => {
                this.good = data;
            });
    },
    template:`<section class="description">
        <h5 class="description_collection">WOMEN COLLECTION</h5>
        <div class="description_sliders">
            <div class="description_slider"></div>
            <div class="description_slider description_slider_active"></div>
            <div class="description_slider"></div>
        </div>
        <h4 class="description_name">{{ good.product_name }}</h4>
        <p class="description_content">Compellingly actualize fully researched processes before proactive outsourcing.
            Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize
            parallel
            core competencies rather than exceptional portals.</p>
        <div class="description_specifications"><span class="description_specifications_name">MATERIAL:</span> <span
                class="description_specification">COTTON</span> <span
                class="description_specifications_name">DESIGNER:</span> <span
                class="description_specification">BINBURHAN</span></div>
        <h3 class="description_price">{{ good.price }} ₽</h3>
        <form action="#" class="description_form">
            <div class="description_form_options">
                <div class="description_form_option">
                    <h5 class="description_form_option_choice_name">CHOOSE COLOR</h5>
                    <label>
                        <select name="color" class="description_form_choice">
                            <option>Red</option>
                            <option>Green</option>
                            <option>Black</option>
                            <option>Blue</option>
                            <option>White</option>
                            <option>Yellow</option>
                        </select>
                    </label>
                </div>
                <div class="description_form_option">
                    <h5 class="description_form_option_choice_name">CHOOSE SIZE</h5>
                    <label for="color"></label><select name="color" id="color" class="description_form_choice">
                    <option>XLL</option>
                    <option>SM</option>
                    <option>XXL</option>
                    <option>M</option>
                    <option>X</option>
                    <option>L</option>
                </select>
                </div>
                <div class="description_form_option">
                    <h5 class="description_form_option_choice_name">QUANTITY</h5>
                    <label>
                        <input type="number" class="description_form_quantity" min="1" placeholder="1" v-model="quantity">
                    </label></div>
            </div>
            <button class="description_add" @click="cartAPI.addGood(good, quantity)"><img src="img/cart_red.jpg" alt="cart_red"
                                                               style="margin-right: 15px"> Add to Cart
            </button>
        </form>
    </section>`
})

Vue.component('offers-js', {
    data(){
        return{
            catalog: [],
            good: null,
            index: -1,
            offerItems: []
        }
    },
    mounted() {
        this.$root.getJson(`/api/catalog/`)
            .then(data => {
                this.catalog = data;
                this.$root.getJson(`/api/good/`)
                    .then(data => {
                        this.good = data;
                        find = this.catalog.find(el => el.id_product === this.good.id_product);
                        this.index = this.catalog.indexOf(find);
                        if (this.index > -1) {
                            this.catalog.splice(this.index, 1)
                        }
                        for(let i = 0; i < 4; i++) {
                            this.index = Math.floor(Math.random()*this.catalog.length);
                            this.offerItems.push(this.catalog[this.index]);
                            this.catalog.splice(this.index, 1);
                        }
                    })
            });
    },
    template:`
    <section class="offer center">
        <h3 class="offer_h3">you may like also</h3>
        <div class="offers">
            <offer-item
                v-for="item of offerItems" 
                :key="item.id_product"
                :offer-item="item">
            </offer-item>
        </div>
    </section>
    `
})

Vue.component('offer-item', {
    props:['offerItem'],
    data() {
        return {
            mainAPI: this.$root,
        }
    },
    template:`<a href="single_page.html" class="offer_link" @click="mainAPI.open(offerItem)">
                <div class="offer_block">
                    <img class="offer_img" :src="offerItem.img.normal" alt="offer">
                    <h4 class="offer_name">{{ offerItem.product_name }}</h4>
                    <h4 class="offer_price">{{ offerItem.price }}</h4>
                </div>

            </a>`
})