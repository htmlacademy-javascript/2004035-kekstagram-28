import { dataPosts } from './main.js';
import { createComments } from './createComments.js';
import { getCurrentPostId } from './getCurrentPostId.js';
import { getObjectData } from './getObjectData.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureLikes = bigPicture.querySelector('.likes-count');
const bigPictureCommentsCount = bigPicture.querySelector('.comments-count');
const bigPictureDesctiption = bigPicture.querySelector('.social__caption');
const socialComments = document.querySelector('.social__comments');
const socialComment = document.querySelector('.social__comment');

const createBigPicture = function (currentPicture) {
  const postId = getCurrentPostId(currentPicture);
  const currentPost = getObjectData(postId, dataPosts);
  bigPicture.querySelector('.big-picture__img img').src = currentPost.url;
  bigPictureLikes.textContent = currentPost.likes;
  bigPictureCommentsCount.textContent = currentPost.comments.length;
  bigPictureDesctiption.textContent = currentPost.description;
  createComments(currentPost, socialComments, socialComment);
};

export { createBigPicture };
