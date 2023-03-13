const addListener = function () {
  const pictures = document.querySelectorAll('.picture');
  for (let i = 0; i < pictures.length; i++) {
    const picture = pictures[i];
    picture.addEventListener('click', (evt) => {
      evt.preventDefault();
      return picture;
    });
  }
};

export { addListener };
