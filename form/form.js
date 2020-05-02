'use strict';

document.querySelector("button").addEventListener('click',  (event) => {
    event.preventDefault();
    let name = document.querySelector(".name");
    let phone = document.querySelector(".phone");
    let mail = document.querySelector(".mail");
    let card = document.querySelector(".bank-card");
    let warning = document.querySelector(".warning");
    warning.textContent="";
    let warnings = 0;


    //Проверка имени
    if(/[^a-zа-я]+/ig.test(name.value) || name.value==="") {
        warning.textContent += "Имя должно состоять из букв. ";
        warning.classList.remove("hidden");
        name.classList.add("warning-active");
        warnings++;
    } else {
        name.classList.remove("warning-active");
    }


    //Проверка телефона
    if (!/\+/ig.test(phone.value[0]) || !/\(/ig.test(phone.value[2]) || !/\)/ig.test(phone.value[6]) || !/-/ig.test(phone.value[11]) || /\D/ig.test(phone.value[1||3||4||5||7||8||9||10||12||13||14]) || phone.value[15]!==undefined) {
        warning.textContent += "Телефон должен быть строго в виде +7(000)0000-000. ";
        warning.classList.remove("hidden");
        phone.classList.add("warning-active");
        warnings++;
    } else {
        phone.classList.remove("warning-active");
    }


    //Проверка почты
    if (!/@mail.ru$/ig.test(mail.value) || mail.value[8]===undefined) {
        warning.textContent += "Почта должна оканчиваться на @mail.ru. ";
        warning.classList.remove("hidden");
        mail.classList.add("warning-active");
        warnings++;
    } else {
        mail.classList.remove("warning-active");
    }


    //Проверка  банковской карты (свой эксперимент)
    if (/\D/ig.test(card.value) || card.value[12]!==undefined || card.value==="" || card.value[11]===undefined) {
        warning.textContent += "Карточка должна состоять из 12 цифр.";
        warning.classList.remove("hidden");
        card.classList.add("warning-active");
        warnings++;
    } else {
        card.classList.remove("warning-active");
    }


    // ошибок нет - скрываем окно предупреждения на случай, если оно было не скрыто
    if (warnings === 0) {
        warning.classList.add("hidden")
    }
})