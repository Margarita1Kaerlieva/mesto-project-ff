export {openModal};

const openModal (popup) => {
   popup.classList.add('popup_open');
    document.addEventListener('click', openModal);
};

//const closeModal(popup) => {
//    popup.classList.add('');
//}