import Reducer from 'redux';

const initialState = {
  playing: false,
  loading: false
}

const setPlay: Reducer.Reducer = (state = initialState, action: any) => {

  switch (action.type) {
    case 'PLAY_SONG_PENDING':
    console.log('play pending')
      return {
        ...state,
        loading: true,
      };
    case 'PLAY_SONG_SUCCESS':
      return {
        ...state,
        playing: true,
      };
    case 'PLAY_SONG_FAILURE':
      return {
        ...state,
        error: 'cannot lock the song'
      };
    default:
      return state;
  }
};

export default setPlay;