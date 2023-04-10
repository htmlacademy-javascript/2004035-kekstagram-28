const COUNT_SCALE_STEP = 25;
const MAX_SCALE = 100;
const MIN_SCALE = 25;
const DEFAULT_SCALE = MAX_SCALE;

const scaleControlValue = document.querySelector('.scale__control--value');
const imgUploadPreview = document.querySelector('.img-upload__preview img');

// const changeImgScale = () => {
//   let countScale = MAX_SCALE;
//   scaleControlValue.value = `${countScale}%`;
//   scaleControlSmaller.addEventListener('click', () => {
//     countScale = countScale - COUNT_SCALE_STEP;
//     if (countScale <= MIN_SCALE) {
//       countScale = MIN_SCALE;
//     }
//     scaleControlValue.value = `${countScale}%`;
//     imgUploadPreview.style.transform = `scale(0.${countScale})`;
//   });
//   scaleControlBigger.addEventListener('click', () => {
//     countScale = countScale + COUNT_SCALE_STEP;
//     if (countScale >= MAX_SCALE) {
//       countScale = MAX_SCALE;
//     }
//     scaleControlValue.value = `${countScale}%`;
//     imgUploadPreview.style.transform = `scale(${countScale / 100})`;
//   });
// };

const updateScaleImage = (countScale) => {
  scaleControlValue.value = `${countScale}%`;
  imgUploadPreview.style.transform = `scale(${countScale / 100})`;
};

const increaseSize = () => {
  const scaleCurrentValue = parseInt(scaleControlValue.value, 10);
  let countScale = scaleCurrentValue + COUNT_SCALE_STEP;
  if (countScale >= MAX_SCALE) {
    countScale = MAX_SCALE;
  }
  updateScaleImage(countScale);
};

const decreaseSize = () => {
  const scaleCurrentValue = parseInt(scaleControlValue.value, 10);
  let countScale = scaleCurrentValue - COUNT_SCALE_STEP;
  if (countScale <= MIN_SCALE) {
    countScale = MIN_SCALE;
  }
  updateScaleImage(countScale);
};

const resetScale = () => {
  updateScaleImage(DEFAULT_SCALE);
};

export { decreaseSize, increaseSize, resetScale };
