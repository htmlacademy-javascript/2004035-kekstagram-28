import { createThumbnails } from './thumbnails.js';
import { createPosts } from './data.js';
import { addPicturesClickListener } from './open-big-picture.js';
import { openFormListener } from './open-close-upload-form.js';

const uploadInputButton = document.querySelector('#upload-file');

const dataPosts = createPosts();
createThumbnails(dataPosts);
addPicturesClickListener();
openFormListener();
uploadInputButton.addEventListener('click', () => {
  // eslint-disable-next-line no-console
  console.log('click');
});

export {dataPosts};
