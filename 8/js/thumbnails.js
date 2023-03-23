const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('a');
const dataPostsFragment = document.createDocumentFragment();
const picturesContainer = document.querySelector('.pictures');

const createThumbnails = (data) => {
  data.forEach(({url, likes, comments}) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    const countComments = comments.length;
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = countComments;

    dataPostsFragment.appendChild(pictureElement);
  });
  picturesContainer.appendChild(dataPostsFragment);
};

export {createThumbnails };
