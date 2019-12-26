import { combineReducers } from 'redux'

import postReducer from './post/post.reducer'
import uiReducer from './ui/ui.reducer'
import userReducer from './user/user.reducer'

export default combineReducers({
  ui: uiReducer,
  posts: postReducer,
  user: userReducer
})
