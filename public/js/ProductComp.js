Vue.component('products-js', {
    data(){
        return {
            catalogUrl: '',
            products: [],
            filtered: [],
        }
    },
    methods: {
        filter(value){
            let regexp = new RegExp(value, 'i');
            this.filtered = this.products.filter(el => regexp.test(el.product_name));
        }
    },
    mounted(){
        this.$root.getJson('/api/products')
            .then(data => {
                for(let el of data){
                    this.products.push(el);
                    this.filtered.push(el);
                }
            });
    },
    template: `
        <div class="product_menu center">
        <h3 class="product_h3">Featured Items</h3>
        <h6 class="product_h6">Shop for items based on what we featured in this week</h6>
        <div class="products">
            <product ref="product" v-for="item of filtered" :key="item.id_product" :product="item"></product></div>
            <a href="#" class="button product_button">Browse All Product<img class="margin_left_8"
                                                                         src="img/arrow_right_white.jpg"
                                                                         alt="arrow_right"></a>
        </div>
    `
});
Vue.component('product', {
    props: ['product'],
    data() {
      return {
          mainAPI: this.$root,
          cartAPI: this.$root.$refs.header.$refs.cart,
      };
    },

    template: `
            <article class="product_hover_article">
                <a href="single_page.html" class="product_link_1 product_link" @click="mainAPI.open(product)">
                    <div class="product_1 product">
                        <div class="product-hover"><img src="img/product_bg_hover.jpg" alt=""
                                                        class="product_bg_hover absolute">
                            <img :src="product.img.normal" alt="product" class="product_img"></div>
                        <h5 class="product_name">{{product.product_name}}</h5>
                        <h5 class="product_prise red">{{product.price}}₽</h5></div>
                </a><button href="#" class="product_hover product_hover_button" @click="cartAPI.addProduct(product)"><img src="img/cart_white.jpg" alt="cart_white"><span
                                    class="margin_left_8">Add to Cart</span></button>
            </article>
    `
});
