import { createThumbnails } from './thumbnails.js';
import { createPosts } from './data.js';
import { addPicturesClickListener } from './open-big-picture.js';
import { setOpenFormListener } from './open-close-upload-form.js';

const dataPosts = createPosts();
createThumbnails(dataPosts);
addPicturesClickListener();
setOpenFormListener();

export {dataPosts};
