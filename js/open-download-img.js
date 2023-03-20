const uploadFileButton = document.querySelector('.img-upload__control');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const imgUploadCancel = imgUploadOverlay.querySelector('.img-upload__cancel');

const closeImgUpload = () => {
  imgUploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  imgUploadCancel.removeEventListener('click', closeImgUpload);
};

const closeImgUploadIfEsc = (evt) => {
  if (evt.key === 'Escape') {
    closeImgUpload();
    document.removeEventListener('keydown', closeImgUploadIfEsc);
  }
};

const openDownloadImg = () => {
  uploadFileButton.addEventListener('click', () => {
    imgUploadOverlay.classList.remove('hidden');
    body.classList.add('modal-open');
    imgUploadCancel.addEventListener('click', closeImgUpload);
    document.addEventListener('keydown', closeImgUploadIfEsc);
  });
};

export { openDownloadImg };
