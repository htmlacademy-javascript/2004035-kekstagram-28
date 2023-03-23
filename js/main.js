import { createThumbnails } from './thumbnails.js';
import { createPosts } from './data.js';
import { addPicturesClickListener } from './open-big-picture.js';
import { openFormListener } from './open-close-upload-form.js';

const dataPosts = createPosts();
createThumbnails(dataPosts);
addPicturesClickListener();
openFormListener();

export {dataPosts};
