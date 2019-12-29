'use strict'
import "./pages/analyst.css";
const aboutProject = document.querySelector('.about-project');
const youAsked = document.querySelector('.about-project__title');
const statistic = document.querySelector('.about-project__statistic');
const analyst = document.querySelector('.analyst__grid');
const noQuestion = document.createElement('h2');

//Если есть данные по аналитике
if (!!localStorage.getItem('question')) {

  if (noQuestion.parentNode === aboutProject) {
    aboutProject.removeChild(noQuestion);
    youAsked.classList.remove('result__hide');
    statistic.classList.remove('result__hide');
    analyst.classList.remove('result__hide');
  }

  //Выводим ключевое слово запроса
  const question = document.querySelector('.about-project__title_insert').textContent = localStorage.getItem('question');
  //Достаем из localStorage массив новостей
  const articles = JSON.parse(localStorage.getItem('newsCards'));
  //Выводим количество новостей с ключевым словом за неделю
  document.querySelector('#week').textContent = localStorage.getItem('newsInAWeek');

  //------Подсчет количества упоминаний ключевого слова в заголовках за неделю-----
  const mentionsInTitle = articles.reduce(function(sum, article) {
    //Проверка количества ключевыхс слов
    if (question.match(/\s/)) {
      question.split(' ').forEach(function(item) {
        const regex = new RegExp(item.substr(0, item.length - 1), 'gi');
        if (article.title.match(regex)) sum++
      })
    } else {
      const regex = new RegExp(question.substr(0, question.length - 1), 'gi')
      if (article.title.match(regex)) sum++
    }
    return sum
  }, 0)
  //Выводим количество упоминаний ключевого слова в заголовках за неделю
  document.querySelector('#header').textContent = mentionsInTitle;

  //Ставим дату (месяц)
  const month = new Date(articles[0].publishedAt);
  document.querySelector('.analyst__date-insert').textContent = month.toLocaleString('ru', { month: 'long' });

  const volume = document.querySelectorAll('.analyst__grid-volume');
  const graph = document.querySelectorAll('.analyst__grid-pic');
  const days = document.querySelector('.analyst__grid-date').querySelectorAll('div');

  //Определяем даты (дни и дни недели)
  days.forEach(function(thisDay, i) {
    let date = new Date();
    //Рассматриваем новости в течение недели
    const week = 7;
    date = new Date(date.setDate(date.getDate() - week));
    //Устанавливаем дату
    let thisDate = new Date(date.setDate(date.getDate() + i))

    //-----Подсчет количества упоминаний ключевого слова в заголовках и текстах в эту дату-----
    volume[i].textContent = articles.reduce(function(sum, article) {
      const publishingDate = new Date(article.publishedAt)

      if (thisDate.toLocaleString('ru', { day: 'numeric', month: 'long' }) === publishingDate.toLocaleString('ru', { day: 'numeric', month: 'long' })) {
        //Проверка количества ключевыхс слов
        if (question.match(/\s/)) {
          question.split(' ').forEach(function(item) {
            const regex = new RegExp(item.substr(0, item.length - 1), 'gi');
            if (article.title.match(regex)) sum++;
            if (article.description.match(regex)) sum++
          })
        } else {//Если ключевое слово одно
          const regex = new RegExp(question.substr(0, question.length - 1), 'gi')
          if (article.title.match(regex)) sum++;
          if (article.description.match(regex)) sum++
        }
      }

      return sum
    }, 0)

    //-----Рисуем графики-----
    graph[i].setAttribute('style', `width: ${volume[i].textContent}%`);

    //Ставим даты (день, день недели)
    thisDate = thisDate.toLocaleString('ru', { day: 'numeric', weekday: 'short' });
    thisDay.textContent = thisDate;
  })
} else { //Если нет данных по аналитике
  youAsked.classList.add('result__hide');
  statistic.classList.add('result__hide');
  analyst.classList.add('result__hide');
  noQuestion.classList.add('about-project__title', 'title');
  noQuestion.setAttribute('style', 'margin-bottom: 80px');
  noQuestion.textContent = 'Вы еще ничего не спросили';
  aboutProject.appendChild(noQuestion);
}
