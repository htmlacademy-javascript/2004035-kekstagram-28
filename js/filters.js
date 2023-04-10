import { generateThumbnails } from './thumbnails.js';

const SORT_RANDOM = 'random';
const MAX_SHOW_COMMENTS = 10;

const filtersBlock = document.querySelector('.img-filters');
const filtersForm = document.querySelector('.img-filters__form');
const filterButtons = filtersForm.querySelectorAll('.img-filters__button');

const showFiltersBlock = () => {
  filtersBlock.classList.remove('img-filters--inactive');
};

const Filter = {
  default: (element) => element,
  random: () => Math.random() - 0.5,
  discussed: (postA, postB) => postB.comments.length - postA.comments.length,
};

const removeThumbnails = () => {
  document.querySelectorAll('a.picture').forEach((element) => element.remove());
};

const onFilterClick = (data, evt) => {
  let currentPhotos = [];
  if (evt.target.classList.contains('img-filters__button')) {
    const sortType = evt.target.dataset.filter;
    const getSortPosts = () => data.slice().sort(Filter[sortType]);
    currentPhotos = getSortPosts();
    if (sortType === SORT_RANDOM) {
      currentPhotos = currentPhotos.slice(0, MAX_SHOW_COMMENTS);
    }
  }
  removeThumbnails();
  generateThumbnails(currentPhotos);
};

const setClickFilter = (cb) => {
  filtersForm.addEventListener('click', (evt) => {
    filterButtons.forEach((btn) => btn.classList.remove('img-filters__button--active'));
    evt.target.classList.add('img-filters__button--active');
    cb(evt);
  });
};

export { showFiltersBlock, setClickFilter, onFilterClick };
