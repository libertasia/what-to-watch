import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Main from '../pages/main/main';
import SignIn from '../pages/sign-in/sign-in';
import MyList from '../pages/my-list/my-list';
import Film from '../pages/film/film';
import AddReview from '../pages/add-review/add-review';
import Player from '../pages/player/player';
import NotFoundScreen from '../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import {AppRoute} from '../../const';

const App = () => {
  return (
    <Switch>
      <Route exact path={AppRoute.ROOT}>
        <Main />
      </Route>
      <Route exact path={AppRoute.LOGIN}>
        <SignIn />
      </Route>
      <PrivateRoute exact
        path={AppRoute.MY_LIST}
        render={() => <MyList />}
      >
      </PrivateRoute>
      <Route exact path={AppRoute.FILM}>
        <Film />
      </Route>
      <PrivateRoute exact
        path={AppRoute.ADD_REVIEW}
        render={() => <AddReview />}
      >
      </PrivateRoute>
      <Route exact path={AppRoute.PLAYER}>
        <Player />
      </Route>
      <Route>
        <NotFoundScreen />
      </Route>
    </Switch>
  );
};

export default App;
