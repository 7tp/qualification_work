'use strict'
import "./pages/about.css";
import {gitUrl} from './js/variables';
import GitApi from './js/git-api';
import GitList from './js/git-list';
import carousel from './js/carousel';

const headerUnderlineBlack = document.querySelector('.header__link_black');
headerUnderlineBlack.style.cssText = 'border-bottom: none';

const commitsSlider = document.querySelector('.main-carousel');
const commits = new GitApi(gitUrl);

function getCommits() {
  commits.loadData()
    .then(res => {
      const gitList = new GitList(commitsSlider, res);
      gitList.showCommits();
    })
    .catch(err => {
      console.log(err);
      const templateCommit = document.querySelector('#templateCarousel').content.querySelector('.carousel-cell');
      const templateClone = templateCommit.cloneNode(true);

      templateClone.querySelector('.commits__comment-text').textContent = 'Произошла ошибка запроса коммитов. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.';
      templateClone.querySelector('.commits__comment-text').setAttribute('style', 'text-align: center');

      commitsSlider.appendChild(templateClone);

      carousel();
    })
}

getCommits();
