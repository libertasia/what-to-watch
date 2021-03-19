export const ActionType = {
  CHANGE_GENRE: `view/changeGenre`,
  COMMENT_POST_ERROR: `data/commentPostError`,
  FETCH_FAVORITE_FILMS_LIST_ERROR: `data/fetchFavoriteFilmsListError`,
  FETCH_FILMS_LIST_ERROR: `data/fetchFilmsListError`,
  FETCH_FILM_BY_ID_ERROR: `data/fetchFilmByIdError`,
  FETCH_PROMO_FILM_ERROR: `data/fetchPromoFilmError`,
  FETCH_REVIEWS_BY_ID_ERROR: `data/fetchReviewsByIdError`,
  INCREASE_VISIBLE_FILMS_COUNT: `films/increaseVisibleFilmsCount`,
  LOAD_FAVORITE_FILMS_LIST: `data/loadFavoriteFilmsList`,
  LOAD_FILM: `data/loadFilm`,
  LOAD_FILMS: `data/loadFilms`,
  LOAD_PROMO_FILM: `data/loadPromoFilm`,
  LOAD_REVIEWS: `data/loadReviews`,
  REDIRECT_TO_ROUTE: `app/redirectToRoute`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  RESET_ACTIVE_TAB: `view/resetActiveTab`,
  RESET_GENRE: `view/resetGenre`,
  RESET_VISIBLE_FILMS_COUNT: `view/resetVisibleFilmsCount`,
  SET_ACTIVE_TAB: `view/setActiveTab`,
  SET_FAVORITE_STATUS: `data/setFavoriteStatus`,
  SET_IS_FILMS_LIST_LOADING: `data/setIsFilmsListLoading`,
  SET_IS_PROMO_LOADING: `data/setIsPromoLoading`,
  SET_IS_REVIEW_FORM_DISABLED: `view/setIsReviewFormDisabled`,
};

export const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre,
  }),
  commentPostError: (error) => ({
    type: ActionType.COMMENT_POST_ERROR,
    payload: {error},
  }),
  fetchFavoriteFilmsListError: (error) => ({
    type: ActionType.FETCH_FAVORITE_FILMS_LIST_ERROR,
    payload: {error},
  }),
  fetchFilmsListError: (error) => ({
    type: ActionType.FETCH_FILMS_LIST_ERROR,
    payload: {error},
  }),
  fetchFilmByIdError: (error) => ({
    type: ActionType.FETCH_FILM_BY_ID_ERROR,
    payload: {error},
  }),
  fetchPromoFilmError: (error) => ({
    type: ActionType.FETCH_PROMO_FILM_ERROR,
    payload: {error},
  }),
  fetchReviewsByIdError: (error) => ({
    type: ActionType.FETCH_REVIEWS_BY_ID_ERROR,
    payload: {error},
  }),
  increaseVisibleFilmsCount: () => ({
    type: ActionType.INCREASE_VISIBLE_FILMS_COUNT,
  }),
  loadFavoriteFilmsList: (films) => ({
    type: ActionType.LOAD_FAVORITE_FILMS_LIST,
    payload: films,
  }),
  loadFilm: (film, isFilmLoaded) => ({
    type: ActionType.LOAD_FILM,
    payload: {film, isFilmLoaded},
  }),
  loadFilms: (films, isDataLoaded) => ({
    type: ActionType.LOAD_FILMS,
    payload: {films, isDataLoaded},
  }),
  loadPromoFilm: (film, isPromoLoaded) => ({
    type: ActionType.LOAD_PROMO_FILM,
    payload: {film, isPromoLoaded},
  }),
  loadReviews: (reviews, isReviewsLoaded) => ({
    type: ActionType.LOAD_REVIEWS,
    payload: {reviews, isReviewsLoaded},
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  resetActiveTab: () => ({
    type: ActionType.RESET_ACTIVE_TAB,
  }),
  resetGenre: () => ({
    type: ActionType.RESET_GENRE,
  }),
  resetVisibleFilmsCount: () => ({
    type: ActionType.RESET_VISIBLE_FILMS_COUNT,
  }),
  setActiveTab: (activeTab) => ({
    type: ActionType.SET_ACTIVE_TAB,
    payload: activeTab,
  }),
  setFavoriteStatus: (film) => ({
    type: ActionType.SET_FAVORITE_STATUS,
    payload: film
  }),
  setIsFilmsListLoading: (isLoading) => ({
    type: ActionType.SET_IS_FILMS_LIST_LOADING,
    payload: isLoading,
  }),
  setIsPromoLoading: (isLoading) => ({
    type: ActionType.SET_IS_PROMO_LOADING,
    payload: isLoading,
  }),
  setIsReviewFormDisabled: (isDisabled) => ({
    type: ActionType.SET_IS_REVIEW_FORM_DISABLED,
    payload: isDisabled,
  }),
};
