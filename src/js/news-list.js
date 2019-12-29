//Создание списка новостей
export default class NewsList {
  constructor(container, news) {
    this.container = container;
    this.news = news;
  }
  _addNews(link, image, date, title, text, source) {
    const templateResult = document.querySelector('#templateResult').content.querySelector('.result__card-link');
    const templateClone = templateResult.cloneNode(true);

    templateClone.setAttribute('href', `${link}`);
    templateClone.querySelector('.result__card-image').setAttribute('style', `background-image: url(${image})`);
    templateClone.querySelector('.result__card-date').textContent = date;
    templateClone.querySelector('.result__card-title').textContent = title;
    templateClone.querySelector('.result__card-text').textContent = text;
    templateClone.querySelector('.result__card-source').textContent = source;

    this.container.appendChild(templateClone);
  }
  //Добавление новостей на страницу
  showNews() {
    this.news.forEach(element => {
      let date = new Date(element.publishedAt);
      date = `${date.toLocaleString('ru', { month: 'long', day: 'numeric' })}, ${date.getFullYear()}`

      this._addNews(element.url, element.urlToImage, date, element.title, element.description, element.source.name)
    });
  }
}
