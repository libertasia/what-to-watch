import React from 'react';
import Main from '../main/main';
import PropTypes from 'prop-types';

const App = (props) => {
  const {films, promo} = props;

  return (
    <Main films={films} promo={promo} />
  );
};

App.propTypes = {
  films: PropTypes.array.isRequired,
  promo: PropTypes.object.isRequired
};

export default App;
