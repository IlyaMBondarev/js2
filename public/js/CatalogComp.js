Vue.component('catalog-js', {
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
        this.$root.getJson('/api/catalog')
            .then(data => {
                for(let el of data){
                    this.products.push(el);
                    this.filtered.push(el);
                }
            });
    },
    template: `
        <div class="products">
            <catalog-item ref="catalog-item" v-for="item of filtered" :key="item.id_product" :item="item"></catalog-item>
        </div>
    `
});
Vue.component('catalog-item', {
    props: ['item'],
    data() {
        return {
            mainAPI: this.$root,
            cartAPI: this.$root.$refs.header.$refs.cart,
        };
    },
    methods: {
        open(item){
            this.$root.openJson(`/api/open/${item.id_product}`)
                .then(data => {
                    if (data.result !== 1) {
                    }
                })
        }
    },
    template: `
                <article>
                    <a href="single_page.html" class="product_link_9 product_link" @click="mainAPI.open(item)">
                        <div class="product">
                            <img :src="item.img.normal" alt="product" class="product_img">
                            <h5 class="product_name">{{ item.product_name }}</h5>
                            <h5 class="product_prise red">{{ item.price }}</h5>
                        </div>
                    </a>
                </article>
    `
});
