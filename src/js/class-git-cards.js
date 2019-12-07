'use strict';

//Создание карточек коммитов
export default class GitCard {
  constructor(date, avatar, name, email, message) {
    this.date = date;
    this.avatar = avatar;
    this.name = name;
    this.email = email;
    this.message = message;
    this.cardElement = this.create(this.date, this.avatar, this.name, this.email, this.message)
  };

  //Создание карточки коммита из шаблона
  create (date, avatar, name, email, message) {
    const tmplCommit = document.querySelector('#tmplCarousel').content.querySelector('.carousel-cell');
    let tmplClone = tmplCommit.cloneNode(true);

    tmplClone.querySelector('.commits__comment-date').textContent = date;
    tmplClone.querySelector('.commits__comment-author-photo').setAttribute('style', `background-image: url(${avatar})`);
    tmplClone.querySelector('.commits__comment-author-name').textContent = name;
    tmplClone.querySelector('.commits__comment-author-email').textContent = email;
    tmplClone.querySelector('.commits__comment-text').textContent = message;

    return tmplClone;
  }
}
