const createComments = function (current, socialComments, socialComment) {
  const commentsFragment = document.createDocumentFragment();
  const dataComments = current.comments;
  socialComments.innerHTML = '';
  dataComments.forEach(({avatar, message, name}) => {
    const commentClone = socialComment.cloneNode(true);
    commentClone.querySelector('img').src = avatar;
    commentClone.querySelector('img').alt = name;
    commentClone.querySelector('.social__text').textContent = message;
    commentsFragment.appendChild(commentClone);
  });
  socialComments.appendChild(commentsFragment);
};

export { createComments };
