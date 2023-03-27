import { onFormSubmit } from './user-form.js';
import { changeImgScale } from './img-scale.js';
import { changeEffects, resetEffect, initSlider } from './effects.js';

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
  resetEffect();
};

const onFormKeydown = (evt) => {
  if (evt.key === 'Escape') {
    closeForm();
    document.removeEventListener('keydown', onFormKeydown);
  }
};

const onInputKeydown = (evt) => {
  if (evt.key === 'Escape' && (textHashtags === document.activeElement || textDescription === document.activeElement)) {
    evt.stopPropagation();
  }
};

const openForm = () => {
  imgUploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  closeFormButton.addEventListener('click', closeForm);
  document.addEventListener('keydown', onFormKeydown);
  textDescription.addEventListener('keydown', onInputKeydown);
  textHashtags.addEventListener('keydown', onInputKeydown);
  // createSlider();
  // changeImgScale();
  changeEffects();
};

const setOpenFormListener = () => {
  document.addEventListener('change', openForm);
  initSlider();
  changeImgScale();
  onFormSubmit();
};

export { setOpenFormListener };
