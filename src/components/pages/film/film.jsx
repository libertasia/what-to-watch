import React from 'react';
import {useParams, Link} from "react-router-dom";
import PageFooter from '../../shared/page-footer/page-footer';
import PageLogo from '../../shared/page-logo/page-logo';
import MovieList from '../../shared/movie-list/movie-list';
import {FilmsShape} from '../../../shapes';

const MAX_SIMILAR_FILMS_COUNT = 4;

const Film = (props) => {
  const {films} = props;

  const id = parseInt(useParams().id, 10);

  const film = films.find((currentFilm) => currentFilm.id === id);

  const similarFilms = films.filter((f) => f.genre === film.genre && f.id !== film.id).slice(0, MAX_SIMILAR_FILMS_COUNT);

  const hrefToAddReviewPage = `/films/${film.id}/review`;

  const hrefToPlayerPage = `/player/${film.id}`;

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
            <div className="user-block">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width={63} height={63} />
              </div>
            </div>
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
                <Link to={hrefToAddReviewPage} className="btn movie-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={film.posterImage} alt={film.name + ` poster`} width={218} height={327} />
            </div>
            <div className="movie-card__desc">
              <nav className="movie-nav movie-card__nav">
                <ul className="movie-nav__list">
                  <li className="movie-nav__item movie-nav__item--active">
                    <a href="#" className="movie-nav__link">Overview</a>
                  </li>
                  <li className="movie-nav__item">
                    <a href="#" className="movie-nav__link">Details</a>
                  </li>
                  <li className="movie-nav__item">
                    <a href="#" className="movie-nav__link">Reviews</a>
                  </li>
                </ul>
              </nav>
              <div className="movie-rating">
                <div className="movie-rating__score">{film.rating}</div>
                <p className="movie-rating__meta">
                  <span className="movie-rating__level">Very good</span>
                  <span className="movie-rating__count">{film.scoresCount} ratings</span>
                </p>
              </div>
              <div className="movie-card__text">
                <p>{film.description}</p>
                <p className="movie-card__director"><strong>Director: {film.director}</strong></p>
                <p className="movie-card__starring"><strong>Starring: {film.starring.join(`, `)} and other</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <MovieList films={similarFilms}/>
        </section>
        <PageFooter />
      </div>
    </React.Fragment>
  );
};

Film.propTypes = {
  films: FilmsShape
};

export default Film;
