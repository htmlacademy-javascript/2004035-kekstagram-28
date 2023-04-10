import { sendData } from './api.js';
import { onSuccess, onFail } from './open-close-form-alert.js';

const REGEX = /^#[а-яёa-z0-9]{1,19}$/i;
const HASHTAG = 5;
const MAX_LENGTH_DESSCRIPTION = 140;

const form = document.querySelector('.img-upload__form');
const hashtagsText = form.querySelector('.text__hashtags');
const descriptionText = form.querySelector('.text__description');
const submitButton = form.querySelector('.img-upload__submit');
const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'div',
  errorTextClass: 'img-upload__field-wrapper--error'
});
const SubmitButtonText = {
  IDLE: 'Опубликовать',
  SENDING: 'Публикую...'
};
const ErrorTextMessage = {
  HashtagErrorMessage: 'Неверно указан комментарий: \nпроверьте, что он начинаниется с #;\nих не больше 5',
  DescriptionErrorMessage: 'Длина описания не может быть больше 140 символов'
};

const hasDuplicates = (value) => {
  const lowerCaseTags = value.map((tag) => tag.toLowerCase());
  return lowerCaseTags.length === new Set(lowerCaseTags).size;
};
const isAmountValid = (value) => value.length <= HASHTAG;
const isEveryItemValid = (value) => REGEX.test(value);

const validateHashtags = (value) => {
  const tags = value
    .trim()
    .split(' ')
    .filter((tag) => tag.trim().length);
  return isAmountValid(tags) && hasDuplicates(tags) && tags.every(isEveryItemValid);
};

const validateDescription = (value) => value.length <= MAX_LENGTH_DESSCRIPTION;

pristine.addValidator(hashtagsText, validateHashtags, ErrorTextMessage.HashtagErrorMessage);
pristine.addValidator(descriptionText, validateDescription, ErrorTextMessage.DescriptionErrorMessage);

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = SubmitButtonText.SENDING;
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = SubmitButtonText.IDLE;
};

const onFormSubmit = () => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      sendData(new FormData(evt.target))
        .then(onSuccess)
        .catch(onFail)
        .finally(unblockSubmitButton());
    }
  });
};

export { onFormSubmit };
