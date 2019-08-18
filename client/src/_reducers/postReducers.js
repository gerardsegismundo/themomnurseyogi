import { GET_POSTS, GET_POST } from '../_actions/types'

const initialState = {
  posts: null,
  randomPosts: null,
  randomPostsA: null,
  randomPostsB: null,
  post: null,
  loading: false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_POST:
      return {
        ...state,
        loading: false,
        post: state.posts && state.posts.find(post => post._id === payload)
      }
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
