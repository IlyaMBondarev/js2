const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
  el: '#app',
  data: {

  },
  methods: {
    getJson(url){
      return fetch(url)
          .then(result => result.json())
          .catch(error => {
            console.log(error);
            this.$refs.error.hidden = false;
          })
    },
    focus: function(userSearch) {
        console.log(this.$refs.products);
        this.$refs.products.filters(userSearch);
    }
  },
  mounted() {
    console.log(this);
  }
});

