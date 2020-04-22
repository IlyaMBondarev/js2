const products = [
  {id: 1, title: 'Notebook', price: 20000},
  {id: 2, title: 'Mouse', price: 1500},
  {id: 3, title: 'Keyboard', price: 5000},
  {id: 4, title: 'Gamepad', price: 4500},
];

const renderProduct = (title, price, presence = "В наличии") => {
  return `<div class="product-item">
            <h2>${title}</h2>
            <p>Цена: ${price} руб.</p>
            <p>${presence}</p>
            <button class="buy-btn">Добавить в корзину</button>
          </div>`;
};

const renderProducts = (list) => { //Запятая выводилась, так как innerHTML выводит абсолютно весь текст, включая запятую между элементами массива
  list.forEach(good => document.querySelector('.products').insertAdjacentHTML('beforeend', renderProduct(good.title, good.price)))
};

let btnCart = document.querySelector(".btn-cart");

btnCart.addEventListener('click', function () {
  alert("Пока ничего в корзину не добавить, ведутся технические работы")
});

renderProducts(products);
