import React from 'react';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import Main from '../pages/main/main';
import SignIn from '../pages/sign-in/sign-in';
import MyList from '../pages/my-list/my-list';
import Film from '../pages/film/film';
import AddReview from '../pages/add-review/add-review';
import Player from '../pages/player/player';
import NotFoundScreen from '../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import {FilmsShape, ReviewsShape} from '../../shapes';
import browserHistory from "../../browser-history";

const App = (props) => {
  const {films} = props;

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/login">
          <SignIn />
        </Route>
        <PrivateRoute exact
          path="/mylist"
          render={() => <MyList />}
        >
        </PrivateRoute>
        <Route exact path="/films/:id">
          <Film />
        </Route>
        <PrivateRoute exact
          path="/films/:id/review"
          render={() => <AddReview films={films} />}
        >
        </PrivateRoute>
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
