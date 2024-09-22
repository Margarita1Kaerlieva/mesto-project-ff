// @todo: Функция создания и удаления карточки
import { deleteCards, likeCards, deleteLike } from './api.js'

const createCard = ({ cardData, userId, onDelete, onLike, openCard }) => {
    const templateCard = document.querySelector('#card-template').content.querySelector('.places__item');
    const newCard = templateCard.cloneNode(true);
    const titleCard = newCard.querySelector('.card__title');
    const imgCard = newCard.querySelector('.card__image');
    const deleteButton = newCard.querySelector('.card__delete-button');
    const likeButton = newCard.querySelector('.card__like-button');
    const numberLikes = newCard.querySelector('.number_likes');
    
    const { name: cardName, link: cardLink, name: cardTitle, owner, likes } = cardData;

    const isLiked = likes.some(({ _id }) => _id === userId)

    if (isLiked) {
        likeButton.classList.toggle('card__like-button_is-active');
    }

    if (owner._id == userId) {
        deleteButton.addEventListener('click', () => {
            onDelete(cardData._id, newCard); 
        });
    } else {
        deleteButton.remove()
    }

    if (likes.length > 0) {
        numberLikes.textContent = likes.length
    }

    imgCard.src = cardLink;
    imgCard.alt = cardName;
    titleCard.textContent = cardTitle;

    //Лайк карточки;

    likeButton.addEventListener('click', () => {
        onLike(cardData._id, isLiked)
    });

    // Открытие карточки

   imgCard.addEventListener('click', () => {
    openCard(cardData);
   });

    return newCard;
};

const handleDeleteCard = (cardDataId, cardTemplate) => {
    deleteCards(cardDataId).then(() => {
        cardTemplate.remove();
    });
};

export {createCard, handleDeleteCard};