//* First function
const firstUserString = 'sdfsgg';
const firstLength = 5;

function isValid(string, length) {
  return string.length <= length;
}

isValid(firstUserString, firstLength);

//* Second function

const secondUserString = 'sdgsg';

function isPalindrome (string) {
  let newString = '';
  string = string.toLowerCase().replaceAll(' ', '');
  for (let i = string.length - 1; i > -1; i--) {
    newString += string.at(i);
  }
  return newString === string;
}

isPalindrome(secondUserString);

//* Third function"

const thirdUserString = '3l4knl2k';

function getNumber(string) {
  if (string === undefined || string === null) {
    return NaN;
  }
  const newString = string.toString().replace(/[\D]*/g, '');
  const number = Number(newString);
  if (newString.length === 0) {
    return NaN;
  }
  return number;
}

getNumber(thirdUserString);

//* The fourth function

const fourthUserString = 'MMM';
const needLength = 5;
const symbol = '42M';

function getString(startString, minLength, addSymbols) {
  if (startString.length >= minLength) {
    return (startString);
  }

  while (startString.length < minLength) {
    if ((addSymbols + startString).length > minLength) {
      const cut = minLength - startString.length;
      addSymbols = addSymbols.slice(0, cut);
    }
    startString = addSymbols + startString;
  }
  return startString;
}

getString(fourthUserString, needLength, symbol);
