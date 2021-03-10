import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {Link, useParams} from "react-router-dom";
import PropTypes from 'prop-types';
import Tabs from './tabs';
import PageFooter from '../../shared/page-footer/page-footer';
import PageLogo from '../../shared/page-logo/page-logo';
import MovieList from '../../shared/movie-list/movie-list';
import {FilmShape, FilmsShape} from '../../../shapes';
import {fetchFilmById, fetchFilmsList, fetchReviewsById} from '../../../store/api-actions';
import LoadingScreen from '../../loading-screen/loading-screen';
import UserBlock from '../../shared/user-block/user-block';
import {AuthorizationStatus} from '../../../const';


const MAX_SIMILAR_FILMS_COUNT = 4;

const Film = (props) => {
  const {films, film, isDataLoaded, isFilmLoaded, isReviewsLoaded, onLoad, authorizationStatus} = props;

  const id = parseInt(useParams().id, 10);

  useEffect(() => {
    onLoad(id);
  }, [id]);

  if (!isFilmLoaded || !isReviewsLoaded || !isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  const similarFilms = films.filter((f) => f.genre === film.genre && f.id !== film.id).slice(0, MAX_SIMILAR_FILMS_COUNT);

  const hrefToAddReviewPage = `/films/${film.id}/review`;

  const hrefToPlayerPage = `/player/${film.id}`;

  const imgAltText = `${film.name} poster`;

  return (
    <React.Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={film.backgroundImage} alt={film.name} />
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <header className="page-header movie-card__head">
            <PageLogo />
            <UserBlock />
          </header>
          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{film.name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{film.genre}</span>
                <span className="movie-card__year">{film.released}</span>
              </p>
              <div className="movie-card__buttons">
                <Link to={hrefToPlayerPage} role="button" className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width={19} height={19}>
                    <use xlinkHref="#play-s" />
                  </svg>
                  <span>Play</span>
                </Link>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width={19} height={20}>
                    <use xlinkHref="#add" />
                  </svg>
                  <span>My list</span>
                </button>
                {authorizationStatus === AuthorizationStatus.AUTH &&
                  <Link to={hrefToAddReviewPage} className="btn movie-card__button">Add review</Link>
                }
              </div>
            </div>
          </div>
        </div>
        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={film.posterImage} alt={imgAltText} width={218} height={327} />
            </div>
            <Tabs />
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <MovieList visibleFilms={similarFilms} />
        </section>
        <PageFooter />
      </div>
    </React.Fragment>
  );
};

Film.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  films: FilmsShape,
  film: FilmShape,
  isDataLoaded: PropTypes.bool.isRequired,
  isFilmLoaded: PropTypes.bool.isRequired,
  isReviewsLoaded: PropTypes.bool.isRequired,
  onLoad: PropTypes.func.isRequired,
};

const mapStateToProps = ({FILMS}) => ({
  authorizationStatus: FILMS.authorizationStatus,
  films: FILMS.films,
  film: FILMS.film,
  isDataLoaded: FILMS.isDataLoaded,
  isFilmLoaded: FILMS.isFilmLoaded,
  isReviewsLoaded: FILMS.isReviewsLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  onLoad(id) {
    dispatch(fetchFilmsList());
    dispatch(fetchFilmById(id));
    dispatch(fetchReviewsById(id));
  },
});

export {Film};
export default connect(mapStateToProps, mapDispatchToProps)(Film);
