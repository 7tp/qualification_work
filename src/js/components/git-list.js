import carousel from '../utils/carousel';

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
    this.gitArr.forEach(element => {
      let date = new Date(element.commit.committer.date);
      date = `${date.toLocaleString('ru', { month: 'long', day: 'numeric' })}, ${date.getFullYear()}`

      this._addCommits(date, element.author.avatar_url, element.commit.committer.name, element.commit.committer.email, element.commit.message);
    });
    carousel();
  }
}
