import { createBigPicture } from './create-big-picture.js';
import { getCurrentPostId, getObjectData } from './util.js';
import { dataPosts } from './main.js';

const bigPicture = document.querySelector('.big-picture');
const body = document.querySelector('body');
const closePictureButton = document.querySelector('.big-picture__cancel');
const socialCommentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');

const closePicture = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  socialCommentCount.classList.remove('hidden');
  commentsLoader.classList.remove('hidden');
  closePictureButton.removeEventListener('click', closePicture);
};

const closePictureIfEsc = (evt) => {
  if (evt.key === 'Escape') {
    closePicture();
    document.removeEventListener('keydown', closePictureIfEsc);
  }
};

const openPicture = (pic) => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  socialCommentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  const postId = getCurrentPostId(pic);
  const currentPost = getObjectData(postId, dataPosts);
  createBigPicture(currentPost);
  closePictureButton.addEventListener('click', closePicture);
  document.addEventListener('keydown', closePictureIfEsc);
};

let picture;

const addPicturesClickListener = () => {
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

export { addPicturesClickListener };
