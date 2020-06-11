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
})