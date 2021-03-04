import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {ActionCreator} from '../../../store/action';
import {getAllFilmsByGenre} from '../../../selectors';
import {FilmsShape} from '../../../shapes';

const ShowMoreBtn = (props) => {
  const {visibleFilmsCount, allFilms, onButtonClick} = props;

  const handleButtonClick = () => {
    onButtonClick();
  };

  const isHidden = visibleFilmsCount >= allFilms.length;

  return (
    <button onClick={handleButtonClick} className={`${isHidden ? `visually-hidden` : `catalog__button`}`} type="button">Show more</button>
  );
};

ShowMoreBtn.propTypes = {
  allFilms: FilmsShape,
  onButtonClick: PropTypes.func.isRequired,
  visibleFilmsCount: PropTypes.number.isRequired,
};


const mapStateToProps = ({FILMS}) => ({
  allFilms: getAllFilmsByGenre(FILMS),
  visibleFilmsCount: FILMS.visibleFilmsCount,
});

const mapDispatchToProps = (dispatch) => ({
  onButtonClick() {
    dispatch(ActionCreator.increaseVisibleFilmsCount());
  },
});

export {ShowMoreBtn};
export default connect(mapStateToProps, mapDispatchToProps)(ShowMoreBtn);
