import React from 'react';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import PageLogo from '../../shared/page-logo/page-logo';
import AddReviewForm from './add-review-form';
import {FilmShape} from '../../../shapes';

const AddReview = (props) => {
  const {film} = props;

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
          <div className="user-block">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width={63} height={63} />
            </div>
          </div>
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
};

const mapStateToProps = ({FILMS}) => ({
  film: FILMS.film,
});

export {AddReview};
export default connect(mapStateToProps, null)(AddReview);
