import React from 'react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render} from '@testing-library/react';
import PageFooter from './page-footer';

it(`PageLogo should render correctly`, () => {
  const history = createMemoryHistory();
  const {container} = render(
      <Router history={history}>
        <PageFooter />
      </Router>
  );
  expect(container).toMatchSnapshot();
});
