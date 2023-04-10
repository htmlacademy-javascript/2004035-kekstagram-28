import { generateThumbnails } from './thumbnails.js';
import { addPicturesClickListener } from './open-big-picture.js';
import { setOpenFormListener } from './open-close-upload-form.js';
import { getData } from './api.js';
import { initSuccesseAlert, initFailAlert } from './open-close-form-alert.js';
import { showFiltersBlock, setClickFilter, onFilterClick } from './filters.js';
import { debounce } from './util.js';

const TIMEOUT_DELAY = 500;

getData()
  .then((posts) => {
    generateThumbnails(posts);
    return posts;
  })
  .then((data) => {
    showFiltersBlock();
    setClickFilter(
      debounce(
        (evt) => onFilterClick(data, evt),
        TIMEOUT_DELAY
      )
    );
    return data;
  })
  .then((data) => addPicturesClickListener(data));

initSuccesseAlert();
initFailAlert();
setOpenFormListener();
