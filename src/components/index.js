import '../pages/index.css';
import {initialCards} from './cards.js';
import {createCard, onLike, handleDeleteCard} from './card.js';
import {openModal, closeModal} from './modal.js';

const placesList = document.querySelector('.places__list');

const profileEditButton = document.querySelector('.profile__edit-button'); // Кнопка редактирования
const popupTypeEdit = document.querySelector('.popup_type_edit'); // Окно редактирования
const profileAddButton = document.querySelector('.profile__add-button'); // +
const popupTypeNewCard = document.querySelector('.popup_type_new-card'); // Новая карточка
const popupTypeImage = document.querySelector('.popup_type_image');
const imgCard = document.querySelector('.popup__image');
const profileForm = document.forms['edit-profile']
const formNewElement = document.forms['new-place']
const fio = document.querySelector('.profile__title');
const profession = document.querySelector('.profile__description');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_description');
const closeButtons = document.querySelectorAll('.popup__close');
const popupCaption = document.querySelector('.popup__caption');
const placeName = document.querySelector('#popup-new-place-name');
const link = document.querySelector('#popup-new-link');

// Открытие карточки

const openCard = ({ name, link }) => {
    imgCard.src = link;
    imgCard.alt = name;

    popupCaption.textContent = name;

    openModal(popupTypeImage);
};


//const openCard = (cardLink, cardName, cardTitle) => {
   // popupTypeImage.querySelector('.popup__image').src = cardLink;
  //  popupTypeImage.querySelector('.popup__image').alt = cardName;
  //  popupTypeImage.querySelector('.popup__caption').textContent = cardTitle;
  //  openModal(popupTypeImage);
//};

// Вывести карточки на страницу

initialCards.forEach((cardData) => {
    const newCard = createCard({ cardData, onDelete: handleDeleteCard, onLike, openCard });
    placesList.append(newCard);
});

// +

profileAddButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    openModal(popupTypeNewCard);
});

// Окно редактирования

profileEditButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    nameInput.value = fio.textContent;
    jobInput.value = profession.textContent;
    openModal(popupTypeEdit);
});

// Редактирование профиля

const handleProfileFormSubmit = (evt) => {
    evt.preventDefault();
    const inputName = nameInput.value
    const inputJob = jobInput.value
    fio.textContent = inputName;
    profession.textContent = inputJob;
    closeModal(popupTypeEdit);
};

closeButtons.forEach((button) => {
    const popup = button.closest('.popup');

    button.addEventListener('click', () => closeModal(popup));
});

// Новая карточка

const handleFormNewSubmit = (evt) => {
    evt.preventDefault();

    const newCard = createCard({ cardData: { name: placeName.value, link: link.value }, onDelete: handleDeleteCard, onLike, openCard })

    placesList.prepend(newCard)

    placeName.value = ""
    link.value = ""

    closeModal(popupTypeNewCard);
    evt.target.reset();
};

profileForm.addEventListener('submit', handleProfileFormSubmit);
formNewElement.addEventListener('submit', handleFormNewSubmit);