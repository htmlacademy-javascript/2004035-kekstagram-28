import { getRandomInteger, getRandomArrayElement } from './util.js';

const NAMES = [
  'Oliver',
  'Sophia',
  'Ethan',
  'Emma',
  'Noah',
  'Ava',
  'Liam',
  'Mia',
  'William',
  'Isabella',
  'James',
  'Charlotte',
  'Benjamin',
  'Amelia',
  'Lucas',
  'Harper',
  'Mason',
  'Evelyn',
  'Elijah',
  'Abigail',
  'Logan',
  'Emily',
  'Alexander',
  'Ella',
  'Michael'
];
const DESCRIPTIONS = [
  'A small, cozy cabin tucked away in the woods.',
  'A spacious, modern apartment with a stunning view of the city skyline.',
  'A quaint, seaside cottage with a private beach.',
  'A rustic farmhouse surrounded by rolling hills and farmland.',
  'A luxurious villa with a private pool and lush gardens.',
  'A charming, historic townhouse in the heart of the city.',
  'A minimalist, contemporary loft with industrial design touches.',
  'A remote, off-grid cabin in the mountains with breathtaking views.',
  'A chic, designer penthouse with floor-to-ceiling windows.',
  'A cozy, country cottage with a roaring fireplace and a big front porch.'
];
const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const LENGTH_COMMENTS = 6;
const PUBLIC_NUMBER = 25;

const createIdGenerator = () => {
  let lastGeneratedId = 0;

  return () => {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
};

const generatePostId = createIdGenerator();
const generateUrlId = createIdGenerator();
const generateCommentId = createIdGenerator();

const createMessage = () =>
  Array
    .from({length: getRandomInteger(1, 2)}, () => getRandomArrayElement(COMMENTS))
    .join(' ');

const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, LENGTH_COMMENTS)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(NAMES)
});

const createPost = () => ({
  id: generatePostId(),
  url: `photos/${generateUrlId()}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
  comments: Array.from({ length: getRandomInteger(0, LENGTH_COMMENTS)}, createComment)
});

const createPosts = () =>
  Array
    .from({length: PUBLIC_NUMBER}, () => createPost());

export {createPosts};
