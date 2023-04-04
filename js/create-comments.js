const allCommentsCount = document.querySelector('.comments-count');
const commentsView = document.querySelector('.comments-view');
const socialComments = document.querySelector('.social__comments');
const commentsLoaderButton = document.querySelector('.social__comments-loader');
const socialComment = document.querySelector('.social__comment');

const COMMENT_COUNTER = 5;

const createComment = (current) => {
  const dataComments = current;
  const comment = socialComment.cloneNode(true);
  comment.querySelector('img').src = dataComments.avatar;
  comment.querySelector('img').alt = dataComments.name;
  comment.querySelector('.social__text').textContent = dataComments.message;
  return comment;
};

const fillComments = (comments, shownComments) => {
  const commentsArr = comments.slice(shownComments, shownComments + COMMENT_COUNTER);
  shownComments += COMMENT_COUNTER;
  shownComments = Math.min(shownComments, comments.length);
  commentsView.textContent = shownComments;
  allCommentsCount.textContent = comments.length;
  //! Тут тоже
  // console.log(commentsArr);
  commentsArr.forEach((item) => socialComments.appendChild(createComment(item)));
  if (shownComments >= comments.length) {
    commentsLoaderButton.classList.add('hidden');
  } else {
    commentsLoaderButton.classList.remove('hidden');
  }
  //! На строчке ниже выводятся пустые массивы
  // console.log(commentsArr);
  commentsLoaderButton.addEventListener('click', (evt) => {
    evt.stopPropagation();
    fillComments(comments, shownComments);
    comments = [];
    shownComments = 0;
  });
};

export { createComment, fillComments };
