import React from 'react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render} from '@testing-library/react';
import PageLogo from './page-logo';

it(`PageLogo renders correctly`, () => {
  const history = createMemoryHistory();
  const {container} = render(
      <Router history={history}>
        <PageLogo />
      </Router>
  );
  expect(container).toMatchSnapshot();
});
