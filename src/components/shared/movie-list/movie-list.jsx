import React, {useState} from 'react';
import MovieCard from './movie-card';
import {FilmsShape} from '../../../shapes';

const MovieList = (props) => {
  const {visibleFilms} = props;
  const [activeFilm, setActiveFilmId] = useState({id: null});

  const handleActiveFilmChange = (film) => {
    setActiveFilmId({...activeFilm, id: film.id});
  };

  return (
    <div className="catalog__movies-list">
      {visibleFilms.map((film) =>
        <MovieCard
          key={film.id}
          film={film}
          onActiveFilmChange={handleActiveFilmChange}
        />)}
    </div>
  );
};

MovieList.propTypes = {
  visibleFilms: FilmsShape,
};

export default MovieList;
