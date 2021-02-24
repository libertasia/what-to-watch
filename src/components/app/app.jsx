import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Main from '../pages/main/main';
import SignIn from '../pages/sign-in/sign-in';
import MyList from '../pages/my-list/my-list';
import Film from '../pages/film/film';
import AddReview from '../pages/add-review/add-review';
import Player from '../pages/player/player';
import NotFoundScreen from '../pages/not-found-screen/not-found-screen';
import {FilmsShape, ReviewsShape} from '../../shapes';

const App = (props) => {
  const {films, reviews} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/login">
          <SignIn />
        </Route>
        <Route exact path="/mylist">
          <MyList films={films} />
        </Route>
        <Route exact path="/films/:id">
          <Film films={films} reviews={reviews} />
        </Route>
        <Route exact path="/films/:id/review">
          <AddReview films={films} />
        </Route>
        <Route exact path="/player/:id">
          <Player films={films} />
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
  reviews: ReviewsShape
};

export default App;
