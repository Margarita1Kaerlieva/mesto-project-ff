const placesList = document.querySelector('.places__list');
const profileEditButton = document.querySelector('.profile__edit-button'); // Кнопка редактирования
const popupTypeEdit = document.querySelector('.popup_type_edit'); // Окно редактирования
const profileAddButton = document.querySelector('.profile__add-button'); // +
const popupTypeNewCard = document.querySelector('.popup_type_new-card'); // Новая карточка
const popupTypeAvatar = document.querySelector('.popup_type_avatar');
const popupTypeImage = document.querySelector('.popup_type_image');
const imgCard = document.querySelector('.popup__image');
const profileForm = document.forms['edit-profile']
const formNewElement = document.forms['new-place']
const profileFormAvatar = document.forms['avatar-img']
const profileImage = document.querySelector('.profile__image');
const fio = document.querySelector('.profile__title');
const profession = document.querySelector('.profile__description');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_description');
const closeButtons = document.querySelectorAll('.popup__close');
const popupCaption = document.querySelector('.popup__caption');
const placeName = document.querySelector('#place-name-input');
const urlInput = document.querySelector('#url-input');
const avatarUrlInput = document.querySelector('#avatar-img-link');
const formPopup = document.querySelector('.popup__form');
const inputPopup = formPopup.querySelector('.popup__input'); 
const buttonPopup = formPopup.querySelector('.popup__button');

export {placesList, profileEditButton, popupTypeEdit, profileAddButton, popupTypeNewCard,
popupTypeImage, imgCard, profileForm, formNewElement, fio, profession, nameInput, jobInput, 
closeButtons, popupCaption, placeName, urlInput, formPopup, inputPopup, profileImage, buttonPopup, popupTypeAvatar, profileFormAvatar,avatarUrlInput};