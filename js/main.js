import { createThumbnails } from './thumbnails.js';
import { createPosts } from './data.js';
import { addPicturesClickListener } from './open-big-picture.js';

const dataPosts = createPosts();
createThumbnails(dataPosts);
addPicturesClickListener();

export {dataPosts};
