'use strict'
import "./pages/index.css";

const headerUnderlineWhite = document.querySelectorAll('.header__link_white');
headerUnderlineWhite[1].style.cssText ='border-bottom: none';

const questionForm = document.forms.news;
const question = questionForm.elements.news_question;
const newsButton = document.querySelector('.search__form-button');
const newsContainer = document.querySelector('.result__grid');
const showMoreButton = document.querySelector('.result__button-more');

question.value = sessionStorage.getItem('question');
if (!!sessionStorage.question) {
  activate.allResults(true);

  const newsArray = JSON.parse(localStorage.getItem('newsCards'));
  let cutArr = getArrElements(newsArray);
  new NewsList(newsContainer, cutArr);
  activate.activateShowMore(newsArray.length, cutArr.length);

  activate.allResults(true); //Показываем блок результата поиска
  activate.newsResult(true);

  showMore(showMoreButton, cutArr, newsArray);
}

questionForm.addEventListener('submit', showNews);

function showNews(event) {
  event.preventDefault();
  //Очищаем данные в браузере, если они существовали
  sessionStorage.clear();
  localStorage.clear();

  let q = question.value;
  q = question.value.replace(/\s+/gi, ' AND ');

  //Сохраняем запрос для обновления страницы
  sessionStorage.setItem('question', q.replace(/\sAND\s/gi, ' ').replace(/^\w|[а-я]/i, key => key.toUpperCase()));

  //Сохраняем запрос для аналитики
  localStorage.setItem('question', sessionStorage.getItem('question'));

  //Получаем массив новостей
  const news = new NewsApi(newsUrl, q, date, apiKey);
  newsContainer.textContent='';

  activate.noResult(false); //Скрываем блок нулевого результата
  activate.newsResult(false); //Скрываем блок +результатов поиска
  activate.loading(true); //Включаем прелоудер
  activate.allResults(true); //Показываем блок результата поиска

  //Обрабатываем полученный массив
  getCards(news);
}

//Возвращаем значения блока "Ничего не найдено"
document.querySelector('.result__not-found-title').textContent = 'Ничего не найдено';
let text = document.querySelector('.result__not-found-text');
text.removeAttribute('style', 'margin-top: 0');
text.textContent = 'К сожалению по вашему запросу ничего не найдено.';

//Валидация формы
question.addEventListener('focus', () => {new Validate(newsButton, question)});
question.addEventListener('blur', () => {
  document.querySelector('.search__error').textContent = "";
  newsButton.removeAttribute('disabled');
  newsButton.classList.remove('button_disabled');
})

import {newsUrl, apiKey} from './js/variables';
import {date} from './js/time-interval';
import getCards from './js/get-cards';
import Validate from './js/class-validation';
import * as activate from './js/activate-blocks-button';
import {getArrElements, showMore} from './js/cut-array';
import NewsApi from './js/class-news-api';
import NewsList from "./js/class-news-list";

