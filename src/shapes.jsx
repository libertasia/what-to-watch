import PropTypes from 'prop-types';

const FilmsShape = PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      posterImage: PropTypes.string.isRequired,
      previewImage: PropTypes.string.isRequired,
      backgroundImage: PropTypes.string.isRequired,
      backgroundColor: PropTypes.string.isRequired,
      videoLink: PropTypes.string.isRequired,
      previewVideoLink: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      scoresCount: PropTypes.number.isRequired,
      director: PropTypes.string.isRequired,
      starring: PropTypes.arrayOf(PropTypes.string).isRequired,
      runTime: PropTypes.number.isRequired,
      genre: PropTypes.string.isRequired,
      released: PropTypes.number.isRequired,
      isFavorite: false
    })
).isRequired;

const PromoFilmShape = PropTypes.shape({
  genre: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  released: PropTypes.number.isRequired
}).isRequired;

const MovieCardShape = PropTypes.shape({
  previewImage: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}).isRequired;

const onActiveFilmChangeShape = PropTypes.func.isRequired;

export {FilmsShape, PromoFilmShape, MovieCardShape, onActiveFilmChangeShape};
