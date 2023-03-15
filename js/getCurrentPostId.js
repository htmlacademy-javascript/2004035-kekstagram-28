import { getNumber } from './util.js';

function getCurrentPostId(currentPicture) {
  const currentPictureSrc = currentPicture.getAttribute('src');
  const currentPictureId = getNumber(currentPictureSrc);
  return currentPictureId;
}

export { getCurrentPostId };
