import {activateShowMore} from './activate-blocks-button';
import NewsList from "../components/news-list";
const wideWindowWidth = 768;
const veryThinWindowWidth = 534;
const cardsForWideWidth = 3;
const cardForThinWidth = 4;
const newsContainer = document.querySelector('.result__grid');

//Получаем три/два элемента из массива в зависимости от ширины экрана
function getArrElements(array) {
  if ((window.innerWidth > veryThinWindowWidth)&&(window.innerWidth < wideWindowWidth)) {
    return array.splice(0, cardForThinWidth);
  } else {
    return array.splice(0, cardsForWideWidth);
  }
}

//Показать следующую строку новостей при нажатии на кнопку "Показать еще"
function showMore(button, cutArr, newsArray) {
  button.onclick = function() {
    cutArr = getArrElements(newsArray);
    //Если элементов массива не осталось, отключаем кнопку "Показать еще"
    activateShowMore(button, newsArray.length);
    const newsList = new NewsList(newsContainer, cutArr);
    newsList.showNews();
  }
}

export {getArrElements, showMore}
