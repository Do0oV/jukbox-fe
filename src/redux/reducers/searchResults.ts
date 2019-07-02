import Reducer from 'redux';

const initialState = {
  songs: [],  
  loading: false
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
        error: 'cannot retreive search data'
      };
      case 'EMPTY_SEARCH_RESULT_STATE':
        return {
          songs: [] 
        };
    default:
      return state;
  }
};

export default searchResults;