const app = new Vue({
  el: '#app',
  data: {
    API: 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses',
    catalogUrl: '/catalogData.json',
    cartUrl: '/getBasket.json',
    addProductUrl: '/addToBasket.json',
    removeProductUrl: '/deleteFromBasket.json',
    cartProducts: [],
    products: [],
    isVisibleCart: false,
    imgCatalog: 'https://placehold.it/200x150',
    imgCartItem: 'https://placehold.it/50x100',
    searchLine: '',
  },
  methods: {
    getJson(url) {
      return fetch(url)
        .then(result => result.json())
        .catch(error => {
          console.log(error);
        })
    },
    addProduct(product) {
      this.getJson(`${this.API + this.addProductUrl}`)
        .then(data => {
          if (data.result === 1) {
            let find = this.cartProducts.find(item => item.id_product === product.id_product);
            if (find) {
              find.quantity++;
            } else {
              let item = {
                id_product: product.id_product,
                price: product.price,
                product_name: product.product_name,
                quantity: 1
              }
              this.cartProducts.push(item);
            }
          } else {
            alert('Error');//Помидорка.в.лицей
          }
        })
    },
    removeProduct(product) {
      this.getJson(`${this.API + this.removeProductUrl}`)
        .then(data => {
          if (data.result === 1) {
            product.quantity--;
            if (product.quantity === 0) {
              let find = this.cartProducts.find(item => item.id_product === product.id_product);
              this.cartProducts.splice(this.cartProducts.indexOf(find), 1);
            }
          } else {
            alert('Error');//Помидорка.в.лицей
          }
        })
    },
    cartOpenClose() {
      this.isVisibleCart = !this.isVisibleCart;
    },
    filterGoods() {
      const regexp = new RegExp(this.searchLine, 'i');
      this.filtered = this.products.filter(product => regexp.test(product.product_name));
      this.products.forEach(item => {
        const block = this.products.find(product => product.id_product === item.id_product);
        block.isHidden = !this.filtered.includes(item);
      })
    }
  },
  mounted() {
    this.getJson(`${this.API + this.catalogUrl}`)
      .then(data => {
        for (let el of data) {
          el.isHidden = false;
          this.products.push(el);
        }
      });
    this.getJson(`${this.API + this.cartUrl}`)
      .then(data => {
        for (let el of data.contents) {
          this.cartProducts.push(el);
        }
      });
  },
});
