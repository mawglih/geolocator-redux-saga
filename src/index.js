import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  applyMiddleware,
  compose,
  createStore,
} from 'redux';
import reducer from 'reducers';
import createSagaMiddleware from 'redux-saga';
import Geo from 'containers/Geo';
import {
  watchFetch,
} from 'sagas'; //eslint-disable-next-line
import styles from './index.css';

import registerServiceWorker from './registerServiceWorker';

const logger = store => {
  return next => {
    return action => {
      console.log('[Midlleware] dispatching', action);
      next(action);
    }
  }
}
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer,
  composeEnhancer(
    applyMiddleware(
      sagaMiddleware,
      logger,
    )
  )
);
// sagaMiddleware.run(watchFetch);


ReactDOM.render(
  <Provider store={store}>
    <Geo />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
