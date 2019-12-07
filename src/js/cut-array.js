'use strict';
const newsContainer = document.querySelector('.result__grid');

//Получаем три/два элемента из массива в зависимости от ширины экрана
function getArrElements(array) {
  if ((window.innerWidth > 534)&&(window.innerWidth < 1280)) {
    return array.splice(0, 4);
  } else {
    return array.splice(0, 3);
  }
}

//Показать следующую строку новостей при нажатии на кнопку "Показать еще"
function showMore(button, cutArr, newsArray) {
  button.onclick = function() {
    cutArr = getArrElements(newsArray);
    //Если элементов массива не осталось, отключаем кнопку "Показать еще"
    activateShowMore(newsArray.length);
    new NewsList(newsContainer, cutArr);
  }
}

export {getArrElements, showMore}

import {activateShowMore} from './activate-blocks-button';
import NewsList from "./class-news-list";
