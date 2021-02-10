import React from 'react';
import {MovieCardShape, onActiveFilmChangeShape} from '../../../shapes';

const MovieCard = (props) => {
  const {film, onActiveFilmChange} = props;

  const handleMouseEnter = ({target}) => {
    onActiveFilmChange(target);
  };

  return (
    <article className="small-movie-card catalog__movies-card" onMouseEnter={handleMouseEnter} id={film.id}>
      <div className="small-movie-card__image">
        <img src={film.previewImage} alt={film.name} width={280} height={175}/>
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{film.name}</a>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  film: MovieCardShape,
  onActiveFilmChange: onActiveFilmChangeShape
};

export default MovieCard;
