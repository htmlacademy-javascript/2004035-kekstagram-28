// First function

const userString = 'abs';
const validLength = 5;

function getValid(string, length) {
  if (string.length >= length) {
    return true;
  }
  return false;
}

getValid(userString, validLength);
