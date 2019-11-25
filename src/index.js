'use strict'
import "./pages/index.css";
const serverUrl = NODE_ENV === 'development' ? 'http://praktikum.tk/03_diploma_front' : 'https://praktikum.tk/03_diploma_front';

const headerUnderlineWhite = document.querySelectorAll('.header__link_white');

headerUnderlineWhite[1].style.cssText ='border-bottom: none';
