import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {MovieCardShape} from '../../../shapes';
import {Link} from 'react-router-dom';
import PreviewVideoPlayer from '../../shared/video-player/preview-video-player';

const PREVIEW_DELAY = 1000;

const MovieCard = (props) => {
  const {film, onActiveFilmChange} = props;

  const [isPreviewPlaying, setIsPreviewPlaying] = useState(false);
  const [playbackTimer, setPlaybackTimer] = useState(null);

  const hrefToFilmPage = `/films/${film.id}`;

  const handleMouseOver = () => {
    onActiveFilmChange(film);
    if (playbackTimer === null) {
      setPlaybackTimer(setTimeout(() => setIsPreviewPlaying(true), PREVIEW_DELAY));
    }
  };

  const handleMouseLeave = () => {
    onActiveFilmChange({id: null});
    clearTimeout(playbackTimer);
    setPlaybackTimer(null);
    setIsPreviewPlaying(false);
  };

  return (
    <article className="small-movie-card catalog__movies-card" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} data-id={film.id}>
      <Link to={hrefToFilmPage}>
        <div className="small-movie-card__image">
          <PreviewVideoPlayer
            isPlaying={isPreviewPlaying}
            src={film.previewVideoLink}
            posterImage={film.previewImage}
            width={280}
            height={175}
            alt={film.name}>
          </PreviewVideoPlayer>
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
  onActiveFilmChange: PropTypes.func.isRequired,
};

export default MovieCard;
