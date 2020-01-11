'use strict'
import "./pages/index.css";
import {NEWS_URL, API_KEY} from './js/constants/variables';
import {DATE_INTERVAL} from './js/utils/time-interval';
import getCards from './js/utils/get-cards';
import Validate from './js/utils/validation';
import * as activate from './js/utils/activate-blocks-button';
import {getArrElements, showMore} from './js/utils/cut-array';
import NewsApi from './js/modules/news-api';
import NewsList from './js/components/news-list';

const questionForm = document.querySelector('form[name=news]');
const question = document.querySelector('input[name=news_question]');
const newsButton = document.querySelector('.search__form-button');
const newsContainer = document.querySelector('.result__grid');
const showMoreButton = document.querySelector('.result__button-more');
const resultSection = document.querySelector('.result');
const newsLoading = document.querySelector('.result__loading');
const resultNone = document.querySelector('.result__not-found');
const newsGrid = document.querySelector('.result__is-found');

//Проверка на валидность формы
const valid = new Validate(newsButton, question);
valid.listener();
question.addEventListener('blur', () => valid.isValid());

question.value = localStorage.getItem('question');

//Если в хранилище браузера есть данные, показываем результаты предыдущего поиска на странице
if (!!localStorage.getItem('question')) {
  const newsArray = JSON.parse(localStorage.getItem('newsCards'));
  const cutArr = getArrElements(newsArray);

  const newsList = new NewsList(newsContainer, cutArr);
  newsList.showNews();
  activate.activateShowMore(showMoreButton, newsArray.length);

  activate.allResults(resultSection, true); //Показываем блок результата поиска
  activate.newsResult(newsGrid, true);

  showMore(showMoreButton, cutArr, newsArray);
}

//Новый поиск новостей
questionForm.addEventListener('submit', showNews);

function showNews(event) {
  event.preventDefault();
  //Блокируем поля ввода во время отправки запроса
  question.setAttribute('disabled', true);
  valid.notValid();

  //Очищаем данные в браузере, если они существовали
  localStorage.clear();

  const q = question.value.replace(/\s+/gi, ' AND ');

  //Получаем массив новостей
  const news = new NewsApi(NEWS_URL, q, DATE_INTERVAL, API_KEY);

  //Сохраняем запрос для аналитики
  localStorage.setItem('question', q.replace(/\sAND\s/gi, ' ').replace(/^\w|[а-я]/i, key => key.toUpperCase()));

  newsContainer.textContent='';

  activate.noResult(resultNone, false); //Скрываем блок нулевого результата
  activate.newsResult(newsGrid, false); //Скрываем блок +результатов поиска
  activate.loading(newsLoading, true); //Включаем прелоудер
  activate.allResults(resultSection, true); //Показываем блок результата поиска

  //Обрабатываем полученный массив
  getCards(news);
}

//Возвращаем значения блока "Ничего не найдено"
document.querySelector('.result__not-found-title').textContent = 'Ничего не найдено';
const text = document.querySelector('.result__not-found-text');
text.removeAttribute('style', 'margin-top: 0');
text.textContent = 'К сожалению по вашему запросу ничего не найдено.';
question.removeAttribute('disabled', true);
valid.isValid();

//Применение проверки на валидность формы
/*question.addEventListener('focus', function() {
  const listener = valid.listener.bind(valid);
  listener();
});
question.addEventListener('blur', function() {
  const remover = valid.removeListener.bind(valid);
  remover();
  valid.isValid();
});*/
