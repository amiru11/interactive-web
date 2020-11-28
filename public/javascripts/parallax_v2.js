(() => {
  const graphicStepElements = document.querySelectorAll(
    '.scroll-graphic__item'
  );
  const textStepElements = document.querySelectorAll('.scroll-text__item');
  let currentGrapicItem = graphicStepElements[0];
  let currentTextItem = textStepElements[0];
  let ioIndex = 0;

  const io = new IntersectionObserver((entries, observer) => {
    ioIndex = Number(entries[0].target.dataset.index);
  });

  const activateItem = (isActive) => {
    if (isActive) {
      if (!currentGrapicItem.classList.contains('active')) {
        currentGrapicItem.classList.add('active');
        currentTextItem.classList.add('active');
      }
    } else {
      if (currentGrapicItem.classList.contains('active')) {
        currentGrapicItem.classList.remove('active');
        currentTextItem.classList.remove('active');
      }
    }
  };

  for (let i = 0; i < textStepElements.length; i++) {
    io.observe(textStepElements[i]);
    graphicStepElements[i].dataset.index = i;
    textStepElements[i].dataset.index = i;
  }

  window.addEventListener('scroll', () => {
    let stepItem = null;
    for (let i = ioIndex - 1; i < ioIndex + 2; i++) {
      stepItem = textStepElements[i];
      if (!stepItem) continue;

      if (
        stepItem.getBoundingClientRect().top > window.innerHeight * 0.2 &&
        stepItem.getBoundingClientRect().top < window.innerHeight * 0.8
      ) {
        activateItem(false);
        currentGrapicItem = graphicStepElements[stepItem.dataset.index];
        currentTextItem = textStepElements[stepItem.dataset.index];
        activateItem(true);
      }
    }
  });

  window.addEventListener('load', () => {
    setTimeout(() => scrollTo(0, 0), 100);
    setTimeout(() => activateItem(true), 500);
  });
})();
