import React from 'react';
import {Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import userEvent from '@testing-library/user-event';
import {fireEvent, render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {AddReviewForm} from './add-review-form';
import {mockFilm} from '../../../test-mocks';
import {AuthorizationStatus} from '../../../const';

const mockStore = configureStore({});
const store = {
  FILMS: {
    authorizationStatus: AuthorizationStatus.AUTH,
    film: mockFilm,
    isFilmLoaded: true
  },
  ERRORS: {
    errorMessage: null,
  },
  VIEW: {
    isReviewFormDisabled: false,
  }
};

describe(`Test AddReviewForm`, () => {
  it(`AddReviewForm should be render correctly`, () => {
    const history = createMemoryHistory();
    render(
        <Provider store={mockStore(store)}>
          <Router history={history}>
            <AddReviewForm
              film={mockFilm}
              errorMessage={null}
              isReviewFormDisabled={false}
              onReviewSubmit={jest.fn()}
            />
          </Router>
        </Provider>
    );

    expect(screen.getByText(`Post`)).toBeInTheDocument();
    userEvent.type(screen.getByPlaceholderText(`Review text`), `test comment`);
    expect(screen.getByDisplayValue(/test comment/i)).toBeInTheDocument();
  });

  it(`Click on SubmitBtn works`, () => {
    const history = createMemoryHistory();
    const SubmitBtnClickHandler = jest.fn();
    let isReviewFormDisabled = false;
    SubmitBtnClickHandler.mockImplementation(
        () => (isReviewFormDisabled = true)
    );

    render(
        <Provider store={mockStore(store)}>
          <Router history={history}>
            <AddReviewForm
              film={mockFilm}
              errorMessage={null}
              isReviewFormDisabled={false}
              onReviewSubmit={SubmitBtnClickHandler}
            />
          </Router>
        </Provider>
    );

    expect(screen.getByText(`Post`)).toBeInTheDocument();
    userEvent.type(screen.getByPlaceholderText(`Review text`), `test comment`);
    expect(screen.getByDisplayValue(/test comment/i)).toBeInTheDocument();
    fireEvent.submit(screen.getByTestId(`submit-form`));
    expect(SubmitBtnClickHandler).toBeCalled();
    expect(isReviewFormDisabled).toBe(true);
  });
});

