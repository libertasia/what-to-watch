import React from 'react';
import {connect} from 'react-redux';
import {FilmsShape, GenreShape, onGenreClickShape} from '../../../shapes';
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
      {genres.map((item, index) =>
        <li onClick={handleGenreClick} key={`genre-${index}`} data-genre={item} className={`catalog__genres-item ${item === activeGenre ? `catalog__genres-item--active` : ``}`}>
          <a href="#" className="catalog__genres-link">{item}</a>
        </li>
      )}
    </ul>
  );
};

GenresList.propTypes = {
  films: FilmsShape,
  activeGenre: GenreShape,
  onGenreClick: onGenreClickShape,
};

const mapStateToProps = (state) => ({
  films: state.films,
  activeGenre: state.activeGenre,
});

const mapDispatchToProps = (dispatch) => ({
  onGenreClick(genre) {
    dispatch(ActionCreator.changeGenre(genre));
  },
});

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
