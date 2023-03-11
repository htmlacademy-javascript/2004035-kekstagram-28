import {createPosts} from './data.js';

const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('a');
const dataPosts = createPosts();
const dataPostsFragment = document.createDocumentFragment();
const picturesContainer = document.querySelector('.pictures');

dataPosts.forEach(({url, likes, comments}) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  const countComments = comments.length;
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = countComments;

  dataPostsFragment.appendChild(pictureElement);
});

picturesContainer.appendChild(dataPostsFragment);
