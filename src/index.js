import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from "redux-thunk";
import {createAPI} from "./services/api";
import App from './components/app/app';
import rootReducer from './store/root-reducer';
import {ActionCreator} from './store/action';
import {redirect} from "./store/middlewares/redirect";
import {checkAuth} from "./store/api-actions";
import {AuthorizationStatus} from "./const";
import mockReviews from './mocks/reviews';
import films from './mocks/films';

const api = createAPI(
    () => store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect)
    )
);

store.dispatch(checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App
        films={films}
        reviews={mockReviews}
      />
    </Provider>,
    document.querySelector(`#root`)
);
