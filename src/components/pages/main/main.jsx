import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {FilmsShape, PromoFilmShape} from '../../../shapes';
import MovieList from '../../shared/movie-list/movie-list';
import GenresList from './genres-list';
import ShowMoreBtn from './show-more-btn';
import LoadingScreen from '../../loading-screen/loading-screen';
import UserBlock from '../../shared/user-block/user-block';
import {getVisibleFilms} from '../../../selectors';
import {ActionCreator} from '../../../store/action';
import {fetchFilmsList, fetchPromoFilm} from "../../../store/api-actions";

const Main = (props) => {
  const {promo, visibleFilms, onLoad, isDataLoaded, isPromoLoaded, onLoadData} = props;

  useEffect(() => {
    onLoad();
  }, []);

  useEffect(() => {
    if (!isDataLoaded || !isPromoLoaded) {
      onLoadData();
    }
  }, [isDataLoaded, isPromoLoaded]);

  if (!isDataLoaded || !isPromoLoaded) {
    return (
      <LoadingScreen />
    );
  }

  const imgAltText = `${promo.name} poster`;

  return (
    <React.Fragment>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={promo.backgroundImage} alt={promo.name} />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header movie-card__head">
          <div className="logo">
            <a className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>
          <UserBlock />
        </header>
        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src={promo.posterImage} alt={imgAltText} width={218} height={327} />
            </div>
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{promo.name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{promo.genre}</span>
                <span className="movie-card__year">{promo.released}</span>
              </p>
              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width={19} height={19}>
                    <use xlinkHref="#play-s" />
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width={19} height={20}>
                    <use xlinkHref="#add" />
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenresList />
          <MovieList visibleFilms={visibleFilms}/>
          <div className="catalog__more">
            <ShowMoreBtn />
          </div>
        </section>
        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>
          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
};

Main.propTypes = {
  isDataLoaded: PropTypes.bool.isRequired,
  isPromoLoaded: PropTypes.bool.isRequired,
  onLoad: PropTypes.func.isRequired,
  onLoadData: PropTypes.func.isRequired,
  promo: PromoFilmShape,
  visibleFilms: FilmsShape,
};

const mapStateToProps = ({FILMS, VIEW}) => ({
  isDataLoaded: FILMS.isDataLoaded,
  isPromoLoaded: FILMS.isPromoLoaded,
  promo: FILMS.promo,
  visibleFilms: getVisibleFilms({FILMS, VIEW}),
});

const mapDispatchToProps = (dispatch) => ({
  onLoad() {
    dispatch(ActionCreator.resetVisibleFilmsCount());
  },
  onLoadData() {
    dispatch(fetchPromoFilm());
    dispatch(fetchFilmsList());
  },
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
