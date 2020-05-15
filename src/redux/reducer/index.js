import { combineReducers } from 'redux'
import auth from './auth/auth'
import homeStore from './home/home'

export default combineReducers({
  auth,
  homeStore,
})