//Показать/скрыть блок результата поиска
function allResults(resultSection, yesResult) {
  if (yesResult) {
    resultSection.classList.remove('result__hide')
  } else {
    resultSection.classList.add('result__hide')
  }
}

//Включение/выключение прелоудера
function loading(newsLoading, isLoading) {
  if (isLoading) {
    newsLoading.classList.remove('result__hide')
  } else {
    newsLoading.classList.add('result__hide')
  }
}

//Показать/скрыть блок нулевого поиска
function noResult(resultNone, notFound) {
  if (notFound) {
    resultNone.classList.remove('result__hide')
  } else {
    resultNone.classList.add('result__hide')
  }
}

//Показать/скрыть результаты поиска
function newsResult(newsGrid, isFound) {
  if (isFound) {
    newsGrid.classList.remove('result__hide')
  } else {
    newsGrid.classList.add('result__hide')
  }
}

//Активная/неактивная кнопка "Показать еще"
function activateShowMore(buttonShowMore, arrayLength) {
  if (arrayLength > 0) {
    buttonShowMore.classList.remove('result__hide')
  } else {
    buttonShowMore.classList.add('result__hide')
  }
}

export {allResults, loading, noResult, newsResult, activateShowMore}
