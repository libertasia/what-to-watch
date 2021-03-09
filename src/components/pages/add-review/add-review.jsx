import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Link, useParams} from "react-router-dom";
import PageLogo from '../../shared/page-logo/page-logo';
import UserBlock from '../../shared/user-block/user-block';
import AddReviewForm from './add-review-form';
import {FilmShape} from '../../../shapes';
import {fetchFilmById} from '../../../store/api-actions';
import LoadingScreen from '../../loading-screen/loading-screen';

const AddReview = (props) => {
  const {film, isFilmLoaded, onLoad} = props;

  const id = parseInt(useParams().id, 10);

  useEffect(() => {
    onLoad(id);
  }, []);

  if (!isFilmLoaded) {
    return (
      <LoadingScreen />
    );
  }

  const hrefToFilmPage = `/films/${film.id}`;

  const imgAltText = `${film.name} poster`;

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={film.backgroundImage} alt={film.name} />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header">
          <PageLogo />
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={hrefToFilmPage} className="breadcrumbs__link">{film.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>
          <UserBlock />
        </header>
        <div className="movie-card__poster movie-card__poster--small">
          <img src={film.posterImage} alt={imgAltText} width={218} height={327} />
        </div>
      </div>
      <div className="add-review">
        <AddReviewForm />
      </div>
    </section>
  );
};

AddReview.propTypes = {
  film: FilmShape,
  isFilmLoaded: PropTypes.bool.isRequired,
  onLoad: PropTypes.func.isRequired,
};

const mapStateToProps = ({FILMS}) => ({
  film: FILMS.film,
  isFilmLoaded: FILMS.isFilmLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  onLoad(id) {
    dispatch(fetchFilmById(id));
  },
});

export {AddReview};
export default connect(mapStateToProps, mapDispatchToProps)(AddReview);
