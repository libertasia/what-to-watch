import React from 'react';
import {Provider} from 'react-redux';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import ProgressTogglerTimer from './progress-toggle-timer';

const mockStore = configureStore({});

it(`ProgressTogglerTimer renders correctly`, () => {
  const history = createMemoryHistory();
  const progress = 0;
  const timer = `05:05`;

  const {container} = render(
      <Provider store={mockStore({})}>
        <Router history={history}>
          <ProgressTogglerTimer
            progress={progress}
            timer={timer}
            onProgressClickHandler={jest.fn()} />
        </Router>
      </Provider>
  );

  expect(container).toMatchSnapshot();
});
