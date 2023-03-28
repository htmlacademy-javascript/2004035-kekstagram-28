import { closeForm } from './open-close-upload-form.js';
import { onClickWithinAlert } from './util.js';

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

const removeSuccesseAlert = () => {
  successBlock.classList.add('hidden');
  closeSuccesseAlertButton.removeEventListener('click', removeSuccesseAlert);
  document.removeEventListener('click', (evt) => {
    onClickWithinAlert(evt, 'success', removeSuccesseAlert);
  });
  closeForm();
};

const onSuccesseAlertKeydown = (evt) => {
  if (evt.key === 'Escape') {
    removeSuccesseAlert();
    document.removeEventListener('keydown', onSuccesseAlertKeydown);
  }
};

const closeSuccesseAlert = () => {
  closeSuccesseAlertButton.addEventListener('click', removeSuccesseAlert);
  document.addEventListener('keydown', onSuccesseAlertKeydown);
  document.addEventListener('click', (evt) => {
    onClickWithinAlert(evt, 'success', removeSuccesseAlert);
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

const removeFailAlert = () => {
  failBlock.classList.add('hidden');
};

const onFailAlertKeydown = (evt) => {
  if (evt.key === 'Escape') {
    removeFailAlert();
    document.removeEventListener('keydown', onFailAlertKeydown);
    evt.stopPropagation();
  }
};

const closeFailAlert = () => {
  closeFailAlertButton.addEventListener('click', removeFailAlert);
  document.body.addEventListener('keydown', onFailAlertKeydown);
  document.addEventListener('click', (evt) => {
    onClickWithinAlert(evt, 'error', removeFailAlert);
  });
};

const onFail = () => {
  failBlock.classList.remove('hidden');
  closeFailAlert();
};

export { initSuccesseAlert, initFailAlert, onSuccess, onFail };
