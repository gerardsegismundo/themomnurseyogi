import { CLOSE_SEARCH, TOGGLE_SEARCH } from '../_actions/types'

const initialState = {
  searchbarIsActive: false
}

export default (state = initialState, { type, payload }) => {
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
