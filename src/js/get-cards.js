'use strict';
const newsContainer = document.querySelector('.result__grid');
const showMoreButton = document.querySelector('.result__button-more');

//Обрабатываем полученный массив
export default function getCards(cards) {
  cards.loadData()
  .then(res => {
    let cutArr = [];
    
    activate.loading(false); //Отключаем прелоудер

    if (res.totalResults === 0) { //Если ничего не найдено показываем блок нулевого результата
      activate.noResult(true);
      activate.newsResult(false);
      sessionStorage.clear();
      localStorage.clear();
    } else {
      activate.noResult(false);
      activate.newsResult(true)
    }

    //Сохраняем новости для обновления страницы
    sessionStorage.setItem('newsCards', JSON.stringify(res.articles));

    //Сохраняем информацию для аналитики
    localStorage.setItem('newsInAWeek', res.articles.length);
    localStorage.setItem('newsCards', sessionStorage.getItem('newsCards'));

    cutArr = getArrElements(res.articles);
    //Добавляем новости на сайт
    new NewsList(newsContainer, cutArr);

    //Показывем/скрываем кнопку "Показать еще"
    activate.activateShowMore(res.articles.length);

    //Добавляем следующие элементы при нажатии на кнопку "Показать еще"
    showMore(showMoreButton, cutArr, res.articles);
  })
  .catch(
    err => {
      console.log(err);
      sessionStorage.clear();
      localStorage.clear();
      activate.noResult(true);
      activate.newsResult(false);
      document.querySelector('.result__not-found-title').textContent = '';
      let text = document.querySelector('.result__not-found-text');
      text.setAttribute('style', 'margin-top: 0');
      text.textContent = 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.';
    }
  )
}

import * as activate from './activate-blocks-button';
import {getArrElements, showMore} from './cut-array';
import NewsList from './class-news-list';
