const REGEX = '^#[а-яёa-z0-9]{1,19}$';
const HASHTAG = 5;

const form = document.querySelector('.img-upload__form');
const hashtagsText = form.querySelector('.text__hashtags');
const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'div'
});
let errorKey;

const noDublicates = (arr) => new Set(arr).size === arr.length;
const isAmountValid = (arr) => arr.length <= HASHTAG;
const isEveryItemValid = (hashtags) => hashtags.every((hashtag) => REGEX.test(hashtag));

const validationRules = {
  dublicate: noDublicates,
  length: isAmountValid,
  regex: isEveryItemValid
};

const errorMessages = {
  dublicate: 'Один и тот же хэш-тег не может быть использован дважды.',
  length: 'Нельзя указать больше пяти хэш-тегов.',
  regex: 'Хэш-тег начинается с символа #, максимальная длина одного хэш-тега 20 символов, включая решётку. Хэш-теги разделяются пробелами.'
};

const validateHashtag = (inputValue) => {
  const hashtags = inputValue.trim().toLowerCase().split(/\s+/).filter(Boolean);
  const isValid = Object.entries(validationRules).every(([key, validationFn]) => {
    const result = validationFn(hashtags);
    errorKey = key;
    return result;
  });
  return isValid;
};

const getErrorsMessage = errorMessages[errorKey];

const validateForm = () => {
  pristine.addValidator(hashtagsText, validateHashtag, getErrorsMessage);
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    if (pristine.validate()) {
      // eslint-disable-next-line no-console
      console.log('ok');
    } else {
      // eslint-disable-next-line no-console
      console.log('you have a problem');
    }
  });
};

export { validateForm };
