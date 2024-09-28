import {config} from './config';

// показывает элемент ошибки

const showInputError = (formPopup, inputPopup, errorMessage, config) => {
  const errorElement = formPopup.querySelector(`.${inputPopup.id}-error`);
  inputPopup.classList.add(config.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(config.errorClass);
};

// скрывает элемент ошибки

const hideInputError = (formPopup, inputPopup, config) => {
  const errorElement = formPopup.querySelector(`.${inputPopup.id}-error`);
  inputPopup.classList.remove(config.inputErrorClass);
  errorElement.classList.remove(config.errorClass);
  errorElement.textContent = "";
};

// проверяет валидность поляe

const isValid = (formPopup, inputPopup, config) => {
  if (inputPopup.validity.patternMismatch) {
    inputPopup.setCustomValidity(inputPopup.dataset.errorMessage);
  } else {
    inputPopup.setCustomValidity("");
  };

  if (!inputPopup.validity.valid) {
    showInputError(formPopup, inputPopup, inputPopup.validationMessage, config);
  } else {
    hideInputError(formPopup, inputPopup, config);
  };
};

//  проверяет наличие невалидного поля

const hasInvalidInput = (inputList) => {
  return inputList.some((inputPopup) => {
    return !inputPopup.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement, config) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.disabled = true;
    buttonElement.classList.add(config.inactiveButtonClass);
  } else {
    buttonElement.disabled = false;
    buttonElement.classList.remove(config.inactiveButtonClass);
  };
};

const setEventListeners = (formPopup, config) => {
  const inputList = Array.from(formPopup.querySelectorAll(config.inputSelector));
  const buttonElement = formPopup.querySelector(config.submitButtonSelector);
  toggleButtonState(inputList, buttonElement, config);
  inputList.forEach((inputPopup) => {
    inputPopup.addEventListener('input', () => {
      isValid(formPopup, inputPopup, config);
      toggleButtonState(inputList, buttonElement, config);
    });
  });
};

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formPopup) => {
    setEventListeners(formPopup, config);
  });
};

const clearValidation = (formPopup, config) => {
  const inputList = Array.from(formPopup.querySelectorAll(config.inputSelector));
  const buttonElement = formPopup.querySelector(config.submitButtonSelector);
  inputList.forEach((inputPopup) => {
    hideInputError(formPopup, inputPopup, config);
  });
  toggleButtonState(inputList, buttonElement, config);
};

export {enableValidation, clearValidation, config};