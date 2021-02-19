import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import mockFilms from './mocks/films';
import mockReviews from './mocks/reviews';

const promoFilm = {
  genre: `Drama`,
  name: `The Grand Budapest Hotel`,
  released: 2014
};

ReactDOM.render(
    <App
      films={mockFilms}
      promo={promoFilm}
      reviews={mockReviews}
    />,
    document.querySelector(`#root`)
);
