import React from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../../const';

const NotFoundScreen = () => {
  return (
    <React.Fragment>
      <h1>404. Page not found</h1>
      <Link to={AppRoute.ROOT}>Go back to the main page</Link>
    </React.Fragment>
  );
};

export default NotFoundScreen;
