'use string'

//Показать/скрыть блок результата поиска
function allResults(yesResult) {
  const resultSection = document.querySelector('.result')
  if (yesResult) {
    resultSection.classList.remove('result__hide')
  } else {
    resultSection.classList.add('result__hide')
  }
}

//Включение/выключение прелоудера
function loading(isLoading) {
  const newsLoading = document.querySelector('.result__loading');
  if (isLoading) {
    newsLoading.classList.remove('result__hide')
  } else {
    newsLoading.classList.add('result__hide')
  }
}

//Показать/скрыть блок нулевого поиска
function noResult(notFound) {
  const resultNone = document.querySelector('.result__not-found');
  if (notFound) {
    resultNone.classList.remove('result__hide')
  } else {
    resultNone.classList.add('result__hide')
  }
}

//Показать/скрыть результаты поиска
function newsResult(isFound) {
  const newsGrid = document.querySelector('.result__is-found');
  if (isFound) {
    newsGrid.classList.remove('result__hide')
  } else {
    newsGrid.classList.add('result__hide')
  }
}

//Активная/неактивная кнопка "Показать еще"
function activateShowMore(arrayLength) {
  if (arrayLength > 0) {
    document.querySelector('.result__button-more').classList.remove('result__hide')
  } else {
    document.querySelector('.result__button-more').classList.add('result__hide')
  }
}

export {allResults, loading, noResult, newsResult, activateShowMore}
