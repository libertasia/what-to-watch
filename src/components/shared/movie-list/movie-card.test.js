import React from 'react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {fireEvent, render, screen} from '@testing-library/react';
import MovieCard from './movie-card';
import {mockFilm} from '../../../test-mocks';

describe(`MovieCard should render correctly`, () => {
  it(`MovieCard should render correctly`, () => {
    const history = createMemoryHistory();
    render(
        <Router history={history}>
          <MovieCard
            film={mockFilm}
            onActiveFilmChange={jest.fn()}
          />
        </Router>
    );

    expect(screen.getByText(/The Exorcist/i)).toBeInTheDocument();
  });
  it(`MouseOver on MovieCard works`, () => {
    const history = createMemoryHistory();
    const mouseOverHandler = jest.fn();

    render(
        <Router history={history}>
          <MovieCard
            film={mockFilm}
            onActiveFilmChange={mouseOverHandler}
          />
        </Router>
    );

    expect(screen.getByText(/The Exorcist/i)).toBeInTheDocument();
    fireEvent.mouseOver(screen.getByTestId(`movie-card`));
    expect(mouseOverHandler).toBeCalled();
  });
});
