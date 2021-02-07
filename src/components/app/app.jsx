import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Main from '../pages/main/main';
import SignIn from '../pages/sign-in/sign-in';
import MyList from '../pages/my-list/my-list';
import Film from '../pages/film/film';
import AddReview from '../pages/add-review/add-review';
import Player from '../pages/player/player';
import NotFoundScreen from '../pages/not-found-screen/not-found-screen';
import {FilmsShape, PromoFilmShape} from '../../shapes';

const App = (props) => {
  const {films, promo} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main films={films} promo={promo} />
        </Route>
        <Route exact path="/login">
          <SignIn />
        </Route>
        <Route exact path="/mylist">
          <MyList />
        </Route>
        <Route exact path="/films/:id">
          <Film />
        </Route>
        <Route exact path="/films/:id/review">
          <AddReview />
        </Route>
        <Route exact path="/player/:id">
          <Player />
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  films: FilmsShape,
  promo: PromoFilmShape
};

export default App;
