"use strict";

//Мобильное меню
const headerNav = document.querySelector(".header__nav");
const headerToggle = document.querySelector(".header__toggle");
const body = document.querySelector("body");
const headerLinks = document.querySelectorAll(".header__link");
headerNav.classList.remove("header__nav--nojs");

headerToggle.addEventListener("click", () => {
  if (headerNav.classList.contains("header__nav--closed")) {
    headerNav.classList.remove("header__nav--closed");
    headerNav.classList.add("header__nav--opened");
    body.classList.add("fixed-page");
  } else {
    headerNav.classList.remove("header__nav--opened");
    body.classList.remove("fixed-page");
    headerNav.classList.add("header__nav--closed");
  }
});

headerLinks.forEach((item) => {
  item.addEventListener("click", () => {
    headerNav.classList.remove("header__nav--opened");
    body.classList.remove("fixed-page");
    headerNav.classList.add("header__nav--closed");
  });
});

//Валидация формы
const form = document.querySelector("form");
const inputs = form.querySelectorAll("input");
const inputTel = form.querySelector("input[name=tel]");
const formButton = form.querySelector(".form__button");

form.noValidate = true;

// запрет на ввод всего кроме цифр в поле с телефоном

inputTel.addEventListener("input", ({ target }) => {
  target.value = target.value.replace(/[^+\-\(\)d]/g, "");
});

// Отправка формы

form.addEventListener("submit", (evt) => {
  evt.preventDefault();

  let error = formValidate(form);

  if (error === 0) {
    // Нужно доделать отправку формы на сервер
    alert("Форма отправилась");
  } else {
    alert("Заполите обязательные поля");
  }
});

function formValidate(form) {
  let error = 0;

  inputs.forEach((input) => {
    formRemoveError(input);
    if (input.value === "") {
      formAddError(input);
      error++;
    }
  });

  return error;
}

function formAddError(input) {
  input.classList.add("form__error");
}

function formRemoveError(input) {
  input.classList.remove("form__error");
}
