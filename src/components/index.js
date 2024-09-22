import '../pages/index.css';
// import {initialCards} from './cards.js';
import {createCard,
     handleDeleteCard
    } from './card.js';
import {openModal, closeModal} from './modal.js';
import {enableValidation, clearValidation, config} from './validation.js'
import {placesList, profileEditButton, popupTypeEdit, profileAddButton, popupTypeNewCard,
popupTypeImage, imgCard, profileForm, formNewElement, fio, profession, nameInput, jobInput, 
closeButtons, popupCaption, placeName, urlInput, profileImage, buttonPopup, popupTypeAvatar, avatarUrlInput, profileFormAvatar} from './constans.js'
import {getInfoUser, getInitialCards, editInfoUser, addNewCards, likeCards, deleteLike, addAvatar} from './api.js';

let userId = "";

// данные о карточках
let cards = []; 

const onLike = (_id, isLiked) => {
    if (isLiked) {
        return deleteLike(_id).then(res => {
            cards.forEach(card => {
                if (card._id === _id) {
                    card.likes = res.likes;
                }
            })
            rerenderCards();
        })
    } else {
        return likeCards(_id).then(res => {
            console.log(_id, res);
            cards.forEach(card => {
                if (card._id === _id) {
                    card.likes = res.likes;
                }
            })

            console.log(cards.find(card => card._id === _id));
            rerenderCards();
        })
    }
}

const rerenderCards = () => {
    placesList.innerHTML = "";

    cards.forEach(card => {
        const newCard = createCard({ cardData: card, userId, onDelete: handleDeleteCard, onLike, openCard });
        placesList.append(newCard);
    })
}

const init = () => {
    Promise.all([getInfoUser(), getInitialCards()]).then(([user, initialCards]) => {
        profileImage.style.backgroundImage = `url('${user.avatar}')`;
        fio.textContent = user.name;
        profession.textContent = user.about;

        userId = user._id;

        cards = initialCards;
        rerenderCards();
    })
}

init()

// Открытие карточки

const openCard = ({ name, link }) => {
    imgCard.src = link;
    imgCard.alt = name;
    popupCaption.textContent = name;
    openModal(popupTypeImage);
};

// +

profileAddButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    openModal(popupTypeNewCard);
});

// Окно редактирования

profileEditButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    clearValidation(popupTypeEdit, config);
    nameInput.value = fio.textContent;
    jobInput.value = profession.textContent;
    openModal(popupTypeEdit);
});

// редактирование аватара

profileImage.addEventListener('click', (evt) => {
    evt.preventDefault();
    openModal(popupTypeAvatar);
});

const handleProfileFormSubmit = (evt) => {
    evt.preventDefault();

    const inputName = nameInput.value
    const inputJob = jobInput.value

    const btn = evt.target.querySelector('.popup__button');
    btn.textContent = 'Сохранение...'; 

    editInfoUser(inputName, inputJob).then(user => {
        btn.textContent = 'Сохранить';
        fio.textContent = user.name;
        profession.textContent = user.about;

        closeModal(popupTypeEdit);
        clearValidation(popupTypeEdit, config);
    })
};

closeButtons.forEach((button) => {
    const popup = button.closest('.popup');
    button.addEventListener('click', () => closeModal(popup));
});

// Новая карточка

const handleFormNewSubmit = (evt) => {
    evt.preventDefault();

    const name = placeName.value
    const link = urlInput.value

    const btn = evt.target.querySelector('.popup__button');
    btn.textContent = 'Сохранение...'; 

    console.log(buttonPopup)

    addNewCards(name, link).then((cardData) => {
        const newCard = createCard({ cardData, userId, onDelete: handleDeleteCard, onLike, openCard });
        btn.textContent = 'Сохранить';
        placesList.prepend(newCard)
        placeName.value = ""
        urlInput.value = ""
        closeModal(popupTypeNewCard);
        evt.target.reset();
        clearValidation(popupTypeNewCard, config);
    });  
};

const profileFormAvatarSubmit = (evt) => {
    evt.preventDefault();

    const url = avatarUrlInput.value;

    const btn = evt.target.querySelector('.popup__button');
    btn.textContent = 'Сохранение...'; 

    addAvatar(url).then(res => {
        profileImage.style.backgroundImage = `url('${res.avatar}')`;
        btn.textContent = 'Сохранить';
        closeModal(popupTypeAvatar);
        evt.target.reset();
        clearValidation(popupTypeAvatar, config);
    });
};

profileForm.addEventListener('submit', handleProfileFormSubmit);
formNewElement.addEventListener('submit', handleFormNewSubmit);
profileFormAvatar.addEventListener('submit', profileFormAvatarSubmit);
enableValidation(config); 
clearValidation(popupTypeEdit, config); 