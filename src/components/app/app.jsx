import React from 'react';
import Main from '../main/main';
import {FilmsShape, PromoFilmShape} from '../../shapes';

const App = (props) => {
  const {films, promo} = props;

  return (
    <Main films={films} promo={promo} />
  );
};

App.propTypes = {
  films: FilmsShape,
  promo: PromoFilmShape
};

export default App;
