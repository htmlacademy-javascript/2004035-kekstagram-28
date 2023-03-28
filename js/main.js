import { createThumbnails } from './thumbnails.js';
// import { createPosts } from './data.js';
import { addPicturesClickListener } from './open-big-picture.js';
import { setOpenFormListener } from './open-close-upload-form.js';
import { getData } from './api.js';

// console.log(getData());

// const dataPosts = getData();
// createThumbnails(dataPosts);

getData()
  .then((posts) => {
    createThumbnails(posts);
    return posts;
  })
  .then((data) => addPicturesClickListener(data));

// addPicturesClickListener();
setOpenFormListener();

// export {dataPosts};
