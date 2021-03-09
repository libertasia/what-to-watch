const DEFAULT_GENRE = `All genres`;

const MAX_GENRES_COUNT = 9;

const DEFAULT_VISIBLE_FILMS_COUNT = 8;

const AuthorizationStatus = {
  INIT: `INIT`,
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
  AUTH_ERROR: `AUTH_ERROR`,
};

const Rating = {
  BAD: 3,
  NORMAL: 5,
  GOOD: 8,
  AWESOME: 10,
};

const RatingLevel = {
  BAD: `Bad`,
  NORMAL: `Normal`,
  GOOD: `Good`,
  VERY_GOOD: `Very good`,
  AWESOME: `Awesome`,
};

const AppRoute = {
  ADD_REVIEW: `/films/:id/review`,
  FILM: `/films/:id`,
  LOGIN: `/login`,
  MY_LIST: `/mylist`,
  PLAYER: `/player/:id`,
  ROOT: `/`,
};

const APIRoute = {
  FAVORITE_FILMS: `/favorite`,
  FILMS: `/films`,
  LOGIN: `/login`,
  LOGOUT: `/logout`,
  PROMO_FILM: `/films/promo`,
};

export {DEFAULT_GENRE, MAX_GENRES_COUNT, DEFAULT_VISIBLE_FILMS_COUNT, AuthorizationStatus, Rating, RatingLevel, APIRoute, AppRoute};
