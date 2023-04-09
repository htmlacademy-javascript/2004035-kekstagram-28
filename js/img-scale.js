const COUNT_SCALE_STEP = 25;
const MAX_SCALE = 100;
const MIN_SCALE = 25;

const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const scaleControlValue = document.querySelector('.scale__control--value');
const imgUploadPreview = document.querySelector('.img-upload__preview img');

const changeImgScale = () => {
  let countScale = MAX_SCALE;
  scaleControlValue.value = `${countScale}%`;
  scaleControlSmaller.addEventListener('click', () => {
    countScale = countScale - COUNT_SCALE_STEP;
    if (countScale <= MIN_SCALE) {
      countScale = MIN_SCALE;
    }
    scaleControlValue.value = `${countScale}%`;
    imgUploadPreview.style.transform = `scale(0.${countScale})`;
  });
  scaleControlBigger.addEventListener('click', () => {
    countScale = countScale + COUNT_SCALE_STEP;
    if (countScale >= MAX_SCALE) {
      countScale = MAX_SCALE;
    }
    scaleControlValue.value = `${countScale}%`;
    imgUploadPreview.style.transform = `scale(${countScale / 100})`;
  });
};

export { changeImgScale };
