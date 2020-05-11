Vue.component('searchLine', {
    data(){
        return{
            userSearch: '',
        }
    },
    template:  `<div class="searchLine">
                    <form action="#" class="search-form" @submit.prevent="filter">
                        <input type="text" class="search-field" v-model="userSearch">
                        <userSearch :userSearch="userSearch"></userSearch>
                    </form>
                </div>`
});

Vue.component('userSearch', {
    props: ['userSearch'],
    template: `<button class="btn-search" @click="$root.focus(userSearch)" type="submit">
                   <i class="fas fa-search"></i>
               </button>`,
})