import allReducers from './redux/reducers'
import { api } from './redux/middleware/api'
import { socket } from './redux/middleware/socket';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App/App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { resetFlag } from './redux/middleware/resetFlag';
import {connectSocket} from './redux/actions';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './redux/saga';
import CareTaker from './redux/persistStore';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: any;
  }
}

const careTaker = new CareTaker();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

const store = createStore(allReducers, careTaker.loadState(), composeEnhancers(applyMiddleware(sagaMiddleware, api, socket, resetFlag)));

careTaker.persist(store);
if (store.getState().user.accessToken) {
  store.dispatch(connectSocket(store.getState().user.accessToken));
}

sagaMiddleware.run(rootSaga);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

export default store;