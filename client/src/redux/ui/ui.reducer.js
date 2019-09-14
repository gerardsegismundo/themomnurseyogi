import { CLOSE_SEARCH, TOGGLE_SEARCH } from './ui.types'

const initialState = {
  searchbarIsActive: false
}

const uiReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TOGGLE_SEARCH:
      return {
        ...state,
        searchbarIsActive: payload
      }
    case CLOSE_SEARCH:
      return {
        ...state,
        seachIsOpen: false
      }

    default:
      return state
  }
}

export default uiReducer
