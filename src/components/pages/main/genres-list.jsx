import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {FilmsShape} from '../../../shapes';
import {getGenreList} from '../../../film-utils';
import {ActionCreator} from '../../../store/action';

const GenresList = (props) => {
  const {films, activeGenre, onGenreClick} = props;

  const genres = getGenreList(films);

  const handleGenreClick = ({currentTarget}) => {
    onGenreClick(currentTarget.dataset.genre);
  };

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre, index) =>
        <li onClick={handleGenreClick} key={`genre-${index}`} data-genre={genre} className={`catalog__genres-item ${genre === activeGenre ? `catalog__genres-item--active` : ``}`}>
          <a href="#" className="catalog__genres-link">{genre}</a>
        </li>
      )}
    </ul>
  );
};

GenresList.propTypes = {
  activeGenre: PropTypes.string.isRequired,
  films: FilmsShape,
  onGenreClick: PropTypes.func.isRequired,
};

const mapStateToProps = ({FILMS}) => ({
  activeGenre: FILMS.activeGenre,
  films: FILMS.films,
});

const mapDispatchToProps = (dispatch) => ({
  onGenreClick(genre) {
    dispatch(ActionCreator.changeGenre(genre));
    dispatch(ActionCreator.resetVisibleFilmsCount());
  },
});

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
