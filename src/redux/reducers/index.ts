// import all reducers
import { combineReducers } from 'redux';
import login from './login'

const allReducers = combineReducers({
  isLoggedIn: login,
})

export default allReducers;