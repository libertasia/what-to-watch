import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {FavoriteButton} from './favorite-button';
import {mockFilm} from '../../../test-mocks';

const mockStore = configureStore({});
const store = {
  FILMS: {
    film: {
      id: 1,
      isFavorite: true
    }
  }
};
describe(`FavoriteButton`, () => {
  it(`renders correctly`, () => {
    render(
        <Provider store={mockStore(store)}>
          <FavoriteButton
            film={mockFilm}
            onClick={jest.fn()}
          />
        </Provider>
    );

    expect(screen.getByText(/My list/i)).toBeInTheDocument();
  });
  it(`works correctly when clicked`, () => {
    const favoriteButtonClickHandler = jest.fn();
    favoriteButtonClickHandler.mockImplementation(
        () => (mockFilm.isFavorite = false)
    );

    render(
        <Provider store={mockStore(store)}>
          <FavoriteButton
            film = {mockFilm}
            onClick={favoriteButtonClickHandler}
          />
        </Provider>
    );

    expect(screen.getByText(/My list/i)).toBeInTheDocument();
    userEvent.click(screen.getByTestId(`favorite_btn`));
    expect(favoriteButtonClickHandler).toBeCalled();
    expect(mockFilm.isFavorite).toBe(false);
  });
});
