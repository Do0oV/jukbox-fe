// import all reducers
import { combineReducers } from 'redux';
import userStatsAPI from './userStatsAPI';
import searchResultsAPI from './searchResultsAPI';
import addSongToQueueAPI from './addSongToQueueAPI';
import setAccessToken from './setAccessToken';
import loginReducer from './loginReducer';


const allReducers = combineReducers({
  userStatsReducer: userStatsAPI,
  searchResultsReducer: searchResultsAPI,
  addSongToQueueReducer: addSongToQueueAPI,
  access_token: setAccessToken,
  isLoggedIn: loginReducer
})

export default allReducers;