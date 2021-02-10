import React, {useState} from 'react';
import MovieCard from './movie-card';
import {FilmsShape} from '../../../shapes';

const MovieList = (props) => {
  const {films} = props;
  const [activeFilm, setActiveFilmId] = useState({id: null});

  const handleActiveFilmChange = (target) => {
    setActiveFilmId({...activeFilm, id: target.parentElement.id});
  };

  return (
    <div className="catalog__movies-list">
      {films.map((film) =>
        <MovieCard
          key={film.id}
          film={film}
          onActiveFilmChange={handleActiveFilmChange}
        />)}
    </div>
  );
};

MovieList.propTypes = {
  films: FilmsShape
};

export default MovieList;
