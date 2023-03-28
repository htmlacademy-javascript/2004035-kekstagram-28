const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return(Math.floor(result));
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const getNumber = (string) => {
  if (string === undefined || string === null) {
    return NaN;
  }
  const newString = string.toString().replace(/[\D]*/g, '');
  const number = Number(newString);
  if (newString.length === 0) {
    return NaN;
  }
  return number;
};

const getObjectData = (pictureId, data) => {
  // if (data === undefined) {
  //   return;
  // }
  const currentPostData = data.find((current) => current.id === pictureId);
  return currentPostData;
};

const getCurrentPostId = (currentPicture) => {
  const currentPictureSrc = currentPicture.getAttribute('src');
  const currentPictureId = getNumber(currentPictureSrc);
  return currentPictureId;
};

export { getRandomInteger, getRandomArrayElement, getNumber, getObjectData, getCurrentPostId };
