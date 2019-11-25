'use strict'
import "./pages/analyst.css";

const headerUnderlineBlack = document.querySelectorAll('.header__link_black');

headerUnderlineBlack.forEach(function(underline) {
  underline.style.cssText ='border-bottom: none';
});

