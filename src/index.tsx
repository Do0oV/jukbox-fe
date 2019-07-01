import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App/App';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './redux/reducers'
import { api } from './redux/middleware/api'
import { socket } from './redux/middleware/socket';
import { resetFlag } from './redux/middleware/resetFlag';
import {connectSocket} from './redux/actions';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: any;
  }
}

const preloadedStoreRAW = localStorage.getItem('state');
const preloadedStore = preloadedStoreRAW ? JSON.parse(preloadedStoreRAW) : undefined;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(allReducers, preloadedStore, composeEnhancers(applyMiddleware(api, socket, resetFlag)));

if (store.getState().user.accessToken) {
  store.dispatch(connectSocket(store.getState().user.userProfile.email));
}

store.subscribe(() => {
  localStorage.setItem('state', JSON.stringify(store.getState()))
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
