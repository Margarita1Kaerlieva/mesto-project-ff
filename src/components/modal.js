export {openModal, closeModal};

const openModal = (popup) => {
  popup.classList.add('popup_is-opened');
  document.addEventListener('keydown', closeOnBackDropClick);
  popup.addEventListener('click', closePopupOverlay);
};

const closeModal = (popup) => {
  popup.classList.remove('popup_is-opened');
  document.removeEventListener('keydown', closeOnBackDropClick);
  popup.removeEventListener('click', closePopupOverlay);
};

 // Закрытие окна на кнопку Esc

const closeOnBackDropClick = (evt) => {
    const openPopup = document.querySelector('.popup_is-opened');
    if (evt.key === 'Escape') {
      closeModal(openPopup);
  };
};

// Закрытие окна на оверлей

const closePopupOverlay = (evt) => {
  if (evt.target === evt.currentTarget) {
    closeModal(evt.currentTarget);
  };
};
