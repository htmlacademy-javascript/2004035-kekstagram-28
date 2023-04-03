const allCommentsCount = document.querySelector('.comments-count');
const commentsView = document.querySelector('.comments-view');
const commentsLoaderButton = document.querySelector('.social__comments-loader');

const hideComments = (comment) => {
  comment.classList.add('hidden');
};

const showComments = (comment) => {
  comment.classList.remove('hidden');
};

const viewComments = () => {
  const comments = document.querySelectorAll('.social__comment');
  allCommentsCount.textContent = comments.length;
  if (comments.length <= 5) {
    commentsView.textContent = comments.length;
    commentsLoaderButton.classList.add('hidden');
  } else {
    commentsView.textContent = 5;
    for (let i = 0; i < comments.length; i++) {
      hideComments(comments[i]);
    }
    const commentsList = document.querySelector('.social__comments');
    const hiddenComments = commentsList.querySelectorAll('.hidden');
    for (let i = 0; i < 5; i++) {
      showComments(hiddenComments[i]);
    }
  }
};

const onClickShowYet = () => {
  const commentsList = document.querySelector('.social__comments');
  const showCommentsFn = () => document.querySelectorAll('.social__comment');
  const hiddenCommentsFn = () => commentsList.querySelectorAll('.hidden');
  const hiddenComments = hiddenCommentsFn();
  for (let i = 0; i < 5; i++) {
    if (hiddenComments[i] === undefined) {
      commentsLoaderButton.classList.add('hidden');
      break;
    }
    showComments(hiddenComments[i]);
  }
  commentsView.textContent = showCommentsFn().length - hiddenCommentsFn().length;
  if (hiddenCommentsFn().length <= 0) {
    commentsLoaderButton.classList.add('hidden');
  }
};

export { viewComments, onClickShowYet };
