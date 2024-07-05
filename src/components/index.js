import '../pages/index.css';
import {initialCards} from './cards.js';
import {createCard, onLike, openCard, handleDeleteCard} from './card.js';
import {openModal, closeModal} from './modal.js';

const placesList = document.querySelector('.places__list');

const profileEditButton = document.querySelector('.profile__edit-button'); // Кнопка редактирования
const popupTypeEdit = document.querySelector('.popup_type_edit'); // Окно редактирования
const profileAddButton = document.querySelector('.profile__add-button'); // +
const popupTypeNewCard = document.querySelector('.popup_type_new-card'); // Новая карточка
const popupTypeImage = document.querySelector('.popup_type_image');

const formElement = document.querySelector('.popup__form');
const formNewElement = document.querySelector('.popup__form__new');

const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_description');
const fio = document.querySelector('.profile__title');
const profession = document.querySelector('.profile__description');
const popupClose = document.querySelector('.popup__close');

const popupCloseAll = document.querySelectorAll('.popup__close');

const handleFormSubmit = (evt) => {
    evt.preventDefault();
    const inputName = nameInput.value
    const inputJob = jobInput.value
    fio.textContent = inputName;
    profession.textContent = inputJob;
    closeModalModal(popupTypeEdit);
};

// Вывести карточки на страницу

initialCards.forEach((cardData) => {
    const newCard = createCard(cardData, handleDeleteCard, openCard, onLike);
    placesList.append(newCard);
});

// +

profileAddButton.addEventListener('click', () => {
    openModal(popupTypeNewCard);
});

// Окно редактирования

profileEditButton.addEventListener('click', () => {
    openModal(popupTypeEdit);
});

popupCloseAll.forEach(element => {
    element.addEventListener('click', () => {
        closeModal(popupTypeEdit);
        closeModal(popupTypeNewCard);
        closeModal(popupTypeImage);
    });
});

const formEdit = () => {
    const fio = document.querySelector('.profile__title').textContent;
    const profession = document.querySelector('.profile__description').textContent;
    nameInput.value = fio;
    jobInput.value = profession;
};

// Новая карточка

const handleFormNewSubmit = (evt) => {
    evt.preventDefault();
    const placeName = evt.target.querySelector('#popup-new-place-name');
    const link = evt.target.querySelector('#popup-new-link');

    const newCard = createCard({ name: placeName.value, link: link.value }, handleDeleteCard, openCard, onLike)

    placesList.prepend(newCard)

    closeModal(popupTypeNewCard);
};

formElement.addEventListener('submit', handleFormSubmit);
formNewElement.addEventListener('submit', handleFormNewSubmit);
profileEditButton.addEventListener('click', formEdit);