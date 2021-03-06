'use strict'
import "./pages/analyst.css";
const stats = document.querySelector('.stats');
const youAsked = document.querySelector('.stats__title');
const statistic = document.querySelector('.stats__statistic');
const analyst = document.querySelector('.analyst__grid');

const questionTitle = document.querySelector('.stats__title-insert');
const newsInAWeek = document.querySelector('#week');
const newsInHeader = document.querySelector('#header');
const currentMonth = document.querySelector('.analyst__date-insert');

const volume = document.querySelectorAll('.analyst__grid-volume');
const graph = document.querySelectorAll('.analyst__grid-pic');
const days = document.querySelector('.analyst__grid-date').querySelectorAll('div');

const noQuestion = document.createElement('h2');

//Если есть данные по аналитике
if (!!localStorage.getItem('question')) {

  if (noQuestion.parentNode === stats) {
    stats.removeChild(noQuestion);
    youAsked.classList.remove('result__hide');
    statistic.classList.remove('result__hide');
    analyst.classList.remove('result__hide');
  }

  //Выводим ключевое слово запроса
  const question = questionTitle.textContent = localStorage.getItem('question');
  //Достаем из localStorage массив новостей
  const articles = JSON.parse(localStorage.getItem('newsCards'));
  //Выводим количество новостей с ключевым словом за неделю
  newsInAWeek.textContent = localStorage.getItem('newsInAWeek');

  let regex = '';

  //------Подсчет количества упоминаний ключевого слова в заголовках за неделю-----
  newsInHeader.textContent = articles.reduce((sum, article) => {
    //Проверка количества ключевых слов
    if (question.match(/\s/)) {
      question.split(' ').forEach(item => {
        if (item.length > 3) { //Если длина слова больше 3 букв, рассматриваем склоняемость по падежам
          regex = new RegExp(item.substr(0, item.length - 1), 'gi');
        } else {
          regex = new RegExp(item, 'gi');
        }
        if (article.title.match(regex)) sum++
      })
    } else {//Если ключевое слово одно
        if (question.length > 3) { //Если длина слова больше 3 букв, рассматриваем склоняемость по падежам
          regex = new RegExp(question.substr(0, question.length - 1), 'gi');
        } else {
          regex = new RegExp(question, 'gi');
        }
        if (article.title.match(regex)) sum++
    }
    return sum
  }, 0)

  //Ставим дату (месяц)
  const month = new Date(articles[0].publishedAt);
  currentMonth.textContent = month.toLocaleString('ru', { month: 'long' });

  //Определяем даты (дни и дни недели)
  days.forEach((thisDay, i) => {
    let date = new Date();
    //Рассматриваем новости в течение недели
    const week = 7;
    date = new Date(date.setDate(date.getDate() - week));
    //Устанавливаем дату
    let thisDate = new Date(date.setDate(date.getDate() + i))

    //-----Подсчет количества упоминаний ключевого слова в заголовках и текстах в эту дату-----
    volume[i].textContent = articles.reduce((sum, article) => {
      const publishingDate = new Date(article.publishedAt)

      if (thisDate.toLocaleString('ru', { day: 'numeric', month: 'long' }) === publishingDate.toLocaleString('ru', { day: 'numeric', month: 'long' })) {
        //Проверка количества ключевыхс слов
        if (question.match(/\s/)) {
          question.split(' ').forEach(item => {
            if (item.length > 3) { //Если длина слова больше 3 букв, рассматриваем склоняемость по падежам
              regex = new RegExp(item.substr(0, item.length - 1), 'gi');
            } else {
              regex = new RegExp(item, 'gi');
            }
            if (article.title.match(regex)) sum++;
            if (article.description.match(regex)) sum++;
            console.log('title', article.title.match(regex), 'description', article.description.match(regex));
          })
        } else {//Если ключевое слово одно
          if (question.length > 3){//Если длина слова больше 3 букв, рассматриваем склоняемость по падежам
            regex = new RegExp(question.substr(0, question.length - 1), 'gi');
          } else {
            regex =  new RegExp(question, 'gi');
          }
          if (article.title.match(regex)) sum++;
          if (article.description.match(regex)) sum++;
          console.log('title', article.title.match(regex), 'description', article.description.match(regex));
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
  noQuestion.classList.add('stats__title', 'title');
  noQuestion.setAttribute('style', 'margin-bottom: 80px');
  noQuestion.textContent = 'Вы еще ничего не спросили';
  stats.appendChild(noQuestion);
}
