import {
  GET_POST,
  GET_POSTS,
  SEARCH_POST,
  FILTER_POSTS,
  CLEAR_SEARCH,
  CHANGE_OTHER_POSTS
} from './post.types'

const initialState = {
  post: null,
  posts: null,
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

    case CHANGE_OTHER_POSTS: {
      return {
        ...state,
        randomPosts: payload
      }
    }

    case FILTER_POSTS: {
      const { recentPosts, randomPosts, otherRandomPosts } = payload
      return {
        ...state,
        recentPosts,
        randomPosts,
        otherRandomPosts
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
