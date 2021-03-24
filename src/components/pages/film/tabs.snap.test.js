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
describe(`Tabs`, () => {
  it(`renders correctly if active tab is Overview`, () => {
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
  it(`renders correctly if active tab is Details`, () => {
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
  it(`renders correctly if active tab is Reviews`, () => {
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
});
