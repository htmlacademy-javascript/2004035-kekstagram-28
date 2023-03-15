function getObjectData(pictureId, data) {
  const currentPostData = data.find((current) => current.id === pictureId);
  return currentPostData;
}

export { getObjectData };
