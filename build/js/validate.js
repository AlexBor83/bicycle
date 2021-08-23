'use strict';

const form = document.querySelector('form');
    const inputs = form.querySelectorAll('input');
    const inputTel = form.querySelector('input[name=tel]');
    const formButton = form.querySelector('.form__button');
    console.log(inputs[1]);

    form.noValidate = true;

    // запрет на ввод всего кроме цифр в поле с телефоном

    inputTel.addEventListener('input', ({target}) => {
        target.value = target.value.replace(/[^\d]/g, '');
      });

    // Отправка формы

     form.addEventListener('submit', (evt) => {
      evt.preventDefault();

      console.log('Форма отправлена');

      let error = formValidate(form);

      if (error === 0) {
        // Нужно доделать отправку формы на сервер
        alert('Форма отправилась');
      } else {
        alert('Заполите обязательные поля');
      }

    });

    function formValidate(form) {
      let error = 0;

      inputs.forEach(input => {
        formRemoveError(input);
        if (input.value === '') {
          formAddError (input);
          error++;
        }
      });

      return error;
    }

    function formAddError (input) {
      input.classList.add('form__error');
    }

    function formRemoveError(input) {
      input.classList.remove('form__error');
    }
