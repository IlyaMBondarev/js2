Vue.component('error', {
    data(){
        return {
            hidden: true,
        };
    },
    template: `
        <h1 class="error" :class="hidden===true ? 'hidden' : ''">Ошибка на сервере. Ничего не найдено.</h1>
    `
});