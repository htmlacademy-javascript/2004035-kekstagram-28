import { onFormSubmit } from './user-form.js';
import { decreaseSize, increaseSize, resetScale } from './img-scale.js';
import { changeEffects, resetEffect, initSlider } from './effects.js';
import { isEscapeKey } from './util.js';

const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const uploadInputButton = document.querySelector('#upload-file');
const textDescription = document.querySelector('.text__description');
const textHashtags = document.querySelector('.text__hashtags');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const closeFormButton = document.querySelector('.img-upload__cancel');
const body = document.querySelector('body');
const inputImg = document.querySelector('.img-upload__input');
const previewImg = document.querySelector('.img-upload__preview img');
const decreaseScaleButton = document.querySelector('.scale__control--smaller');
const increaseScaleButton = document.querySelector('.scale__control--bigger');

const onCloseFormClick = () => {
  resetScale();
  imgUploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  closeFormButton.removeEventListener('click', onCloseFormClick);
  document.removeEventListener('keydown', onFormKeydown);
  increaseScaleButton.removeEventListener('click', increaseSize);
  decreaseScaleButton.removeEventListener('click', decreaseSize);
  uploadInputButton.value = '';
  textHashtags.value = '';
  textDescription.value = '';
  resetEffect();
  if (document.querySelector('.img-upload__field-wrapper--error') !== null) {
    document.querySelector('.img-upload__field-wrapper--error').remove();
  } else {
    return true;
  }
};

const closeForm = () => onCloseFormClick();

function onFormKeydown (evt){
  if (isEscapeKey(evt)) {
    closeForm();
    document.removeEventListener('keydown', onFormKeydown);
  }
}

const onInputKeydown = (evt) => {
  if (isEscapeKey(evt) && (textHashtags === document.activeElement || textDescription === document.activeElement)) {
    evt.stopPropagation();
  }
};

const uplouadImg = () => {
  const file = inputImg.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((item) => fileName.endsWith(item));
  if (matches) {
    previewImg.src = URL.createObjectURL(file);
  }
};

const openForm = () => {
  resetScale();
  imgUploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  closeFormButton.addEventListener('click', onCloseFormClick);
  document.addEventListener('keydown', onFormKeydown);
  textDescription.addEventListener('keydown', onInputKeydown);
  textHashtags.addEventListener('keydown', onInputKeydown);
  uplouadImg();
  changeEffects();
  increaseScaleButton.addEventListener('click', increaseSize);
  decreaseScaleButton.addEventListener('click', decreaseSize);
};

const setOpenFormListener = () => {
  document.addEventListener('change', openForm);
  initSlider();
  onFormSubmit();
};

export { setOpenFormListener, closeForm };
