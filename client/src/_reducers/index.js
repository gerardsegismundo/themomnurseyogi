import { combineReducers } from 'redux'
import postReducers from './postReducers'
import uiReducers from './uiReducers'

export default combineReducers({
  ui: uiReducers,
  posts: postReducers
})
