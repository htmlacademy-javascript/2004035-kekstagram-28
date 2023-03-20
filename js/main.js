import { createThumbnails } from './thumbnails.js';
import { createPosts } from './data.js';
import { addPicturesClickListener } from './open-big-picture.js';
import { validate } from './user-form.js';
import { openDownloadImg } from './open-download-img.js';

const dataPosts = createPosts();
createThumbnails(dataPosts);
addPicturesClickListener();
openDownloadImg();
validate();

export {dataPosts};
