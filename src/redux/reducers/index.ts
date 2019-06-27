// import all reducers
import { combineReducers } from 'redux';
import userStatsAPI from './userStatsAPI';
import searchResultsAPI from './searchResultsAPI';
import addSongToQueueAPI from './addSongToQueueAPI';
import setAccessToken from './setAccessToken';
import loginReducer from './loginReducer';
import setCurrentSong from './setCurrentSong';
import setSongPosition from './setSongPosition';
import isLockedReducer from './isLockedReducer';

const allReducers = combineReducers({
  userStatsReducer: userStatsAPI,
  searchResultsReducer: searchResultsAPI,
  addSongToQueueReducer: addSongToQueueAPI,
  access_token: setAccessToken,
  isLoggedIn: loginReducer,
  current_song: setCurrentSong,
  position: setSongPosition,
  isLocked: isLockedReducer
})

export default allReducers;