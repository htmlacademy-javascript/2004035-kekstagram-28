import './thumbnails.js';
import './fullscreen.js';
import { createThumbnails } from './thumbnails.js';
import { createPosts } from './data.js';
import { addListener } from './fullscreen.js';

const dataPosts = createPosts();
createThumbnails(dataPosts);
addListener();
