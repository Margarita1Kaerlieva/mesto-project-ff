const config = {
    baseUrl: 'https://nomoreparties.co/v1/pwff-cohort-1',
    headers: {
      authorization: 'e883ad56-3b55-4201-ac2c-be4a43c0fd2c',
      'Content-Type': 'application/json'
    }
}

const handeleResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
};

// Загрузка информации о пользователе с сервера

export const getInfoUser = () => {
  return fetch(`${config.baseUrl}/users/me`, {
    method: 'GET',
    headers: config.headers
  })
  .then(handeleResponse)
};

// Загрузка карточек с сервера

export const getInitialCards = () => {
    return fetch(`${config.baseUrl}/cards`, {
        method: 'GET',
        headers: config.headers
    })
    .then(handeleResponse)
};

// Редактирование профиля

export const editInfoUser = (name, about) => {
  return fetch(`${config.baseUrl}/users/me`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      name: name, 
      about: about
    })
  })
  .then(handeleResponse)
};

//  Добавление новой карточки

export const addNewCards = (placeName, placelink) => {
  return fetch(`${config.baseUrl}/cards`, {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify({
        name: placeName, 
        link: placelink
      })
    })
    .then(handeleResponse)
};

// Удаление карточки

export const deleteCards = (cardId) => {
  return fetch(`${config.baseUrl}/cards/${cardId}`, {
    method: 'DELETE',
    headers: config.headers
  })
  .then(handeleResponse)
};

// Постановка лайка

export const likeCards = (cardId) => {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: 'PUT',
    headers: config.headers
  })
  .then(handeleResponse)
};

// Cнятие лайка

export const deleteLike = (cardId) => {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: 'DELETE',
    headers: config.headers
  })
  .then(handeleResponse)
};

//  Обновление аватара пользователя

export const addAvatar = (avatarLink) => {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      avatar: avatarLink
      })
  })
  .then(handeleResponse)
};
