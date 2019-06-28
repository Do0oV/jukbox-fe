import Reducer from 'redux';

const initialState = {
  addSongToQueue: { // NO NESTING
    songAdded: false,
    loading: false,
  }
}

const addSongToQueueAPI: Reducer.Reducer = (state = initialState, action: any) => {

  switch (action.type) {
    case 'ADD_SONG_TO_QUEUE_PENDING':
      return {
        ...state,
        loading: true,
      };
      case 'ADD_SONG_TO_QUEUE_SUCCESS':
        return {
          ...state,
          songAdded: true,
          loading: false,
      };
    case 'ADD_SONG_TO_QUEUE_FAILURE':
      return {
        ...state,
        error: 'cannot add song to queue'
      };
    default:
      return state;
  }
};

export default addSongToQueueAPI;