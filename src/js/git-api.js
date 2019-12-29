//------- Получение истории коммитов из GitHub -------
export default class GitApi {
  constructor(url) {
    this.url = url
  }
  //Получения информации из сервера
  loadData() {
    return fetch(`${this.url}`)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
          return Promise.reject(`Ошибка при загрузке коммитов из ${this.url}: ${res.status}`);
      })
  }
}
