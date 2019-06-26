const initialState = {
  userStats : {
    name: '',
    email: '',
    tickets: 0,
    diamonds: 0
  },
  searchResults: {
    songs: []
  },
  addSongToQueue: {},
  loading: false,
};

export default (state = initialState, action: any) => {
  // if(!~action.type.indexOf('_PENDING')) {
  //   return {
  //     ...state,
  //     loading: true,
  //   }
  // }
  switch (action.type) {
    case 'SEARCH_SONGS_SUCCESS':
      return {
        ...state,
        searchResults: {
          ...state.searchResults,
          songs: action.data
        }
      };
    case 'LOG_IN_SUCCESS':
      return {
        ...state,
        userStats: action.data
      }
    default:
      return state;
  }
};