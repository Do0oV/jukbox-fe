import Reducer from 'redux';

const initialState = '';

const setAccessToken: Reducer.Reducer = (state = initialState, action: any) => {

  switch (action.type) {
    case 'SET_ACCESS_TOKEN':
      return action.access_token;
    case 'REMOVE_ACCESS_TOKEN':
      return '';
    default:
      return state;
  }
};

export default setAccessToken;