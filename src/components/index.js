import '../pages/index.css';
import {initialCards} from './cards.js';
import {createCard} from './card.js';
import {openModal, closeModal} from './modal.js';

const placesList = document.querySelector('.places__list');

const profileEditButton = document.querySelector('.profile__edit-button');
const popupTypeEdit = document.querySelector('.popup_type_edit');

const formElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_description');

const firstnameValue = document.getElementById('popup-firstname');
const professionValue = document.getElementById('popup-professional');

function handleDeleteCard(card) {
    card.remove();
};

initialCards.forEach((cardData) => {
    const newCard = createCard(cardData, handleDeleteCard);

    placesList.append(newCard);
});

function handleFormSubmit(evt) {
    evt.preventDefault();

    firstnameValue.value = fio.textContent;
    professionValue.value = profession.textContent;

    fio = jobInput;
    profession = nameInput;
    openModal(popupTypeEdit);
};

function openPopupEditName() { 
    const fio = document.querySelector('.profile__title');
    const profession = document.querySelector('.profile__description');
    nameInput.value = fio;
    jobInput.value = profession;
  }

  profileEditButton.addEventListener('click', () => {
    openPopupEditName();
});