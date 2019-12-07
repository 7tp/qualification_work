'use strict';

// Создание списка коммитов
export default class GitList {
  constructor(container, gitArr) {
    this.container = container;
    this.showCommits(gitArr)
  }

  addCommits(date, avatar, name, email, message) {
    const { cardElement } = new GitCard(date, avatar, name, email, message);
    this.container.appendChild(cardElement);
  }
  //Добавление коммитов на страницу
  showCommits(gitArr) {
    for (let i = 0; i < gitArr.length; i++) {
      this.addCommits(gitArr[i].commit.committer.date, gitArr[i].author.avatar_url, gitArr[i].commit.committer.name, gitArr[i].commit.committer.email, gitArr[i].commit.message);
    }
    carousel();
  }
}

import GitCard from './class-git-cards';
import carousel from './carousel'
