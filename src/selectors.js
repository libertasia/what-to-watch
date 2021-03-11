import {createSelector} from 'reselect';
import {getFilmsByGenre} from './film-utils';
import {NameSpace} from './store/root-reducer';

const getActiveGenre = (state) => state[NameSpace.VIEW].activeGenre;
const getFilms = (state) => state[NameSpace.FILMS].films;
const getVisibleFilmsCount = (state) => state[NameSpace.VIEW].visibleFilmsCount;

export const getVisibleFilms = createSelector(
    [getActiveGenre, getFilms, getVisibleFilmsCount],
    (activeGenre, films, visibleFilmsCount) => {
      const allFilms = getFilmsByGenre(films, activeGenre);
      return allFilms.slice(0, visibleFilmsCount);
    }
);

export const getAllFilmsByGenre = createSelector(
    [getActiveGenre, getFilms],
    (activeGenre, films) => {
      return getFilmsByGenre(films, activeGenre);
    }
);
