export {createCard, onLike, openCard};

// @todo: Функция создания и удаления карточки

const createCard = (cardData, onDelete) => {
    const templateCard = document.querySelector('#card-template').content.querySelector('.places__item');
    const newCard = templateCard.cloneNode(true);

    const titleCard = newCard.querySelector('.card__title');
    const imgCard = newCard.querySelector('.card__image');
    const deleteButton = newCard.querySelector('.card__delete-button');
    const likeButton = newCard.querySelector('.card__like-button');

    titleCard.textContent = cardData.name;
    imgCard.src = cardData.link;
    imgCard.alt = cardData.name;

    //Удаление карточки

    deleteButton.addEventListener('click', () => {
        onDelete(newCard);
    });

    //Лайк карточки;

    likeButton.addEventListener('click', () => {
        onLike(likeButton);
    });

    return newCard;
};

function onLike(likeButton) {
   likeButton.classList.toggle('card__like-button_is-active');
};

function openCard(poputInpputTypeUrl, poputInpputTypeCardName, popupCaption) {
    popupImage.querySelector('.popup__image').src = poputInpputTypeUrl;
    popupImage.querySelector('.popup__image').alt = poputInpputTypeCardName;
    popupImage.querySelector('.popup__caption').textContent = popupCaption;
    openModal(popupTypeImage);

    cardImag.addEventListener('click', () => {
        openCard(poputInpputTypeUrl, poputInpputTypeCardName, popupCaption);
    });
};