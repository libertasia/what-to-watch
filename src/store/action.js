export const ActionType = {
  CHANGE_GENRE: `genre/change`,
  INCREASE_VISIBLE_FILMS_COUNT: `films/increaseVisibleFilmsCount`,
  LOAD_FILMS: `data/loadFilms`,
  LOAD_PROMO_FILM: `data/loadPromoFilm`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  RESET_GENRE: `genre/reset`,
  RESET_VISIBLE_FILMS_COUNT: `films/resetVisibleFilmsCount`,
};

export const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre,
  }),
  increaseVisibleFilmsCount: () => ({
    type: ActionType.INCREASE_VISIBLE_FILMS_COUNT,
  }),
  loadFilms: (films) => ({
    type: ActionType.LOAD_FILMS,
    payload: films,
  }),
  loadPromoFilm: (film) => ({
    type: ActionType.LOAD_PROMO_FILM,
    payload: film,
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  resetGenre: () => ({
    type: ActionType.RESET_GENRE,
  }),
  resetVisibleFilmsCount: () => ({
    type: ActionType.RESET_VISIBLE_FILMS_COUNT,
  }),
};
