const errorText = document.querySelector('.search__error');

export default class Validate {
  constructor(button, question) {
    this.button = button;
    this.question = question;
  }
  listener() {
    this.question.addEventListener('input', () => {
      this._validate();
    })
  }
  removeListener() {
    this.question.removeEventListener('input', () => {
      this._validate();
    })
  }
  _validate() {
    if (this.question.value.length === 0) {
      this.notValid();
      errorText.textContent = "Это обязательное поле";
    } else if (this.question.validity.valid) {
      this.isValid();
    }
  }
  isValid() {
    this.button.removeAttribute('disabled');
    this.button.classList.remove('button_disabled');
    errorText.textContent = '';
  }
  notValid() {
    this.button.setAttribute('disabled', true);
    this.button.classList.add('button_disabled');
  }
}
