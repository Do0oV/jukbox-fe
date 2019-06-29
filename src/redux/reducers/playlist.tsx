import Reducer from 'redux';

const initialState = {
  playlist: [],
  loading: false
};

const playlist: Reducer.Reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'MAKE_CONNECTION_PENDING':
      return {
        ...state,
        loading: true
      };
    case 'MAKE_CONNECTION_SUCCESS':
      return {
        ...state,
        playlist: action.playlist
      };
    case 'MAKE_CONNECTION_FAILURE':
      return {
        ...state,
        error: 'cannot retrieve songs'
      };
    default:
      return state;
  }
};

export default playlist;