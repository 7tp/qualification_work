'use strict'
import "./pages/analyst.css";

const headerUnderlineBlack = document.querySelectorAll('.header__link_black');
headerUnderlineBlack.forEach(function(underline) {
  underline.style.cssText ='border-bottom: none';
});
//Выводим ключевое слово запроса
const question = document.querySelector('.about-project__title_insert').textContent = localStorage.getItem('question');

//Выводим количество новостей с ключевым словом за неделю
const number = document.querySelector('#week').textContent = localStorage.getItem('newsInAWeek');

const articles = JSON.parse(localStorage.getItem('newsCards'));

//------Подсчет количества упоминаний ключевого слова в заголовках за неделю-----
const mentionsInTitle = articles.reduce(function(sum, article) {
  //Проверка количества ключевыхс слов
  if (question.match(/\s/)) {
    question.split(' ').forEach(function(item) {
      let regex = new RegExp(item.substr(0, item.length - 1), 'gi');
      if (article.title.match(regex)) sum++
    })
  } else {
    let regex = new RegExp(question.substr(0, question.length - 1), 'gi')
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
for (let i=0; i < days.length; i++) {
  let date = new Date();
  date = new Date(date.setDate(date.getDate() - 7));
  let nextDate = new Date(date.setDate(date.getDate() + i))

  //-----Подсчет количества упоминаний ключевого слова в заголовках и текстах в день-----
  volume[i].textContent = articles.reduce(function(sum, article) {
    const publishingDate = new Date(article.publishedAt)

    if (nextDate.toLocaleString('ru', { day: 'numeric', month: 'long' }) === publishingDate.toLocaleString('ru', { day: 'numeric', month: 'long' })) {
      console.log(true);
      //Проверка количества ключевыхс слов
      if (question.match(/\s/)) {
        question.split(' ').forEach(function(item) {
          let regex = new RegExp(item.substr(0, item.length - 1), 'gi');
          if (article.title.match(regex)) sum++;
          if (article.description.match(regex)) sum++
        })
      } else {//Если ключевое слово одно
        let regex = new RegExp(question.substr(0, question.length - 1), 'gi')
        if (article.title.match(regex)) sum++;
        if (article.description.match(regex)) sum++
      }
    } else {
      console.log(nextDate.toLocaleString('ru', { day: 'numeric', month: 'long' }), publishingDate.toLocaleString('ru', { day: 'numeric', month: 'long' }))
    }

    return sum
  }, 0)

  //-----Рисуем графики-----
  graph[i].setAttribute('style', `width: ${volume[i].textContent}%`);

  //Ставим даты (день, день недели)
  nextDate = nextDate.toLocaleString('ru', { day: 'numeric', weekday: 'short' });
  days[i].textContent = nextDate;
}

