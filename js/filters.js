import { createThumbnails } from './thumbnails.js';
// import { debounce } from './util.js';

const filtersBlock = document.querySelector('.img-filters');
const filtersForm = document.querySelector('.img-filters__form');
const filterButtons = filtersForm.querySelectorAll('.img-filters__button');

const showFiltersBlock = () => {
  filtersBlock.classList.remove('img-filters--inactive');
};

const Filter = {
  default: (elem) => elem,
  random: () => Math.random() - 0.5,
  discussed: (postA, postB) => postB.comments.length - postA.comments.length,
};

const removeThumbnails = () => {
  document.querySelectorAll('a.picture').forEach((el) => el.remove());
};

const onClickFilter = (data, evt) => {
  let currentPhotos = [];
  if (evt.target.classList.contains('img-filters__button')) {
    const sortType = evt.target.id.slice(7);
    const getSortPosts = () => data.slice().sort(Filter[sortType]);
    currentPhotos = getSortPosts();
    if (sortType === 'random') {
      currentPhotos = currentPhotos.slice(0, 10);
    }
  }
  removeThumbnails();
  createThumbnails(currentPhotos);
};

const setClickFilter = (cb) => {
  filtersForm.addEventListener('click', (evt) => {
    filterButtons.forEach((btn) => btn.classList.remove('img-filters__button--active'));
    evt.target.classList.add('img-filters__button--active');
    cb(evt);
  });
};

export { showFiltersBlock, setClickFilter, onClickFilter };
