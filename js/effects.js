const EFFECTS = {
  none:
    {
      name: 'none',
      style: 'none',
      min: 0,
      max: 100,
      step: 1,
      unit: ''
    },
  chrome:
    {
      style: 'grayscale',
      min: 0,
      max: 1,
      step: 0.1,
      unit: ''
    },
  sepia:
    {
      style: 'sepia',
      min: 0,
      max: 1,
      step: 0.1,
      unit: ''
    },
  marvin:
    {
      style: 'invert',
      min: 0,
      max: 100,
      step: 1,
      unit: '%'
    },
  phobos:
    {
      name: 'phobos',
      style: 'blur',
      min: 0,
      max: 3,
      step: 0.1,
      unit: 'px'
    },
  heat:
    {
      name: 'heat',
      style: 'brightness',
      min: 1,
      max: 3,
      step: 0.1,
      unit: ''
    },
};
const DEFAULT_EFFECT = EFFECTS.none;

const slider = document.querySelector('.effect-level__slider');
const effectLevelValue = document.querySelector('.effect-level__value');
const effectsList = document.querySelector('.effects__list');
const imgPreview = document.querySelector('.img-upload__preview img');
const effectLevelBackground = document.querySelector('.img-upload__effect-level');

let currentEffect = DEFAULT_EFFECT;

const addEffect = (evt) => {
  if (!evt.target.classList.contains('effects__radio')) {
    return;
  }
  currentEffect = EFFECTS[evt.target.value];
  imgPreview.className = `effects__preview--${currentEffect.name}`;
};

const isDefault = () => currentEffect === DEFAULT_EFFECT;

const showSlider = () => {
  slider.classList.remove('hidden');
  effectLevelBackground.classList.remove('hidden');
};

const hideSlider = () => {
  slider.classList.add('hidden');
  effectLevelBackground.classList.add('hidden');
};

const viewSlider = () => isDefault() ? hideSlider() : showSlider();

const updateSlider = () => {
  slider.noUiSlider.updateOptions({
    range: {
      min: currentEffect.min,
      max: currentEffect.max,
    },
    step: currentEffect.step,
    start: currentEffect.max
  });
};

const initSlider = () => {
  noUiSlider.create(slider, {
    range: {
      min: DEFAULT_EFFECT.min,
      max: DEFAULT_EFFECT.max,
    },
    start: DEFAULT_EFFECT.max,
    step: DEFAULT_EFFECT.step,
    connect: 'lower'
  });
};

const onSliderUpdate = () => {
  const sliderValue = slider.noUiSlider.get();
  imgPreview.style.filter = isDefault()
    ? DEFAULT_EFFECT.style
    : `${currentEffect.style}(${sliderValue}${currentEffect.unit})`;
  effectLevelValue.value = sliderValue;
};

const changeEffects = () => {
  effectsList.addEventListener('change', addEffect);
  viewSlider();
  updateSlider();
  slider.noUiSlider.on('update', onSliderUpdate);
};

const resetEffect = () => {
  currentEffect = DEFAULT_EFFECT;
  updateSlider();
};

export { changeEffects, initSlider, viewSlider, resetEffect };
