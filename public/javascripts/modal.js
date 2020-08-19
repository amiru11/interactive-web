const SHOWING_CLASS = 'on';

function toggleModal(isShow) {
  const modalContainer = document.querySelector('.modal__container');
  if (isShow) {
    modalContainer.classList.add(SHOWING_CLASS);
    const dimElement = document.createElement('div');
    dimElement.classList.add('dim');
    document.body.append(dimElement);
    dimElement.addEventListener('click', (event) => {
      toggleModal(false);
    });
  } else {
    modalContainer.classList.remove(SHOWING_CLASS);
    document.body.removeChild(document.querySelector('.dim'));
  }
}

document.querySelectorAll('.open-modal').forEach((ele) => {
  ele.addEventListener('click', (event) => {
    toggleModal(true);
  });
});

document.querySelectorAll('.close-modal').forEach((ele) => {
  ele.addEventListener('click', (event) => {
    toggleModal(false);
  });
});
