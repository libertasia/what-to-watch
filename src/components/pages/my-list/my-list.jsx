import React from 'react';
import PageFooter from '../../shared/page-footer/page-footer';
import PageLogo from '../../shared/page-logo/page-logo';
import MovieList from '../../shared/movie-list/movie-list';
import {FilmsShape} from '../../../shapes';

const MyList = (props) => {
  const {films} = props;

  const favouriteFilms = films.filter((film)=>film.isFavorite);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <PageLogo />
        <h1 className="page-title user-page__title">My list</h1>
        <div className="user-block">
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width={63} height={63} />
          </div>
        </div>
      </header>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <MovieList visibleFilms={favouriteFilms} />
      </section>
      <PageFooter />
    </div>
  );
};

MyList.propTypes = {
  films: FilmsShape
};

export default MyList;
