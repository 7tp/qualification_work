const errorText = document.querySelector('.search__error');

export default class Validate {
  constructor(button, question) {
    this.button = button;
    this.question = question;
    this.listener(question);
    this.validate()
  }
  listener() {
    this.question.addEventListener('input', () => {
      this.validate();
    })
  }
  validate() {
    if (this.question.value.length === 0) {
      this.button.setAttribute('disabled', true);
      this.button.classList.add('button_disabled');
      errorText.textContent = "Это обязательное поле";
    } else if (this.question.validity.valid) {
      this.button.removeAttribute('disabled');
      this.button.classList.remove('button_disabled');
      errorText.textContent = '';
    }
  }
}
