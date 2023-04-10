import { createBigPicture, removeEventFillComments } from './create-big-picture.js';
import { getCurrentPostId, getObjectData, isEscapeKey } from './util.js';

const bigPicture = document.querySelector('.big-picture');
const body = document.querySelector('body');
const closePictureButton = document.querySelector('.big-picture__cancel');
const socialCommentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');

const onClosePictureClick = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  removeEventFillComments();
  socialCommentCount.classList.remove('hidden');
  commentsLoader.classList.remove('hidden');
  closePictureButton.removeEventListener('click', onClosePictureClick);
};

const closePicture = () => onClosePictureClick();

const onEscapeKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    closePicture();
    document.removeEventListener('keydown', onEscapeKeydown);
  }
};

const openPicture = (pic, dataPosts) => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  const postId = getCurrentPostId(pic) - 1;
  const currentPost = getObjectData(postId, dataPosts);
  createBigPicture(currentPost);
  closePictureButton.addEventListener('click', onClosePictureClick);
  document.addEventListener('keydown', onEscapeKeydown);
};

let picture;

const addPicturesClickListener = (dataPosts) => {
  const pictures = document.querySelector('.pictures');
  pictures.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('picture__img')) {
      picture = evt.target;
      openPicture(picture, dataPosts);
      evt.preventDefault();
    }
  });
  return picture;
};

export { addPicturesClickListener };
