// import all reducers
import { combineReducers } from 'redux';
import api from './api'

const allReducers = combineReducers({
  API: api
})

export default allReducers;