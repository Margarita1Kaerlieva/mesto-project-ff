const openModal = (popup) => {
  popup.classList.add("popup_is-animated");
  setTimeout(() => {
    popup.classList.add('popup_is-opened');
  document.addEventListener('keydown', closeEsc);
  popup.addEventListener('click', closeOverlay);
  }, 1);
};

const closeModal = (popup) => {
  popup.classList.remove('popup_is-opened');
  document.removeEventListener('keydown', closeEsc);
  popup.removeEventListener('click', closeOverlay);
};

 // Закрытие окна на кнопку Esc

const closeEsc = (evt) => {
  if (evt.key === 'Escape') {
    const openPopups = document.querySelector('.popup_is-opened');
    closeModal(openPopups);
  };
};
// 

const closeOverlay = (evt) => {
  if (evt.target === evt.currentTarget) {
    closeModal(evt.currentTarget);
  };
};

export {openModal, closeModal};