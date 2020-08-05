const SHOWING_CLASS = 'on';
const firstCarousel = document.querySelector('.carousel__item:first-child');

function slide() {
  const currentCarousel = document.querySelector(`.${SHOWING_CLASS}`);

  if (currentCarousel) {
    currentCarousel.classList.remove(SHOWING_CLASS);
    const nextCarousel = currentCarousel.nextElementSibling;
    if (nextCarousel) {
      nextCarousel.classList.add(SHOWING_CLASS);
    } else {
      firstCarousel.classList.add(SHOWING_CLASS);
    }
  } else {
    firstCarousel.classList.add(SHOWING_CLASS);
  }
}

setInterval(slide, 2000);
