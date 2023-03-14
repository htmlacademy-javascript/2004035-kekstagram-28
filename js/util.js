const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return(Math.floor(result));
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

export {getRandomInteger, getRandomArrayElement};

const getNumber = function (string) {
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

export { getNumber };
