import {ActionType} from './action';
import mockFilms from '../mocks/films';

const DEFAULT_GENRE = `All genres`;

const initialState = {
  genre: DEFAULT_GENRE,
  films: mockFilms
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        genre: action.payload
      };

    case ActionType.GET_FILMS_BY_GENRE:
      return {
        ...state,
        films: action.payload
      };

    case ActionType.RESET_GENRE:
      return {
        ...initialState
      };
  }

  return state;
};


export {reducer};
