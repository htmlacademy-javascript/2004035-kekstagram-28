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

// const validTemplate = (value) => {
//   const tags = value
//     .trim()
//     .split(' ')
//     .filter((tag) => tag.trim().length);
//   return tags;
// };

const noDublicates = (value) => {
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
  console.log(isAmountValid(tags));
  console.log(noDublicates(tags));
  console.log(tags.every(isEveryItemValid));
  return isAmountValid(tags) && noDublicates(tags) && tags.every(isEveryItemValid);
};

const validateDescription = (value) => value.length <= 140;

pristine.addValidator(hashtagsText, validateHashtags, 'ERROR');
pristine.addValidator(descriptionText, validateDescription, 'Длина описания не может быть больше 140 символов');

// const errorMessages = {
//   dublicate: 'Хэштеги не доджны повторяться',
//   nonValide: 'Убедитесь, что хэштеги начинаются с #, содержат только буквы и цифры, имеют длину от 2 до 20 символов и разделяются пробелами',
//   okCount : 'Не должно быть больше 5 хэштегов'
// };

// pristineHashtag.addValidator(hashtagsText, noDublicates, errorMessages.dublicate);
// pristineHashtag.addValidator(hashtagsText, isAmountValid, errorMessages.okCount);
// pristineHashtag.addValidator(hashtagsText, isEveryItemValid, errorMessages.nonValide);


const validateForm = () => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    console.log(pristine);
    console.log(pristine.validate());
    // console.log(noDublicates(hashtagsText));
    // console.log(isAmountValid(hashtagsText));
    // console.log(isEveryItemValid(hashtagsText));
    if (pristine.validate()) {
      console.log('ok');
    } else {
      console.log('you have a problem');
    }
  });
};

export { validateForm };
