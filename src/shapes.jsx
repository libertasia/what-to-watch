import PropTypes from 'prop-types';

const FilmsShape = PropTypes.arrayOf(
    PropTypes.shape({
      backgroundColor: PropTypes.string.isRequired,
      backgroundImage: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      director: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      isFavorite: false,
      name: PropTypes.string.isRequired,
      posterImage: PropTypes.string.isRequired,
      previewImage: PropTypes.string.isRequired,
      previewVideoLink: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      released: PropTypes.number.isRequired,
      runTime: PropTypes.number.isRequired,
      scoresCount: PropTypes.number.isRequired,
      starring: PropTypes.arrayOf(PropTypes.string).isRequired,
      videoLink: PropTypes.string.isRequired
    })
).isRequired;

const PromoFilmShape = PropTypes.shape({
  genre: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  released: PropTypes.number.isRequired
}).isRequired;

const MovieCardShape = PropTypes.shape({
  name: PropTypes.string.isRequired,
  previewImage: PropTypes.string.isRequired
}).isRequired;

const FilmShape = PropTypes.shape({
  backgroundColor: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  isFavorite: false,
  name: PropTypes.string.isRequired,
  posterImage: PropTypes.string.isRequired,
  previewImage: PropTypes.string.isRequired,
  previewVideoLink: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  released: PropTypes.number.isRequired,
  runTime: PropTypes.number.isRequired,
  scoresCount: PropTypes.number.isRequired,
  starring: PropTypes.arrayOf(PropTypes.string).isRequired,
  videoLink: PropTypes.string.isRequired
}).isRequired;

const PreviewVideoPlayerShape = PropTypes.shape({
  alt: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  posterImage: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
}).isRequired;

const ReviewsShape = PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      comment: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      user: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      })
    })
).isRequired;

export {FilmsShape, FilmShape, PromoFilmShape, MovieCardShape, PreviewVideoPlayerShape, ReviewsShape};
