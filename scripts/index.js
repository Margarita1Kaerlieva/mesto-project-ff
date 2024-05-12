// @todo: Темплейт карточки

// @todo: DOM узлы

const templateCard = document.querySelector('#card-template').content.querySelector('.places__item');
const placesList = document.querySelector('.places__list');

const handleDeleteCard = (card) => {
    card.remove();
}

// @todo: Функция создания карточки

const createCard = (cards, onDelete) => {
    const newCard = templateCard.cloneNode(true);

    const titleCard = newCard.querySelector('.card__title');
    const imgCard = newCard.querySelector('.card__image');
    const deleteButton = newCard.querySelector('.card__delete-button');

    titleCard.textContent = cards.name;
    imgCard.src = cards.link;
    imgCard.alt = 'Изображение пейзажа';

    deleteButton.addEventListener('click', () => {
        onDelete(newCard);
    })

    return newCard;
}

initialCards.forEach((cards) => {
    const newCard = createCard(cards, handleDeleteCard);

    placesList.append(newCard);
})
// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу
