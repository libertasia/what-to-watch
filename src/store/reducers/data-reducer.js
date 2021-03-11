import {ActionType} from '../action';
import {AuthorizationStatus} from '../../const';

const initialState = {
  authorizationStatus: AuthorizationStatus.INIT,
  isDataLoaded: false,
  isPromoLoaded: false,
  isFilmLoaded: false,
  isReviewsLoaded: false,
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
  reviews: [],
  favoriteFilms: [],
  promo: {
    backgroundImage: ``,
    genre: ``,
    name: ``,
    posterImage: ``,
    released: 0,
  },
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
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
        isPromoLoaded: action.payload.isPromoLoaded,
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
  }

  return state;
};

export {dataReducer};
