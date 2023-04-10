const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('a');
const dataPostsFragment = document.createDocumentFragment();
const picturesContainer = document.querySelector('.pictures');

const createThumbnail = (elementData) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  const countComments = elementData.comments.length;
  pictureElement.querySelector('.picture__img').src = elementData.url;
  pictureElement.querySelector('.picture__likes').textContent = elementData.likes;
  pictureElement.querySelector('.picture__comments').textContent = countComments;
  return pictureElement;
};

const generateThumbnails = (data) => {
  for (let i = 0; i < data.length; i++) {
    const element = createThumbnail(data[i]);
    dataPostsFragment.appendChild(element);
  }
  picturesContainer.appendChild(dataPostsFragment);
};

export {generateThumbnails };
