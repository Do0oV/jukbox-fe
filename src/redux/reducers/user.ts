import Reducer from 'redux';

const initialState = {
  userProfile: {
    name: '',
    email: '',
    tickets: '',
    diamonds: '',
  },
  loading: false,
  accessToken: '',
  mySong: '',
}

const user: Reducer.Reducer = (state = initialState, action: any) => {

  switch (action.type) {
    case 'GET_USER_PROFILE_PENDING':
      return {
        ...state,
        loading: true,
      };
    case 'GET_USER_PROFILE_SUCCESS':
      return {
        ...state,
        userProfile: {
          name: action.data.name,
          email: action.data.email,
          tickets: action.data.tickets,
          diamonds: action.data.diamonds
        }
      };
    case 'GET_USER_PROFILE_FAILURE':
      return {
        ...state,
        error: 'cannot retreive user data'
      };
    case 'SET_ACCESS_TOKEN':
      return {
        ...state,
        accessToken: action.access_token,
      };
    case 'REMOVE_ACCESS_TOKEN':
      return {
        ...state,
        accessToken: '',
      };
    case 'ADD_SONG_TO_QUEUE_PENDING':
      return {
        ...state,
        loading: true,
      };
    case 'ADD_SONG_TO_QUEUE_SUCCESS':
      return {
        ...state,
        mySong: action.body.song.song_id,
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

export default user;

  // if(!~action.type.indexOf('_PENDING')) {
  //   return {
  //     ...state,
  //     loading: true,
  //   }
  // }