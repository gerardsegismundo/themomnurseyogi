import { GET_POSTS } from '../_actions/types'

const initialState = {
  posts: null,
  loading: false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        loading: false,
        posts: payload
      }

    default:
      return state
  }
}
