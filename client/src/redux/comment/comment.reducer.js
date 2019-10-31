import {
  ADD_COMMENT,
  LOAD_COMMENTS,
  DELETE_COMMENT,
  UPDATE_COMMENT
} from './comment.types'

const initialState = {
  comments: null
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_COMMENT:
      return {
        ...state,
        comments: [...state.comments, payload]
      }
    case LOAD_COMMENTS: {
      return {
        ...state,
        comments: payload
      }
    }
    case UPDATE_COMMENT: {
      return {
        ...state,
        comments: state.comments.map(comment =>
          comment._id === payload._id
            ? {
                ...comment,
                comment: payload.comment,
                date: Date.now()
              }
            : comment
        )
      }
    }
    case DELETE_COMMENT: {
      return {
        ...state,
        comments: [...state.comments].filter(({ _id }) => _id !== payload)
      }
    }
    default:
      return state
  }
}
