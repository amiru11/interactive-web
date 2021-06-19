const SHOWING_CLASS = 'on';

function Modal(element) {
  this.modalElement = document.querySelector(element);
  this.show = function () {
    this.modalElement.classList.add(SHOWING_CLASS);
    const dimElement = document.createElement('div');
    dimElement.classList.add('dim');
    document.body.append(dimElement);
    dimElement.addEventListener('click', (event) => {
      this.close();
    });
  };
  this.close = function () {
    console.log('modalElement', this.modalElement);
    this.modalElement.classList.remove(SHOWING_CLASS);
    document.body.removeChild(document.querySelector('.dim'));
  };
}

const modal = new Modal('.modal__container');
console.log('modal', modal);

document.querySelectorAll('.open-modal').forEach((ele) => {
  ele.addEventListener('click', (event) => {
    modal.show();
  });
});

document.querySelectorAll('.close-modal').forEach((ele) => {
  ele.addEventListener('click', (event) => {
    modal.close();
  });
});
