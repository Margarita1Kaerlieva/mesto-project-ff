export {createCard};

// @todo: Функция создания и удаления карточки



const createCard = (cardData, onDelete) => {
    const templateCard = document.querySelector('#card-template').content.querySelector('.places__item');
    const newCard = templateCard.cloneNode(true);

    const titleCard = newCard.querySelector('.card__title');
    const imgCard = newCard.querySelector('.card__image');
    const deleteButton = newCard.querySelector('.card__delete-button');

    //const likeButton = newCard.querySelector('.card__like-button');

    titleCard.textContent = cardData.name;
    imgCard.src = cardData.link;
    imgCard.alt = 'Изображение пейзажа';

    //Удаление карточки

    deleteButton.addEventListener('click', () => {
        onDelete(newCard);
    });

    //Лайк карточки;

    return newCard;
};

//function onLike(likeButton) {
 //  likeButton.classList.toggle('card__like-button_active');
//};



