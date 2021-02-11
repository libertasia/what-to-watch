import React from 'react';
import {MovieCardShape, onActiveFilmChangeShape} from '../../../shapes';
import {Link} from 'react-router-dom';

const MovieCard = (props) => {
  const {film, onActiveFilmChange} = props;

  const hrefToFilmPage = `/films/${film.id}`;

  const handleMouseOver = ({currentTarget}) => {
    onActiveFilmChange(currentTarget);
  };

  return (
    <article className="small-movie-card catalog__movies-card" onMouseOver={handleMouseOver} data-id={film.id}>
      <Link to={hrefToFilmPage}>
        <div className="small-movie-card__image">
          <img src={film.previewImage} alt={film.name} width={280} height={175}/>
        </div>
      </Link>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={hrefToFilmPage}>{film.name}</Link>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  film: MovieCardShape,
  onActiveFilmChange: onActiveFilmChangeShape
};

export default MovieCard;
