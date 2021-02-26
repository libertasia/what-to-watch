import {DEFAULT_GENRE, MAX_GENRES_COUNT} from './const';

const getFilmsByGenre = (films, genre) => {
  if (genre === DEFAULT_GENRE) {
    return films;
  }
  return films.filter((film) => film.genre === genre);
};

const getGenreList = (films) => {
  let genres = [];
  films.forEach((element) => {
    genres.push(element.genre);
  });
  genres.sort();
  genres = [...new Set(genres)];
  genres = genres.slice(0, MAX_GENRES_COUNT);
  genres.unshift(DEFAULT_GENRE);

  return genres;
};

export {getFilmsByGenre, getGenreList};
