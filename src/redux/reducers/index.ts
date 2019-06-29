// import all reducers
import { combineReducers } from 'redux';
import user from './user';
import searchResults from './searchResults';
import playlist from './playlist';
import player from './player';

const allReducers = combineReducers({
  user: user,
  searchResults: searchResults,
  playlist: playlist,
  player : player
})

export default allReducers;