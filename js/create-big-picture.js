const COMMENT_COUNTER = 5;

const bigPicture = document.querySelector('.big-picture');
const bigPictureLikes = bigPicture.querySelector('.likes-count');
const bigPictureCommentsCount = bigPicture.querySelector('.comments-count');
const bigPictureDesctiption = bigPicture.querySelector('.social__caption');
const socialComments = document.querySelector('.social__comments');
const socialComment = document.querySelector('.social__comment');
const commentsLoaderButton = document.querySelector('.social__comments-loader');
const allCommentsCount = document.querySelector('.comments-count');
const commentsView = document.querySelector('.comments-view');
const closePictureButton = document.querySelector('.big-picture__cancel');

let shownComments = 0;
let comments = [];

const createComment = (current) => {
  const dataComments = current;
  const comment = socialComment.cloneNode(true);
  comment.querySelector('img').src = dataComments.avatar;
  comment.querySelector('img').alt = dataComments.name;
  comment.querySelector('.social__text').textContent = dataComments.message;
  return comment;
};

const fillComments = () => {
  const commentsArr = comments.slice(shownComments, shownComments + COMMENT_COUNTER);
  shownComments += COMMENT_COUNTER;
  shownComments = Math.min(shownComments, comments.length);
  commentsView.textContent = shownComments;
  allCommentsCount.textContent = comments.length;
  commentsArr.forEach((item) => socialComments.appendChild(createComment(item)));
  if (shownComments >= comments.length) {
    commentsLoaderButton.classList.add('hidden');
  } else {
    commentsLoaderButton.classList.remove('hidden');
  }
};

const setLoaderClickButton = () => fillComments(comments, shownComments);
const setClickCloseButton = (evt) => {
  if (evt.key === 'Escape' || evt.target.classList[0] === 'big-picture__cancel') {
    shownComments = 0;
    comments = [];
    commentsLoaderButton.removeEventListener('click', setLoaderClickButton);
    document.removeEventListener('keydown', setClickCloseButton);
  }
};

const createBigPicture = (post) => {
  bigPicture.querySelector('.big-picture__img img').src = post.url;
  bigPicture.querySelector('.big-picture__img img').alt = post.description;
  bigPictureLikes.textContent = post.likes;
  bigPictureCommentsCount.textContent = post.comments.length;
  bigPictureDesctiption.textContent = post.description;
  socialComments.innerHTML = '';
  comments = post.comments;
  fillComments(comments, shownComments);
  commentsLoaderButton.addEventListener('click', setLoaderClickButton);
  closePictureButton.addEventListener('click', setClickCloseButton);
  document.addEventListener('keydown', setClickCloseButton);
};

const removeEventFillComments = () => {
  closePictureButton.removeEventListener('click', setClickCloseButton);
};

export { createBigPicture, removeEventFillComments };
