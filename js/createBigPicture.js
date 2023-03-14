import { getNumber } from './util.js';
import { dataPosts } from './main.js';

const createBigPicture = function (currentPicture) {
  const currentPictureSrc = currentPicture.querySelector('img').getAttribute('src');
  const currentPictureId = getNumber(currentPictureSrc);
  const currentPost = dataPosts.find((current) => current.id === currentPictureId);
  const bigPicture = document.querySelector('.big-picture');
  bigPicture.querySelector('.big-picture__img img').src = currentPost.url;
  bigPicture.querySelector('.likes-count').textContent = currentPost.likes;
  bigPicture.querySelector('.comments-count').textContent = currentPost.comments.length;
  bigPicture.querySelector('.social__caption').textContent = currentPost.description;
  const createComments = function () {
    const socialComments = document.querySelector('.social__comments');
    const socialComment = document.querySelector('.social__comment');
    const commentsFragment = document.createDocumentFragment();

    if (currentPost.comments.length) {
      socialComments.innerHTML = '';
    }

    const dataComments = currentPost.comments;
    dataComments.forEach(({avatar, message, name}) => {
      const commentClone = socialComment.cloneNode(true);
      commentClone.querySelector('img').src = avatar;
      commentClone.querySelector('img').alt = name;
      commentClone.querySelector('.social__text').textContent = message;
      commentsFragment.appendChild(commentClone);
    });
    socialComments.appendChild(commentsFragment);
  };
  createComments(currentPost);
};

export { createBigPicture };
