'use strict';

//Создание списка новостей
export default class NewsList {
  constructor(container, arr) {
    this.container = container;
    this.showNews(arr)
  }
  addNews(link, image, date, title, text, source) {
    const { cardElement } = new NewsCard(link, image, date, title, text, source);
    this.container.appendChild(cardElement);
  }
  //Добавление новостей на страницу
  showNews(arr) {
    for (let i=0; i < arr.length; i++) {
      let date = new Date(arr[i].publishedAt);
      date = `${date.toLocaleString('ru', { month: 'long', day: 'numeric' })}, ${date.getFullYear()}`

      this.addNews(arr[i].url, arr[i].urlToImage, date, arr[i].title, arr[i].description, arr[i].source.name)
    }
  }
}

import NewsCard from './class-news-cards';
