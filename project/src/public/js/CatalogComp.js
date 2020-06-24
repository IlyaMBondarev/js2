const catalogItem = {
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
};

const catalogJs = {
    data(){
        return {
            products: [],
        }
    },
    components: { catalogItem },
    mounted(){
        this.$root.getJson('/api/catalog')
            .then(data => {
                for(let el of data){
                    this.products.push(el);
                }
            });
    },
    template: `
        <div class="products">
            <catalogItem ref="catalog-item" v-for="item of products" :key="item.id_product" :item="item"></catalogItem>
        </div>
    `
};

export default catalogJs;
