import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import App from './components/app/app';
import mockFilms from './mocks/films';
import mockReviews from './mocks/reviews';
import {reducer} from './store/reducer';

const store = createStore(
    reducer,
    composeWithDevTools()
);

const promoFilm = {
  genre: `Drama`,
  name: `The Grand Budapest Hotel`,
  released: 2014
};

ReactDOM.render(
    <Provider store={store}>
      <App
        films={mockFilms}
        promo={promoFilm}
        reviews={mockReviews}
      />
    </Provider>,
    document.querySelector(`#root`)
);
