'use strict';

//Создание карточек новостей
export default class NewsCard {
  constructor(link, image, date, title, text, source) {
    this.link = link;
    this.image = image;
    this.date = date;
    this.title = title;
    this.text = text;
    this.source = source;
    this.cardElement = this.create(this.link, this.image, this.date, this.title, this.text, this.source)
  };

  //Создание карточки новости из шаблона
  create (link, image, date, title, text, source) {
    const tmplResult = document.querySelector('#tmplResult').content.querySelector('.result__card-link');
    let tmplClone = tmplResult.cloneNode(true);

    tmplClone.setAttribute('href', `${link}`);
    tmplClone.querySelector('.result__card-image').setAttribute('style', `background-image: url(${image})`);
    tmplClone.querySelector('.result__card-date').textContent = date;
    tmplClone.querySelector('.result__card-title').textContent = title;
    tmplClone.querySelector('.result__card-text').textContent = text;
    tmplClone.querySelector('.result__card-source').textContent = source;

    return tmplClone;
  }
}
