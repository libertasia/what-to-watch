import React, {useState} from 'react';
import {connect} from 'react-redux';
import dayjs from 'dayjs';
import {FilmShape, ReviewsShape} from '../../../shapes';

export const TabTypes = {
  OVERVIEW: `overview`,
  DETAILS: `details`,
  REVIEWS: `reviews`
};

const TabDetails = [
  {
    type: TabTypes.OVERVIEW,
    title: `Overview`
  },
  {
    type: TabTypes.DETAILS,
    title: `Details`
  },
  {
    type: TabTypes.REVIEWS,
    title: `Reviews`
  },
];

const getStarring = (film) => {
  const res = [];
  film.starring.forEach((name) => {
    res.push(`${name},`);
    res.push(<br key={name} />);
  });
  return res;
};

const getDuration = (film) => {
  const totalMinutes = film.runTime;
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  if (hours > 0) {
    return `${hours}h ${minutes}m`;
  } else {
    return `${minutes}m`;
  }
};

const Tabs = (props) => {
  const {film, reviews} = props;

  const [activeTab, setActiveTab] = useState(TabTypes.OVERVIEW);

  const filmDurarion = getDuration(film);

  let tabContent = null;

  const handleTabClick = (evt) => {
    evt.preventDefault();
    setActiveTab(evt.currentTarget.dataset.id);
  };

  switch (activeTab) {
    case TabTypes.OVERVIEW:
      tabContent = (
        <React.Fragment>
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
        </React.Fragment>
      );
      break;
    case TabTypes.DETAILS:
      tabContent = (
        <div className="movie-card__text movie-card__row">
          <div className="movie-card__text-col">
            <p className="movie-card__details-item">
              <strong className="movie-card__details-name">Director</strong>
              <span className="movie-card__details-value">{film.director}</span>
            </p>
            <p className="movie-card__details-item">
              <strong className="movie-card__details-name">Starring</strong>
              <span className="movie-card__details-value">
                {getStarring(film)}
              </span>
            </p>
          </div>
          <div className="movie-card__text-col">
            <p className="movie-card__details-item">
              <strong className="movie-card__details-name">Run Time</strong>
              <span className="movie-card__details-value">{filmDurarion}</span>
            </p>
            <p className="movie-card__details-item">
              <strong className="movie-card__details-name">Genre</strong>
              <span className="movie-card__details-value">{film.genre}</span>
            </p>
            <p className="movie-card__details-item">
              <strong className="movie-card__details-name">Released</strong>
              <span className="movie-card__details-value">{film.released}</span>
            </p>
          </div>
        </div>
      );
      break;
    case TabTypes.REVIEWS:
      tabContent = (
        <div className="movie-card__reviews movie-card__row">
          <div className="movie-card__reviews-col">
            {
              reviews.map((review) => (
                <div key={review.id} className="review">
                  <blockquote className="review__quote">
                    <p className="review__text">{review.comment}</p>
                    <footer className="review__details">
                      <cite className="review__author">{review.user.name}</cite>
                      <time className="review__date" dateTime={review.date}>{`${dayjs(review.date).format(`MMMM D, YYYY`)}`}</time>
                    </footer>
                  </blockquote>
                  <div className="review__rating">{review.rating}</div>
                </div>
              ))
            }
          </div>
        </div>
      );
  }

  return (
    <div className="movie-card__desc">
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {
            TabDetails.map((tab) =>
              (
                <li key={tab.type} data-id={tab.type} onClick={handleTabClick} className={`movie-nav__item ${tab.type === activeTab ? `movie-nav__item--active` : ``}`}>
                  <a href="#" className="movie-nav__link">{tab.title}</a>
                </li>
              ))
          }
        </ul>
      </nav>
      {tabContent}
    </div>
  );
};

Tabs.propTypes = {
  film: FilmShape,
  reviews: ReviewsShape
};

const mapStateToProps = ({FILMS}) => ({
  film: FILMS.film,
  reviews: FILMS.reviews,
});

export {Tabs};
export default connect(mapStateToProps, null)(Tabs);
