import React from 'react';
import {Provider} from 'react-redux';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import {Film} from './film';
import {mockFilm, mockFilms, mockReviews} from '../../../test-mocks';
import {AuthorizationStatus, TabTypes} from '../../../const';

const mockStore = configureStore({});
const store = {
  FILMS: {
    authorizationStatus: AuthorizationStatus.AUTH,
    film: mockFilm,
    films: mockFilms,
    reviews: mockReviews,
    isDataLoaded: true,
    isFilmLoaded: true,
    isReviewsLoaded: true,
  },
  VIEW: {
    activeTab: TabTypes.OVERVIEW,
  }
};
it(`Film renders correctly`, () => {
  const history = createMemoryHistory();
  const {container} = render(
      <Provider store={mockStore(store)}>
        <Router history={history}>
          <Film
            film={mockFilm}
            films={mockFilms}
            isDataLoaded={true}
            isFilmLoaded={true}
            isReviewsLoaded={true}
            onLoad={jest.fn()}
            authorizationStatus={AuthorizationStatus.AUTH}
          />
        </Router>
      </Provider>
  );

  expect(container).toMatchSnapshot();
});
