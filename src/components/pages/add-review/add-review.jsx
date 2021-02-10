import React from 'react';
import {useParams} from "react-router-dom";
import PageLogo from '../../shared/page-logo/page-logo';
import AddReviewForm from './add-review-form';
import {FilmsShape} from '../../../shapes';

const AddReview = (props) => {
  const {films} = props;

  const id = parseInt(useParams().id, 10);

  const film = films.find((currentFilm)=>currentFilm.id === id);

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
                <a href="movie-page.html" className="breadcrumbs__link">{film.name}</a>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>
          <div className="user-block">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width={63} height={63} />
            </div>
          </div>
        </header>
        <div className="movie-card__poster movie-card__poster--small">
          <img src={film.posterImage} alt={film.name + ` poster`} width={218} height={327} />
        </div>
      </div>
      <div className="add-review">
        <AddReviewForm />
      </div>
    </section>
  );
};

AddReview.propTypes = {
  films: FilmsShape
};

export default AddReview;
