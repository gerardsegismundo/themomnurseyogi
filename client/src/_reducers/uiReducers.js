import { CLOSE_SEARCH, CLOSE_BURGER } from '../_actions/types'

const initialState = {
  burgerIsOpen: false,
  searchIsOpen: false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CLOSE_SEARCH:
      return {
        ...state,
        searchIsOpen: false
      }
    case CLOSE_BURGER:
      return {
        ...state,
        burgerIsOpen: false
      }
    default:
      return state
  }
}
