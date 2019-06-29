import { BASE_URL } from '../../config'
import { Middleware } from 'redux';

export const api: Middleware<any, any, any> = ({ dispatch, getState }: any) => (next: any) => (action: any) => {

  if (!action.method) return next(action);

  const defaultHeaders: HeadersInit = {
    'Content-Type': 'application/json',
  };

  const googleAccessToken = localStorage.getItem('access_token')
  if (googleAccessToken) {
    defaultHeaders['Authorization'] = `Bearer ${googleAccessToken}`;
  }

  const headers = {
    ...defaultHeaders,
    ...action.headers
  };

  next({
    type: `${action.type}_PENDING`
  });
  fetch(BASE_URL + action.endpoint, {
    method: action.method,
    body: action.body ? JSON.stringify(action.body) : undefined,
    headers: headers
  })
    .then(response => response.json())
    .then(data => {
      dispatch({
        type: `${action.type}_SUCCESS`,
        data
      })
    })
    .catch(error => {
      dispatch({
        type: `${action.type}_FAILURE`,
        error
      });
    });
}
