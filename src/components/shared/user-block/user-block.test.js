import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {createMemoryHistory} from 'history';
import UserBlock from './user-block';
import {AuthorizationStatus} from '../../../const';

const mockStore = configureStore({});
const store = {
  FILMS: {
    authorizationStatus: AuthorizationStatus.NO_AUTH,
  }
};

it(`UserBlock should render correctly`, () => {
  const history = createMemoryHistory();
  render(
      <Provider store={mockStore(store)}>
        <Router history={history}>
          <UserBlock />
        </Router>
      </Provider>
  );

  expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
});
