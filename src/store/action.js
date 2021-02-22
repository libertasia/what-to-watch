export const ActionType = {
  CHANGE_GENRE: `genre/change`,
  GET_FILMS_BY_GENRE: `films/getFilmsByGenre`,
  RESET_GENRE: `genre/reset`,
};

export const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre,
  }),
  resetGenre: () => ({
    type: ActionType.RESET_GENRE,
  })
};
