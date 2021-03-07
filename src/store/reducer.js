import {ActionType} from './action';
import {DEFAULT_GENRE, DEFAULT_VISIBLE_FILMS_COUNT, AuthorizationStatus} from '../const';
import browserHistory from "../browser-history";

const initialState = {
  activeGenre: DEFAULT_GENRE,
  authorizationStatus: AuthorizationStatus.INIT,
  isDataLoaded: false,
  films: [],
  film: {
    backgroundColor: ``,
    backgroundImage: ``,
    description: ``,
    director: ``,
    genre: ``,
    id: -1,
    isFavorite: false,
    name: ``,
    posterImage: ``,
    previewImage: ``,
    previewVideoLink: ``,
    rating: 0,
    released: 0,
    runTime: 0,
    scoresCount: 0,
    starring: [``],
    videoLink: ``
  },
  isFilmLoaded: false,
  reviews: [],
  isReviewsLoaded: false,
  favoriteFilms: [],
  promo: {
    backgroundImage: ``,
    genre: ``,
    name: ``,
    posterImage: ``,
    released: 0,
  },
  visibleFilmsCount: DEFAULT_VISIBLE_FILMS_COUNT,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        activeGenre: action.payload,
      };
    case ActionType.INCREASE_VISIBLE_FILMS_COUNT:
      return {
        ...state,
        visibleFilmsCount: state.visibleFilmsCount + DEFAULT_VISIBLE_FILMS_COUNT,
      };
    case ActionType.LOAD_FILMS:
      return {
        ...state,
        films: action.payload.films,
        isDataLoaded: action.payload.isDataLoaded,
      };
    case ActionType.LOAD_PROMO_FILM:
      return {
        ...state,
        promo: action.payload.film,
        isDataLoaded: action.payload.isDataLoaded,
      };
    case ActionType.LOAD_FAVORITE_FILMS_LIST:
      return {
        ...state,
        favoriteFilms: action.payload,
      };
    case ActionType.LOAD_FILM:
      return {
        ...state,
        film: action.payload.film,
        isFilmLoaded: action.payload.isFilmLoaded,
      };
    case ActionType.LOAD_REVIEWS:
      return {
        ...state,
        reviews: action.payload.reviews,
        isReviewsLoaded: action.payload.isReviewsLoaded,
      };
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.RESET_GENRE:
      return {
        ...state,
        activeGenre: DEFAULT_GENRE,
      };
    case ActionType.RESET_VISIBLE_FILMS_COUNT:
      return {
        ...state,
        visibleFilmsCount: DEFAULT_VISIBLE_FILMS_COUNT,
      };
  }

  return state;
};

const errorInitialState = {
  error: null,
};

const errorReducer = (state = errorInitialState, action) => {
  switch (action.type) {
    case ActionType.FETCH_FILM_BY_ID_ERROR:
      browserHistory.push(`/404`);
      return state;
  }

  if (!action.payload) {
    return state;
  }

  const {error} = action.payload;

  if (error) {
    return {
      ...state,
      error,
    };
  }
  return state;
};

export {reducer, errorReducer};
