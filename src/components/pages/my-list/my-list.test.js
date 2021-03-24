import React from 'react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {MyList} from './my-list';
import {mockFilms} from '../../../test-mocks';

const mockStore = configureStore({});
const store = {
  FILMS: {
    favoriteFilms: mockFilms,
  }
};
it(`MyList should render correctly`, () => {
  const history = createMemoryHistory();
  render(
      <Provider store={mockStore(store)}>
        <Router history={history}>
          <MyList
            favoriteFilms={mockFilms}
            onLoadData={jest.fn()}
          />
        </Router>
      </Provider>
  );

  expect(screen.getByText(/My list/i)).toBeInTheDocument();
});
