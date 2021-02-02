import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const mockFilms = new Array(20).fill().map((val, index) => ({id: index}));

const promoFilm = {
  name: `The Grand Budapest Hotel`,
  genre: `Drama`,
  released: 2014
};

ReactDOM.render(
    <App
      films={mockFilms}
      promo={promoFilm}
    />,
    document.querySelector(`#root`)
);
