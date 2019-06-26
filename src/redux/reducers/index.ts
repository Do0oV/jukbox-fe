// import all reducers
import { combineReducers } from 'redux';
import apiReducer from './api'

const allReducers = combineReducers({
  api: apiReducer
})

export default allReducers;