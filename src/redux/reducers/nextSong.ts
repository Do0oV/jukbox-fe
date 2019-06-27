import Reducer from 'redux';

const initialState = {
  nextSongLocked: false,
  loading: false
}

const nextSong: Reducer.Reducer = (state = initialState, action: any) => {

  switch (action.type) {
    case 'SEND_NEXT_SONG_PENDING':
      return {
        ...state,
        loading: true,
      };
    case 'SEND_NEXT_SONG_SUCCESS':
      return {
        ...state,
        nextSongLocked: true,
      };
    case 'SEND_NEXT_SONG_FAILURE':
      return {
        ...state,
        error: 'cannot lock the song'
      };
    default:
      return state;
  }
};

export default nextSong;