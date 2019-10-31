import { SUBMIT_COMMENT, LOAD_COMMENTS, DELETE_COMMENT } from './comment.types'

const initialState = {
  comments: null
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SUBMIT_COMMENT:
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
