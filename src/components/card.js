// @todo: Функция создания и удаления карточки

const createCard = ({ cardData, onDelete, onLike, openCard }) => {
    const templateCard = document.querySelector('#card-template').content.querySelector('.places__item');
    const newCard = templateCard.cloneNode(true);

    const titleCard = newCard.querySelector('.card__title');
    const imgCard = newCard.querySelector('.card__image');
    const deleteButton = newCard.querySelector('.card__delete-button');
    const likeButton = newCard.querySelector('.card__like-button');

    const { name: cardName, link: cardLink, name: cardTitle } = cardData;

    imgCard.src = cardLink;
    imgCard.alt = cardName;
    titleCard.textContent = cardTitle;

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
    openCard(cardData);
   });

    return newCard;
};

const onLike = (likeButton) => {
    likeButton.classList.toggle('card__like-button_is-active');
};

const handleDeleteCard = (card) => {
    card.remove();
};

export {createCard, onLike, handleDeleteCard};