import React from 'react';
import {Provider} from 'react-redux';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import {Tabs} from './tabs';
import {mockFilm, mockReviews} from '../../../test-mocks';
import {TabTypes} from '../../../const';

const mockStore = configureStore({});
const store = {
  FILMS: {
    film: mockFilm,
    reviews: mockReviews,
    activeTab: TabTypes.OVERVIEW,
  }
};
describe(`Tabs should render correctly`, () => {
  it(`Tabs should render correctly if active tab is Overview`, () => {
    const history = createMemoryHistory();
    const {container} = render(
        <Provider store={mockStore(store)}>
          <Router history={history}>
            <Tabs
              film={mockFilm}
              reviews={mockReviews}
              activeTab={TabTypes.OVERVIEW}
              setActiveTab={jest.fn()}
            />
          </Router>
        </Provider>
    );

    expect(container).toMatchSnapshot();
  });
  it(`Tabs should render correctly if active tab is Details`, () => {
    const history = createMemoryHistory();
    const {container} = render(
        <Provider store={mockStore(store)}>
          <Router history={history}>
            <Tabs
              film={mockFilm}
              reviews={mockReviews}
              activeTab={TabTypes.DETAILS}
              setActiveTab={jest.fn()}
            />
          </Router>
        </Provider>
    );

    expect(container).toMatchSnapshot();
  });
  it(`Tabs should render correctly if active tab is Reviews`, () => {
    const history = createMemoryHistory();
    const {container} = render(
        <Provider store={mockStore(store)}>
          <Router history={history}>
            <Tabs
              film={mockFilm}
              reviews={mockReviews}
              activeTab={TabTypes.REVIEWS}
              setActiveTab={jest.fn()}
            />
          </Router>
        </Provider>
    );

    expect(container).toMatchSnapshot();
  });
  // it(`Click on FavoriteButton works`, () => {
  //   const favoriteButtonClickHandler = jest.fn();
  //   favoriteButtonClickHandler.mockImplementation(
  //       () => (mockFilm.isFavorite = false)
  //   );

  //   render(
  //       <Provider store={mockStore(store)}>
  //         <FavoriteButton
  //           film = {mockFilm}
  //           onClick={favoriteButtonClickHandler}
  //         />
  //       </Provider>
  //   );

  //   expect(screen.getByText(/My list/i)).toBeInTheDocument();
  //   userEvent.click(screen.getByRole(`button`));
  //   expect(favoriteButtonClickHandler).toBeCalled();
  //   expect(mockFilm.isFavorite).toBe(false);
  // });
});
