const REGEX = /^#[а-яёa-z0-9]{1,19}$/i;
const HASHTAG = 5;

const form = document.querySelector('.img-upload__form');
const hashtagsText = form.querySelector('.text__hashtags');
const descriptionText = form.querySelector('.text__description');
const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'div',
  errorTextClass: 'img-upload__field-wrapper--error'
});

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

const validateDescription = (value) => value.length <= 140;

pristine.addValidator(hashtagsText, validateHashtags, 'Неверно указан комментарий: \nпроверьте, что он начинаниется с #;\nих не больше 5');
pristine.addValidator(descriptionText, validateDescription, 'Длина описания не может быть больше 140 символов');

const onFormSubmit = () => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    pristine.validate();
  });
};

export { onFormSubmit };
