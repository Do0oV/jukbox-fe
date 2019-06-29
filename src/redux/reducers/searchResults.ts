import Reducer from 'redux';

const initialState = {
  songs: [],  
  loading: false,
}

const searchResults: Reducer.Reducer = (state = initialState, action: any) => {

  switch (action.type) {
    case 'SEARCH_SONGS_PENDING':
      return {
        ...state,
        loading: true,
      };
    case 'SEARCH_SONGS_SUCCESS':
      return {
        ...state,
        songs: action.data,
      };
    case 'SEARCH_SONGS_FAILURE':
      return {
        ...state,
        error: 'cannot retreive serach data'
      };
    default:
      return state;
  }
};

export default searchResults;