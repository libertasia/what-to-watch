import React from 'react';
import {Provider} from 'react-redux';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import userEvent from '@testing-library/user-event';
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

it(`Click on ActiveTab works`, () => {
  const history = createMemoryHistory();
  const activeTabClickHandler = jest.fn();
  let activeTab = TabTypes.OVERVIEW;
  activeTabClickHandler.mockImplementation(
      () => (activeTab = TabTypes.DETAILS)
  );
  render(
      <Provider store={mockStore(store)}>
        <Router history={history}>
          <Tabs
            film={mockFilm}
            reviews={mockReviews}
            activeTab={TabTypes.OVERVIEW}
            setActiveTab={activeTabClickHandler}
          />
        </Router>
      </Provider>
  );
  userEvent.click(screen.getByText(`Details`));
  expect(activeTabClickHandler).toBeCalled();
  expect(activeTab).toBe(TabTypes.DETAILS);
});


