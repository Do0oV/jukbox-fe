import Reducer from 'redux';

const initialState = {
  playlist: [],
  loading: false
};

const playlist: Reducer.Reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'PLAYLIST_RECEIVED':
      return {
        ...state,
        playlist: action.playlist
      };
    case 'SOCKET_ERROR':
      return {
        ...state,
        error: 'cannot retrieve songs'
      };
    default:
      return state;
  }
};

export default playlist;