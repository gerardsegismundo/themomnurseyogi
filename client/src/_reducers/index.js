import { combineReducers } from 'redux'
import postReducer from './post.reducer'
import uiReducer from './ui.reducer'
import authReducer from './auth.reducer'

export default combineReducers({
  ui: uiReducer,
  posts: postReducer,
  auth: authReducer
})
