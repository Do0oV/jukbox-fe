import Reducer from 'redux';

const initialState = false;

const loginReducer: Reducer.Reducer = (state = initialState, action: any) => {

  switch (action.type) {
    case 'SET_LOGGED_IN':
      return true;
    default:
      return state;
  }
};

export default loginReducer;