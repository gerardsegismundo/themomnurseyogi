import {
  GET_RECENT_POSTS,
  GET_POST,
  GET_POST_DB,
  GET_RANDOM_POSTS_A,
  GET_RANDOM_POSTS_B,
  GET_POSTS,
  SEARCH_POST
} from '../_actions/types'

const initialState = {
  posts: null,
  recentPosts: null,
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
    case GET_POST_DB:
      return {
        ...state,
        loading: false,
        post: payload
      }

    case GET_RECENT_POSTS:
      return {
        ...state,
        loading: false,
        recentPosts: payload
      }
    case GET_POSTS:
      return {
        ...state,
        loading: false,
        posts: payload
      }

    // meantime only
    case GET_RANDOM_POSTS_A:
      return {
        ...state,
        loading: false,
        randomPostsA: state.posts
      }

    // meantime only
    case GET_RANDOM_POSTS_B:
      return {
        ...state,
        loading: false,
        randomPostsB: state.posts
      }

    case SEARCH_POST:
      return {
        ...state,
        loading: false,
        post: state.posts.find(post => post._title === payload)
      }

    default:
      return state
  }
}
