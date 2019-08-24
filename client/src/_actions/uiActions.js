import { CLOSE_SEARCH, TOGGLE_SEARCH } from './types'

export const toggleSearch = payload => dispatch => {
  dispatch({ type: TOGGLE_SEARCH, payload })
}

export const closeSearch = () => dispatch => {
  dispatch({ type: CLOSE_SEARCH })
}
