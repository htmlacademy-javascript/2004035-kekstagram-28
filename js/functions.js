//* First function
/*
const userString = 'abs';
const validLength = 5;

function isValid(string, length) {
  if (string.length >= length) {
    return true;
  }
  return false;
}

isValid(userString, validLength);
*/
//* Second function
/*
const userString = 'топот';

function isPalindrome (string) {
  let newString = '';
  for (let i = string.length - 1; i > -1; i--) {
    newString += string.at(i);
  }
  if (newString.toLowerCase().replaceAll(' ', '') === string.toLowerCase().replaceAll(' ', '')) {
    return true;
  }
  return false;
}

isPalindrome(userString);
*/
//* Third function
//* First try
/*
const userString = '0234320';

function getNumber(string) {

  console.log(`original string: ${string}\ntype: ${typeof string}`);
  let newString = '';
  if (string === undefined || string === null) {
    return console.log(NaN);
  }

  string = string.toString();

  for (let i = 0; i < string.length; i++) {
    if (string.at(i) >= 0 && string.at(i) <= 9) {
      newString += string.at(i);
    }
  }

  if (newString.length === 0) {
    return console.log(NaN);
  }
  return console.log(`число ${newString}`);
}

getNumber(0234320); //! WHAAAAT
getNumber(2343200.006000); //! WHAAAAT
getNumber(userString);
getNumber('vvv345');
getNumber();
getNumber(15433463353);
getNumber(1.5);
getNumber(-1);
getNumber('');
getNumber('sssgsgd');
getNumber('34jkh345');
getNumber('xf44 xb44');
getNumber('1');
getNumber('1.5');
getNumber('2343200.006000');
getNumber(null);
*/

//* Successful attempt
// const userString = '2343200.006000'; //? Maybe you want to use this "variable"

// function getNumber(string) {
//   if (string === undefined || string === null) {
//     return NaN;
//   }
//   const newString = string.toString().replace(/[\D]*/g, '');
//   const number = Number(newString);
//   if (newString.length === 0) {
//     return NaN;
//   }
//   return number;
// }

// const arrForTest = [0, 1, -1, 1.5, -1.5, '', '123', '-123','sdf', '123sdf', 'sdf123sdf', 'sdf123', null];

// function testGetNumber() {
//   for (let i = 0; i < arrForTest.length; i++) {
//     const elem = arrForTest[i];
//     getNumber(elem);
//   }
// }

// testGetNumber();

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
  return (startString);
}

getString('1', 2, '0');
getString('1', 4, '0');
getString('q', 4, 'werty');
getString('q', 4, 'we');
getString('qwerty', 4, '0');
