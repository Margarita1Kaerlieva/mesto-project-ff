const openModal = (popup) => {
  popup.classList.add('popup_is-opened');
  document.addEventListener('keydown', closeEsc);
  popup.addEventListener('click', closeOverlay);
};

const closeModal = (popup) => {
  popup.classList.remove('popup_is-opened');
  document.removeEventListener('keydown', closeEsc);
  popup.removeEventListener('click', closeOverlay);
};

 // Закрытие окна на кнопку Esc

const closeEsc = (evt) => {
    const openPopup = document.querySelector('.popup_is-opened');
    if (evt.key === 'Escape') {
      closeModal(openPopup);
  };
};

// 

const closeOverlay = (evt) => {
  if (evt.target === evt.currentTarget) {
    closeModal(evt.currentTarget);
  };
};

export {openModal, closeModal};