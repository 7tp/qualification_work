import carousel from './carousel'

// Создание списка коммитов
export default class GitList {
  constructor(container, gitArr) {
    this.container = container;
    this.gitArr = gitArr;
  }

  _addCommits(date, avatar, name, email, message) {
    const templateCommit = document.querySelector('#templateCarousel').content.querySelector('.carousel-cell');
    const templateClone = templateCommit.cloneNode(true);

    templateClone.querySelector('.commits__comment-date').textContent = date;
    templateClone.querySelector('.commits__comment-author-photo').setAttribute('style', `background-image: url(${avatar})`);
    templateClone.querySelector('.commits__comment-author-name').textContent = name;
    templateClone.querySelector('.commits__comment-author-email').textContent = email;
    templateClone.querySelector('.commits__comment-text').textContent = message;

    this.container.appendChild(templateClone);
  }
  //Добавление коммитов на страницу
  showCommits() {
    for (let i = 0; i < this.gitArr.length; i++) {
      let date = new Date(this.gitArr[i].commit.committer.date);
      date = `${date.toLocaleString('ru', { month: 'long', day: 'numeric' })}, ${date.getFullYear()}`

      this._addCommits(date, this.gitArr[i].author.avatar_url, this.gitArr[i].commit.committer.name, this.gitArr[i].commit.committer.email, this.gitArr[i].commit.message);
    }
    carousel();
  }
}
