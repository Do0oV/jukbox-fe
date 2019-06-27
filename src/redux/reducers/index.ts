// import all reducers
import { combineReducers } from 'redux';
import userStatsAPI from './userStatsAPI'
import searchResultsAPI from './searchResultsAPI'
import addSongToQueueAPI from './addSongToQueueAPI'

const allReducers = combineReducers({
  userStatsReducer : userStatsAPI,
  searchResultsReducer : searchResultsAPI,
  addSongToQueueReducer : addSongToQueueAPI
})

export default allReducers;