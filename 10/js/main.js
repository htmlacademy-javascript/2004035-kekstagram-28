import { createThumbnails } from './thumbnails.js';
import { addPicturesClickListener } from './open-big-picture.js';
import { setOpenFormListener } from './open-close-upload-form.js';
import { getData } from './api.js';
import { initSuccesseAlert, initFailAlert } from './open-close-form-alert.js';

getData()
  .then((posts) => {
    createThumbnails(posts);
    return posts;
  })
  .then((data) => addPicturesClickListener(data));

initSuccesseAlert();
initFailAlert();
setOpenFormListener();
