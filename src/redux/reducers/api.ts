import Reducer from 'redux';

const initialState = {
  userStats: {
    name: 'tom',
    email: 'tom@tom.com',
    tickets: 0,
    diamonds: 0,
    loading: false,
  },
  searchResults: {
    songs: [],
    loading: false,
  },
  addSongToQueue: {
    songAdded: false,
    loading: false,
  }
}

const api: Reducer.Reducer = (state = initialState, action: any) => {
  // if(!~action.type.indexOf('_PENDING')) {
  //   return {
  //     ...state,
  //     loading: true,
  //   }
  // }
  switch (action.type) {
    case 'GET_USER_STATS_PENDING':
      return {
        ...state,
        loading: true,
      };
    case 'GET_USER_STATS_SUCCESS':
      return {
        ...state,
        userStats: {
          name: action.data.name,
          email: action.data.email,
          tickets: action.data.tickets,
          diamonds: action.data.diamonds
        }
      };
    case 'GET_USER_STATS_FAILURE':
      return {
        ...state,
        error: 'cannot retreive user data'
      };
    case 'SEARCH_SONGS_PENDING':
      return {
        ...state,
        loading: true,
      };
    case 'SEARCH_SONGS_SUCCESS':
      return {
        ...state,
        searchResults: {
          ...state.searchResults,
          songs: action.data
        }
      };
    case 'SEARCH_SONGS_FAILURE':
      return {
        ...state,
        error: 'cannot retreive serach data'
      };
    case 'ADD_SONG_TO_QUEUE_PENDING':
      return {
        ...state,
        loading: true,
      };
    case 'ADD_SONG_TO_QUEUE_SUCCESS':
      return {
        ...state,
        songAdded: true,
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

export default api;