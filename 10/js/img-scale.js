const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const scaleControlValue = document.querySelector('.scale__control--value');
const imgUploadPreview = document.querySelector('.img-upload__preview img');
const countScaleStep = 25;

const changeImgScale = () => {
  let countScale = 100;
  scaleControlValue.value = `${countScale}%`;
  scaleControlSmaller.addEventListener('click', () => {
    countScale = countScale - countScaleStep;
    if (countScale <= 25) {
      countScale = 25;
    }
    scaleControlValue.value = `${countScale}%`;
    imgUploadPreview.style.transform = `scale(0.${countScale})`;
  });
  scaleControlBigger.addEventListener('click', () => {
    countScale = countScale + countScaleStep;
    if (countScale >= 100) {
      countScale = 100;
    }
    scaleControlValue.value = `${countScale}%`;
    imgUploadPreview.style.transform = `scale(${countScale / 100})`;
  });
};

export { changeImgScale };
