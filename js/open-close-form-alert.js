import { closeForm } from './open-close-upload-form.js';
import { isEscapeKey, onWithinAlertClick } from './util.js';

const successTemplate = document.querySelector('#success').content;
const successBlock = successTemplate.querySelector('.success');
const closeSuccesseAlertButton = successBlock.querySelector('.success__button');
const failTemplate = document.querySelector('#error').content;
const failBlock = failTemplate.querySelector('.error');
const closeFailAlertButton = failBlock.querySelector('.error__button');

const initSuccesseAlert = () => {
  document.body.append(successTemplate);
  successBlock.classList.add('hidden');
};

const onModalClick = () => {
  successBlock.classList.add('hidden');
  closeSuccesseAlertButton.removeEventListener('click', onModalClick);
  document.removeEventListener('click', (evt) => {
    onWithinAlertClick(evt, 'success', onModalClick);
  });
  closeForm();
};

const onModalSuccessesKeydown = () => onModalClick();

const onSuccesseAlertKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    onModalSuccessesKeydown();
    document.removeEventListener('keydown', onSuccesseAlertKeydown);
  }
};

const closeSuccesseAlert = () => {
  closeSuccesseAlertButton.addEventListener('click', onModalClick);
  document.addEventListener('keydown', onSuccesseAlertKeydown);
  document.addEventListener('click', (evt) => {
    onWithinAlertClick(evt, 'success', onModalClick);
  });
};

const onSuccess = () => {
  successBlock.classList.remove('hidden');
  closeSuccesseAlert();
};

const initFailAlert = () => {
  document.body.append(failTemplate);
  failBlock.classList.add('hidden');
};

const onFailModalClick = () => {
  failBlock.classList.add('hidden');
};

const onFailModalKeydown = () => onFailModalClick();

const onFailAlertKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    onFailModalKeydown();
    document.removeEventListener('keydown', onFailAlertKeydown);
    evt.stopPropagation();
  }
};

const closeFailAlert = () => {
  closeFailAlertButton.addEventListener('click', onFailModalClick);
  document.body.addEventListener('keydown', onFailAlertKeydown);
  document.addEventListener('click', (evt) => {
    onWithinAlertClick(evt, 'error', onFailModalClick);
  });
};

const onFail = () => {
  failBlock.classList.remove('hidden');
  closeFailAlert();
};

export { initSuccesseAlert, initFailAlert, onSuccess, onFail };
