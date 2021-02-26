import {createSelector} from 'reselect';
import {getFilmsByGenre} from './film-utils';

const getActiveGenre = (state) => state.activeGenre;
const getFilms = (state) => state.films;

export const getVisibleFilms = createSelector(
    [getActiveGenre, getFilms],
    (activeGenre, films) => {
      return getFilmsByGenre(films, activeGenre);
    }
);
