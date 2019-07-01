import Reducer from 'redux';

const initialState = {
  currentSong: {},
  isLocked: false,
  position: 0,
  isPlaying: false,
  deviceId: ''
}

const Player: Reducer.Reducer = (state = initialState, action: any) => {

  switch (action.type) {
    case 'PLAY_SONG_PENDING':
      return state;
    case 'PLAY_SONG_SUCCESS':
      return {
        ...state
      };
    case 'PLAY_SONG_FAILURE':
      return {
        ...state,
        error: 'cannot play the song'
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
        isLocked: true,
      };
    case 'SEND_NEXT_SONG_FAILURE':
      return {
        ...state,
        error: 'cannot lock the song'
      }
    case 'TOOGLE_PLAY':
      return {
        ...state,
        isPlaying: action.data
      }
    default:
      return state;
  }
};

export default Player;