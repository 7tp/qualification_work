import * as activate from './activate-blocks-button';
import {getArrElements, showMore} from './cut-array';
import NewsList from './news-list';
import Validate from './validation';

const newsContainer = document.querySelector('.result__grid');
const showMoreButton = document.querySelector('.result__button-more');
const newsLoading = document.querySelector('.result__loading');
const resultNone = document.querySelector('.result__not-found');
const newsGrid = document.querySelector('.result__is-found');

//Подготовка для разблокировки формы
const question = document.querySelector('input[name=news_question]');
const newsButton = document.querySelector('.search__form-button');
const valid = new Validate(newsButton, question);

//Обрабатываем полученный массив
export default function getCards(cards) {
  cards.loadData()
  .then(res => {
    let cutArr = [];

    activate.loading(newsLoading, false); //Отключаем прелоудер
    //Разблокируем поля ввода после отправки запроса
    question.removeAttribute('disabled');
    valid.isValid();

    if (res.totalResults === 0) { //Если ничего не найдено показываем блок нулевого результата
      activate.noResult(resultNone, true);
      activate.newsResult(newsGrid, false);
      sessionStorage.clear();
      localStorage.clear();
    } else {
      activate.noResult(resultNone, false);
      activate.newsResult(newsGrid, true)
    }

    //Сохраняем новости для обновления страницы
    sessionStorage.setItem('newsCards', JSON.stringify(res.articles));

    //Сохраняем информацию для аналитики
    localStorage.setItem('newsCards', JSON.stringify(res.articles));
    localStorage.setItem('newsInAWeek', res.totalResults);

    //Добавляем новости на сайт
    cutArr = getArrElements(res.articles);
    const newsList = new NewsList(newsContainer, cutArr);
    newsList.showNews();

    //Показывем/скрываем кнопку "Показать еще"
    activate.activateShowMore(showMoreButton, res.articles.length);

    //Добавляем следующие элементы при нажатии на кнопку "Показать еще"
    showMore(showMoreButton, cutArr, res.articles);
  })
  .catch(
    err => {
      console.log(err);
      sessionStorage.clear();
      localStorage.clear();
      activate.noResult(resultNone, true);
      activate.newsResult(newsGrid, false);
      document.querySelector('.result__not-found-title').textContent = '';
      let text = document.querySelector('.result__not-found-text');
      text.setAttribute('style', 'margin-top: 0');
      text.textContent = 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.';
    }
  )
}
