export {openModal, closeModal};

const openModal (popup) => {
  popup.classList.add('popup_is-opened');
  document.addEventListener('click', closeOnBackDropClick)
};

const closeModal(popup) => {
  popup.classList.add('popup_is-opened');
  document.removeEventListener('click', closeOnBackDropClick)
};

const closeOnBackDropClick (evt) => {
    const openPPopup = document.querySelector('.popup_is-opened');
    if
}