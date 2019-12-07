'use strict'
import "./pages/about.css";

const headerUnderlineBlack = document.querySelector('.header__link_black');
headerUnderlineBlack.style.cssText = 'border-bottom: none';

const commitsSlider = document.querySelector('.main-carousel');
const commits = new GitApi(gitUrl);

function getCommits() {
  commits.loadData()
    .then(res => {
      new GitList(commitsSlider, res);
    })
}

getCommits();

import {gitUrl} from './js/variables';
import GitApi from './js/class-git-api';
import GitList from './js/class-git-list';
