import { createComments } from './createComments.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureLikes = bigPicture.querySelector('.likes-count');
const bigPictureCommentsCount = bigPicture.querySelector('.comments-count');
const bigPictureDesctiption = bigPicture.querySelector('.social__caption');
const socialComments = document.querySelector('.social__comments');
const socialComment = document.querySelector('.social__comment');

const createBigPicture = function (post) {
  bigPicture.querySelector('.big-picture__img img').src = post.url;
  bigPicture.querySelector('.big-picture__img img').alt = post.description;
  bigPictureLikes.textContent = post.likes;
  bigPictureCommentsCount.textContent = post.comments.length;
  bigPictureDesctiption.textContent = post.description;
  createComments(post, socialComments, socialComment);
};

export { createBigPicture };
