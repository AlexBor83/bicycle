'use strict';

// Мобильное меню
var headerNav = document.querySelector('.header__nav');
var headerToggle = document.querySelector('.header__toggle');
var body = document.querySelector('body');
var headerLinks = document.querySelectorAll('.header__link');
headerNav.classList.remove('header__nav--nojs');

headerToggle.addEventListener('click', function () {
  if (headerNav.classList.contains('header__nav--closed')) {
    headerNav.classList.remove('header__nav--closed');
    headerNav.classList.add('header__nav--opened');
    body.classList.add('fixed-page');
  } else {
    headerNav.classList.remove('header__nav--opened');
    body.classList.remove('fixed-page');
    headerNav.classList.add('header__nav--closed');
  }
});

headerLinks.forEach(function (item) {
  item.addEventListener('click', function () {
    headerNav.classList.remove('header__nav--opened');
    body.classList.remove('fixed-page');
    headerNav.classList.add('header__nav--closed');
  });
});

// Валидация формы
var form = document.querySelector('form');
var inputs = form.querySelectorAll('input');
var inputTel = form.querySelector('input[name=tel]');

form.noValidate = true;

// запрет на ввод всего кроме цифр в поле с телефоном

inputTel.addEventListener('input', function (target) {
  target.value = target.value.replace(/[^()+-\d]/g, '');
});

// Отправка формы

form.addEventListener('submit', function (evt) {
  evt.preventDefault();

  var error = formValidate();

  if (error === 0) {
    // Нужно доделать отправку формы на сервер
  }
});

function formValidate() {
  var error = 0;

  inputs.forEach(function (input) {
    formRemoveError(input);
    if (input.value === '') {
      formAddError(input);
      error++;
    }
  });

  return error;
}

function formAddError(input) {
  input.classList.add('form__error');
}

function formRemoveError(input) {
  input.classList.remove('form__error');
}
