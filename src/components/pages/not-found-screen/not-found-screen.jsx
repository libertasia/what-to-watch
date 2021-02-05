import React from 'react';
import {Link} from 'react-router-dom';

const NotFoundScreen = () => {
  return (
    <React.Fragment>
      <h1>404. Page not found</h1>
      <Link to="/">Go back to the main page</Link>
    </React.Fragment>
  );
};

export default NotFoundScreen;
