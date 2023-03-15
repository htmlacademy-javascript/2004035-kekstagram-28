import { createBigPicture } from './createBigPicture.js';
// import { socialCommentCount } from './thumbnails.js';

const bigPicture = document.querySelector('.big-picture');
const body = document.querySelector('body');
const closePictureButton = document.querySelector('.big-picture__cancel');
const socialCommentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');

const closePicture = function () {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  socialCommentCount.classList.remove('hidden');
  commentsLoader.classList.remove('hidden');
  closePictureButton.removeEventListener('click', closePicture);
};

const openPicture = function (pic) {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  socialCommentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  createBigPicture(pic);
  closePictureButton.addEventListener('click', closePicture);
};

let picture;

const addListener = function () {
  const pictures = document.querySelector('.pictures');
  pictures.addEventListener('click', (evt) => {
    evt.preventDefault();
    if (evt.target.classList.contains('picture__img')) {
      picture = evt.target;
      openPicture(picture);
    }
  });
  return picture;
};

export { addListener, picture };
