// import { string } from "prop-types";
import { BASE_URL } from '../../config'
import { Middleware } from 'redux';

export const loginGetRequest: Middleware<any, any, any> = (venue: any) => (store: any) => (next: any) => (action: any) => {
  if (!store.getState().isLoggedIn) return next(action);

  const defaultHeaders = {
    'Content-Type': 'application/json'
  };

  next({
    type: `${action.type}_PENDING`
  });
  fetch(`${BASE_URL}/login/user/${venue}`,
    { method: 'GET',
      headers: defaultHeaders
  })
    .then((response: any) => {
      if (response.statusCode === '200') {
        store.dispatch({
          type: `${action.type}_SUCCESS`,
          flag: true,
        })
      }
    })
}

