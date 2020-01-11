//------- Получение информации из News API -------
export default class NewsApi {
  constructor(url, question, date, key) {
    this.url = url;
    this.question = question;
    this.date = date;
    this.key = key
  }
  //Получения информации из сервера
  getNews() {
    console.log(`${this.url}`,`q=${this.question}`,`${this.date}`,`&pageSize=100&apiKey=${this.key}`);
    return fetch(`${this.url}q=${this.question}${this.date}&pageSize=100&apiKey=${this.key}`)
      .then(res => {
        if (res.ok) {
          return res.json()
        }
        return Promise.reject(`Ошибка при загрузке из сервера ${this.url}: ${res.status}`);
      })
  }
}
