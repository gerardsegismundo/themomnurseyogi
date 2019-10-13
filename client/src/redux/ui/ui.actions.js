import {
  CLOSE_SEARCH,
  TOGGLE_SEARCH,
  CLOSE_MODAL,
  OPEN_MODAL
} from './ui.types'

export const toggleSearch = payload => dispatch => {
  dispatch({ type: TOGGLE_SEARCH, payload })
}

export const closeSearch = () => dispatch => {
  dispatch({ type: CLOSE_SEARCH })
}

export const openModal = () => dispatch => {
  document.body.style.overflow = 'hidden'
  dispatch({ type: OPEN_MODAL })
}

export const closeModal = () => dispatch => {
  document.body.style.overflow = 'initial'
  document.body.style.overflowX = 'hidden'
  dispatch({ type: CLOSE_MODAL })
}
