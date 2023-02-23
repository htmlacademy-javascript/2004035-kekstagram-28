//* First function

function isValid(string, length) {
  return string.length <= length;
}

//* Second function

function isPalindrome (string) {
  let newString = '';
  string = string.toLowerCase().replaceAll(' ', '');
  for (let i = string.length - 1; i > -1; i--) {
    newString += string.at(i);
  }
  return newString === string;
}

//* Third function"

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

//* The fourth function

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
