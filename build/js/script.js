'use strict';

const headerNav = document.querySelector('.header__nav');
    const headerToggle = document.querySelector('.header__toggle');
    const body = document.querySelector('body');
    const headerLinks = document.querySelectorAll('.header__link');
    headerNav.classList.remove('header__nav--nojs');

    headerToggle.addEventListener('click', () =>{
      if (headerNav.classList.contains('header__nav--closed')) {
      headerNav.classList.remove('header__nav--closed');
      headerNav.classList.add('header__nav--opened');
      body.classList.add('fixed-page');
      } else {
        headerNav.classList.remove('header__nav--opened');
        body.classList.remove('fixed-page');
        headerNav.classList.add('header__nav--closed');
      }
    } );

    headerLinks.forEach(item => {
      item.addEventListener('click', () =>{
        headerNav.classList.remove('header__nav--opened');
        body.classList.remove('fixed-page');
        headerNav.classList.add('header__nav--closed');
      });
    });

