import { validateForm } from './user-form.js';

const uploadInputButton = document.querySelector('#upload-file');
const textDescription = document.querySelector('.text__description');
const textHashtags = document.querySelector('.text__hashtags');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const closeFormButton = document.querySelector('.img-upload__cancel');
const body = document.querySelector('body');

const closeForm = () => {
  imgUploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  closeFormButton.removeEventListener('click', closeForm);
  uploadInputButton.value = '';
};

const closeFormIfEsc = (evt) => {
  if (evt.key === 'Escape') {
    closeForm();
    document.removeEventListener('keydown', closeFormIfEsc);
  }
};

const notNeedCloseIfEsc = (evt) => {
  if (evt.key === 'Escape') {
    evt.stopPropagation();
    textDescription.removeEventListener('keydown', notNeedCloseIfEsc);
    textHashtags.removeEventListener('keydown', notNeedCloseIfEsc);
  }
};

const openForm = () => {
  imgUploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  closeFormButton.addEventListener('click', closeForm);
  document.addEventListener('keydown', closeFormIfEsc);
  textDescription.addEventListener('keydown', notNeedCloseIfEsc);
  textHashtags.addEventListener('keydown', notNeedCloseIfEsc);
};

const openFormListener = () => {
  document.addEventListener('change', openForm);
  validateForm();
};

export { openFormListener };
