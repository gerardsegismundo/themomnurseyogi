import {
  GET_POST,
  GET_POSTS,
  GET_RECENT_POSTS,
  GET_RANDOM_POSTS,
  SEARCH_POST,
  CLEAR_SEARCH,
  GET_OTHER_RANDOM_POSTS
} from './post.types'

const initialState = {
  posts: null,
  post: null,
  searchResult: null,
  recentPosts: null,
  randomPosts: null,
  otherRandomPosts: null,
  loading: false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_POST:
      return {
        ...state,
        loading: false,
        post: payload
      }

    case GET_POSTS: {
      return {
        ...state,
        loading: false,
        posts: payload
      }
    }

    case GET_RECENT_POSTS:
      return {
        ...state,
        loading: false,
        recentPosts: payload
      }

    case GET_RANDOM_POSTS:
      return {
        ...state,
        loading: false,
        randomPosts: payload
      }

    case GET_OTHER_RANDOM_POSTS: {
      return {
        ...state,
        loading: false,
        otherRandomPosts: payload
      }
    }

    case SEARCH_POST:
      return {
        ...state,
        loading: false,
        searchResult: payload
      }

    case CLEAR_SEARCH:
      return {
        ...state,
        loading: false,
        searchResult: null
      }

    default:
      return state
  }
}
