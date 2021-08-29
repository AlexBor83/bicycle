'use strict';

// Мобильное меню
var headerNav = document.querySelector('.header__nav');
var headerToggle = document.querySelector('.header__toggle');
var body = document.querySelector('body');
var headerLinks = document.querySelectorAll('.header__link');

var closeNav = function () {
  headerNav.classList.remove('header__nav--opened');
  body.classList.remove('fixed-page');
  headerNav.classList.add('header__nav--closed');
};

var openNav = function () {
  headerNav.classList.remove('header__nav--closed');
  headerNav.classList.add('header__nav--opened');
  body.classList.add('fixed-page');
};

var menuController = function () {
  if (!headerNav) {
    return;
  }

  headerNav.classList.remove('header__nav--nojs');

  headerToggle.addEventListener('click', function () {
    if (headerNav.classList.contains('header__nav--closed')) {
      openNav();
      return;
    }
    closeNav();
  });

  headerLinks.forEach(function (item) {
    item.addEventListener('click', function () {
      closeNav();
    });
  });
};

// Валидация формы
var form = document.querySelector('form');

var initFormValidate = function () {
  if (!form) {
    return;
  }

  var inputs = form.querySelectorAll('input');
  var inputTel = form.querySelector('input[name=tel]');

  form.noValidate = true;

  // запрет на ввод всего кроме цифр в поле с телефоном

  inputTel.addEventListener('input', function (evt) {
    evt.target.value = evt.target.value.replace(/[^()+-\d]/g, '');
  });

  // Отправка формы

  form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    if (formValidate()) {
      setTimeout(function () {
        evt.target.reset();
      }, 500);
    }
  });

  function formValidate() {
    var flag = true;
    inputs.forEach(function (input) {
      input.classList.remove('form__error');
      if (!input.value) {
        input.classList.add('form__error');
        flag = false;
      }
    });
    return flag;
  }
};

initFormValidate();
menuController();

// Плавный скрол

var move = new window.MoveTo({
  duration: 1000,
  easing: 'easeOutQuart',
});

var initInnerLinks = function () {

  var triggers = document.querySelectorAll('.js-trigger-link');

  if (triggers.length) {
    triggers.forEach(function (trigger) {
      move.registerTrigger(trigger);
      document.activeElement.blur();
    });
  }
};

initInnerLinks();
