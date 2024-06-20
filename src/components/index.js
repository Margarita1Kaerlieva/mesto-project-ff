import '../pages/index.css';
import {initialCards} from './cards.js';
import {createCard, onLike} from './card.js';
import {openModal} from './modal.js';

const placesList = document.querySelector('.places__list');

const profileEditButton = document.querySelector('.profile__edit-button');
const popupTypeEdit = document.querySelector('.popup_type_edit');

function handleDeleteCard(card) {
    card.remove();
};

initialCards.forEach((cardData) => {
    const newCard = createCard(cardData, handleDeleteCard);

    placesList.append(newCard);
});

profileEditButton.addEventListener('click', () => {
    openModal(popupTypeEdit);
});

