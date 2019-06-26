// import all reducers
import { combineReducers } from 'redux';
import api from './api'

const allReducers = combineReducers({
  api
})

export default allReducers;