const app = new Vue({
    el: '#app',
    data: {
        userSearch: '',
    },
    methods: {
        getJson(url){ // открытие файла и использование информации в нем для отображения
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    console.error(error);
                })
        },
        postJson(url, data) { // создание нового товара в корзине
            return fetch(url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }).then(result => result.json())
                .catch(error => {
                    console.error(error);
                });
        },
        putJson(url, data) { // увеличение товара в корзине на 1
            return fetch(url, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }).then(result => result.json())
                .catch(error => {
                    console.error(error);
                });
        },
        delJson(url, data) { // уменьшение товара из корзины на 1 или удаление, если товаров не осталось
            return fetch(url, {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }).then(result => result.json())
                .catch(error => {
                    console.error(error);
                });
        },
        changeJson(url, data) { // изменение количества товара в корзине на произвольное число
            return fetch(url, {
                method: 'CHECKOUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }).then(result => result.json())
                .catch(error => {
                    console.error(error);
                });
        },
        clearJson(url) { // полное очищение корзины
            return fetch(url, {
                method: 'PURGE',
                headers: {
                    "Content-Type": "application/json"
                },
            }).then(result => result.json())
                .catch(error => {
                    console.error(error);
                });
        },
        openJson(url) { // открытие страницы определенного товара
            return fetch(url).then(result => result.json())
                .catch(error => {
                    console.error(error);
                });
        }
    },
    mounted() {
        console.log(this);
    }
});

