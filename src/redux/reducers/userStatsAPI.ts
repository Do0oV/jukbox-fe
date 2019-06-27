import Reducer from 'redux';

const initialState = {
  userStats: {
    name: 'loading...',
    email: 'loading...',
    tickets: 'loading...',
    diamonds: 'loading...',
    loading: false,
  },
}

const userStatsAPI: Reducer.Reducer = (state = initialState, action: any) => {

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
    default:
      return state;
  }
};

export default userStatsAPI;

  // if(!~action.type.indexOf('_PENDING')) {
  //   return {
  //     ...state,
  //     loading: true,
  //   }
  // }
  // console.log('reducer', action);