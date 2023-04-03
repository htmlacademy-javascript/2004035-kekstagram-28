import { createBigPicture } from './create-big-picture.js';
import { getCurrentPostId, getObjectData } from './util.js';
import { viewComments, onClickShowYet } from './viewComments.js';

const bigPicture = document.querySelector('.big-picture');
const body = document.querySelector('body');
const closePictureButton = document.querySelector('.big-picture__cancel');
const socialCommentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
const commentsLoaderButton = document.querySelector('.social__comments-loader');

const closePicture = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  socialCommentCount.classList.remove('hidden');
  commentsLoader.classList.remove('hidden');
  closePictureButton.removeEventListener('click', closePicture);
  commentsLoaderButton.removeEventListener('click', onClickShowYet);
};

const closePictureIfEsc = (evt) => {
  if (evt.key === 'Escape') {
    closePicture();
    document.removeEventListener('keydown', closePictureIfEsc);
  }
};

const setClickShowButton = () => {
  commentsLoaderButton.addEventListener('click', onClickShowYet);
};

const openPicture = (pic, dataPosts) => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  const postId = getCurrentPostId(pic) - 1;
  const currentPost = getObjectData(postId, dataPosts);
  createBigPicture(currentPost);
  closePictureButton.addEventListener('click', closePicture);
  document.addEventListener('keydown', closePictureIfEsc);
  viewComments();
  setClickShowButton();
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
