import './thumbnails.js';
import './openBigPicture.js';
import { createThumbnails } from './thumbnails.js';
import { createPosts } from './data.js';
import { addListener } from './openBigPicture.js';

const dataPosts = createPosts();
createThumbnails(dataPosts);
addListener();

export {dataPosts};
