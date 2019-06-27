import Reducer from 'redux';

const initialState = {};

const currentSongReducer: Reducer.Reducer = (state = initialState, action: any) => {

  switch (action.type) {
    case 'SET_CURRENT_SONG':
      return action.data;
    default:
      return state;
  }
};

export default currentSongReducer;