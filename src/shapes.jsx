import PropTypes from 'prop-types';

const FilmsShape = PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired
    })
).isRequired;

const PromoFilmShape = PropTypes.shape({
  genre: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  released: PropTypes.number.isRequired
}).isRequired;

export {FilmsShape, PromoFilmShape};
