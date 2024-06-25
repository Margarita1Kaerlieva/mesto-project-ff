import '../pages/index.css';
import {initialCards} from './cards.js';
import {createCard, onLike, openCard} from './card.js';
import {openModal, closeModal} from './modal.js';

const placesList = document.querySelector('.places__list');

const profileEditButton = document.querySelector('.profile__edit-button'); // Кнопка редактирования
const popupTypeEdit = document.querySelector('.popup_type_edit'); // Окно редактирования
const profileAddButton = document.querySelector('.profile__add-button'); // +
const popupTypeNewCard = document.querySelector('.popup_type_new-card'); // Новая карточка

const poputInpputTypeCardName = document.querySelector('.popup__input_type_card-name');
const poputInpputTypeUrl = document.querySelector('.popup__input_type_url');

const popupCaption = document.querySelector('.popup__caption');
const popupTypeImage = document.querySelector('.popup_type_image');
const popupImage = document.querySelector('.popup__image');

const formElement = document.querySelector('.popup__form');

const firstnameValue = document.getElementById('popup-firstname'); // id
const professionValue = document.getElementById('popup-professional'); // id

const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_description');
const fio = document.querySelector('.profile__title');
const profession = document.querySelector('.profile__description');

const popupContent = document.querySelector('.popup__content');
const content = document.querySelector('.content');
const popup = document.querySelector('.popup')
const popupClose = document.querySelector('.popup__close');

function handleDeleteCard(card) {
    card.remove();
};

// Вывести карточки на страницу

initialCards.forEach((cardData) => {
    const newCard = createCard(cardData, handleDeleteCard, onLike, openCard);
    placesList.append(newCard);
});

function handleFormSubmit(evt) {
    evt.preventDefault();
    const inputName = nameInput.value
    const inputJob = jobInput.value
    fio.textContent = inputName;
    profession.textContent = inputJob;
    openModal(popupTypeEdit);
};

// Окно редактирования

profileEditButton.addEventListener('click', () => {
    openModal(popupTypeEdit);
});

popupClose.addEventListener('click', () => {
    closeModal(popupTypeEdit);
});

function formEdit() {
    const fio = document.querySelector('.profile__title').textContent;
    const profession = document.querySelector('.profile__description').textContent;
    nameInput.value = fio;
    jobInput.value = profession;
};

// +

profileAddButton.addEventListener('click', () => {
    openModal(popupTypeNewCard);
});

popupClose.addEventListener('click', () => {
    closeModal(popupTypeNewCard);
});

formElement.addEventListener('submit', handleFormSubmit);
profileEditButton.addEventListener('click', formEdit);