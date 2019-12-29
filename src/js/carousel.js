import Flickity from 'flickity';

const elem = document.querySelector('.main-carousel');

//Создание слайдера
export default function carousel() {
  if (window.innerWidth < 881) {
    const flkty = new Flickity( elem, {
      contain: '80%',
      wrapAround: true,
      groupCells: true,
      prevNextButtons: false
    });
  } else {
    const flkty = new Flickity( elem, {
      contain: '80%',
      wrapAround: true,
      groupCells: true,
      arrowShape: 'M 30,50 L 55,80 L 60,75 L 40,50  L 60,25 L 55,20 Z'
    })
  }
}
