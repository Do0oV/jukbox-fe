import Reducer from 'redux';

const initialState = 0;

const currentSongPositionReducer: Reducer.Reducer = (state = initialState, action: any) => {

  switch (action.type) {
    case 'SET_SONG_POSITION':
      return action.data;
    default:
      return state;
  }
};

export default currentSongPositionReducer;