import { SET_CURRENT_USER } from './user.types'

const initialState = {
  currentUser: null
}

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload
      }

    default:
      return state
  }
}

export default userReducer
