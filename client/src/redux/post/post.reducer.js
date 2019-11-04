import {
  GET_POST,
  GET_POSTS,
  SEARCH_POST,
  FILTER_POSTS,
  CLEAR_SEARCH
} from './post.types'

const initialState = {
  posts: null,
  post: null,
  searchResult: null,
  filteredPosts: {
    recent: null,
    random: null,
    otherRandom: null
  },
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

    case FILTER_POSTS: {
      console.log(payload)
      return {
        ...state,
        filteredPosts: payload
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
