import {
  GET_POST,
  GET_POSTS,
  SEARCH_POST,
  FILTER_POSTS,
  CLEAR_SEARCH,
  CHANGE_OTHER_POSTS,
  UPDATE_LIKES,
  ADD_COMMENT,
  REMOVE_COMMENT,
  UPDATE_COMMENT,
  POST_ERROR,
  GET_PAGE_ITEMS,
  CHANGE_INDEX,
  PREV_INDEX,
  NEXT_INDEX
} from './post.types'

// const getActiveItems = () => {
//   for (index == activeIndex - 1;  index <= activeIndex - 1 + numberOfItems; index++) {
//     pageItems.push(posts[index])
//   }

// }

const initialState = {
  post: null,
  posts: [],
  searchResult: [],
  recentPosts: [],
  randomPosts: [],
  otherRandomPosts: [],
  error: {},
  pagination: {
    activeIndex: 1,
    paginationCount: 6,
    numberOfItems: 4,
    // posts
    /*
    starts at 
    +4

    index 

    for (index == activeIndex - 1,  index <= activeIndex - 1 + numberOfItems, index++) {
      pageItems.push(posts[index])
    }

    */
    pageItems: null
  }
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_POST:
      return {
        ...state,
        post: payload
      }

    case GET_POSTS: {
      return {
        ...state,

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
        searchResult: payload
      }

    case CLEAR_SEARCH:
      return {
        ...state,
        searchResult: null
      }

    case UPDATE_LIKES:
      return {
        ...state,
        posts: state.posts.map(post =>
          post._id === payload.id ? { ...post, likes: payload.likes } : post
        )
      }

    case ADD_COMMENT:
      return {
        ...state,
        post: {
          ...state.post,
          comments: [...state.post.comments, payload]
        }
      }

    case REMOVE_COMMENT:
      return {
        ...state,
        post: {
          ...state.post,
          comments: state.post.comments.filter(
            comment => comment._id !== payload
          )
        }
      }

    case UPDATE_COMMENT:
      const index = state.post.comments.findIndex(
        comment => comment._id === payload._id
      )

      return {
        ...state,
        ...(state.post.comments[index].text = payload.text),
        post: {
          ...state.post,
          comments: [...state.post.comments]
        }
      }

    case POST_ERROR:
      return {
        ...state,
        error: payload
      }

    case GET_PAGE_ITEMS: {
      return { ...state }
    }

    case CHANGE_INDEX:
      return {
        ...state,
        pagination: {
          paginationCount: state.pagination.paginationCount,
          activeIndex: payload
        }
      }

    case NEXT_INDEX: {
      const { activeIndex, paginationCount } = state.pagination

      return {
        ...state,
        pagination: {
          paginationCount,
          activeIndex: activeIndex + 1
        }
      }
    }

    case PREV_INDEX: {
      const { activeIndex, paginationCount } = state.pagination

      return {
        ...state,
        pagination: {
          paginationCount,
          activeIndex: activeIndex - 1
        }
      }
    }

    default:
      return state
  }
}
