import Reducer from 'redux';

const initialState = {
  currentSong: {},
  isLocked: false,
  position: 0,
  isPLaying: false,
  deviceId: '',
  nextSongLocked: false,
}

const Player: Reducer.Reducer = (state = initialState, action: any) => {

  switch (action.type) {
    case 'PLAY_SONG_PENDING':
      return state;
    case 'PLAY_SONG_SUCCESS':
      return {
        ...state,
        isPlaying: true,
      };
    case 'PLAY_SONG_FAILURE':
      return {
        ...state,
        error: 'cannot lock the song'
      };
    case 'SET_DEVICE_ID':
      return {
        ...state,
        deviceId: action.device_id,
      };
    case 'REMOVE_DEVICE_ID':
      return {
        ...state,
        deviceId: '',
      };
    case 'SET_SONG_POSITION':
      return {
        ...state,
        position: action.data,
      };
    case 'SET_CURRENT_SONG':
      return {
        ...state,
        currentSong: action.data,
      };
    case 'SET_FLAG':
      return {
        ...state,
        isLocked: action.data,
      };
    case 'SEND_NEXT_SONG_PENDING':
      return {
        ...state,
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
      }
    default:
      return state;
  }
};

export default Player;