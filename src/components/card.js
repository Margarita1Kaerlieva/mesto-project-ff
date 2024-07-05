
import {openModal} from './modal.js';

const popupTypeImage = document.querySelector('.popup_type_image');

const openCard = (cardLink, cardName, cardTitle) => {
    popupTypeImage.querySelector('.popup__image').src = cardLink;
    popupTypeImage.querySelector('.popup__image').alt = cardName;
    popupTypeImage.querySelector('.popup__caption').textContent = cardTitle;
    openModal(popupTypeImage);
};

// @todo: Функция создания и удаления карточки

const createCard = (cardData, onDelete, openCard, onLike) => {
    const templateCard = document.querySelector('#card-template').content.querySelector('.places__item');
    const newCard = templateCard.cloneNode(true);

    const titleCard = newCard.querySelector('.card__title');
    const imgCard = newCard.querySelector('.card__image');
    const deleteButton = newCard.querySelector('.card__delete-button');
    const likeButton = newCard.querySelector('.card__like-button');

    const { name: cardTitle, link: cardLink, name: cardName } = cardData;

    titleCard.textContent = cardTitle;
    imgCard.src = cardLink;
    imgCard.alt = cardName;

    //Удаление карточки

    deleteButton.addEventListener('click', () => {
        onDelete(newCard);
    });

    //Лайк карточки;

    likeButton.addEventListener('click', () => {
        onLike(likeButton);
    });

    // Открытие карточки

    imgCard.addEventListener('click', () => {
        openCard(cardLink, cardName, cardTitle);
    });

    return newCard;
};

const onLike = (likeButton) => {
    likeButton.classList.toggle('card__like-button_is-active');
 };

 const handleDeleteCard = (card) => {
    card.remove();
};

export {createCard, onLike, openCard, handleDeleteCard};