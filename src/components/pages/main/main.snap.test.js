import React from 'react';
import {Provider} from 'react-redux';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import {Main} from './main';
import {mockFilm, mockFilms, mockReviews} from '../../../test-mocks';
import {AuthorizationStatus, TabTypes} from '../../../const';
import { number } from 'prop-types';

const mockStore = configureStore({});
const store = {
  FILMS: {
    authorizationStatus: AuthorizationStatus.AUTH,
    promo: mockFilm,
    visibleFilms: mockFilms,
    reviews: mockReviews,
    films: mockFilms,
    isDataLoaded: true,
    isPromoLoaded: true,
    isFilmsListLoading: false,
    isPromoLoading: false,
  },
  VIEW: {
    activeTab: TabTypes.OVERVIEW,
  },
  ERRORS: {
    errorMessage: number,
  }
};
it(`MainScreen renders correctly`, () => {
  const history = createMemoryHistory();
  const {container} = render(
      <Provider store={mockStore(store)}>
        <Router history={history}>
          <Main
            authorizationStatus={AuthorizationStatus.AUTH}
            promo={mockFilm}
            visibleFilms={mockFilms}
            onLoad={jest.fn()}
            isDataLoaded={true}
            isFilmsListLoading={false}
            isPromoLoaded={true}
            isPromoLoading={false}
            loadFilmsList={jest.fn()}
            loadPromoFilm={jest.fn()}
            errorMessage={null}
          />
        </Router>
      </Provider>
  );

  expect(container).toMatchSnapshot();
});
