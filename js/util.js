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
  const currentPostData = data.find((current) => current.id === pictureId);
  return currentPostData;
};

const getCurrentPostId = (currentPicture) => {
  const currentPictureSrc = currentPicture.getAttribute('src');
  const currentPictureId = getNumber(currentPictureSrc);
  return currentPictureId;
};

const onWithinAlertClick = (evt, className, cb) => {
  if (evt.target.className === className) {
    cb();
  }
};

const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

const isEscapeKey = (evt) => evt.key === 'Escape';

export { getNumber, getObjectData, getCurrentPostId, onWithinAlertClick, debounce, isEscapeKey };
