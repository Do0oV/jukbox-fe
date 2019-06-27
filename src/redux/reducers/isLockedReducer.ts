import Reducer from 'redux';

const initialState = false;

const isLockedReducer: Reducer.Reducer = (state = initialState, action: any) => {

  switch (action.type) {
    case 'SET_FLAG':
      return action.data;
    default:
      return state;
  }
};

export default isLockedReducer;