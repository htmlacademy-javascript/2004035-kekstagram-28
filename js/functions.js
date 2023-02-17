// First function

// const userString = 'abs';
// const validLength = 5;

// function isValid(string, length) {
//   if (string.length >= length) {
//     return true;
//   }
//   return false;
// }

// isValid(userString, validLength);

// Second function

const userString = 'Лёша на полке клопа нашёл ';

function isPalindrome (string) {
  let newString = '';
  for (let i = string.length - 1; i > -1; i--) {
    newString += string.at(i);
  }
  console.log(newString);
  if (newString.toLowerCase().replaceAll(' ', '') === string.toLowerCase().replaceAll(' ', '')) {
    return true;
  }
  return false;
}

isPalindrome(userString);
