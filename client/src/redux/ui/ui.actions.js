import {
  CLOSE_SEARCH,
  TOGGLE_SEARCH,
  CLOSE_SIGNIN_MODAL,
  OPEN_SIGNIN_MODAL,
  OPEN_USER_MENU,
  CLOSE_USER_MENU
} from './ui.types'

export const toggleSearch = payload => dispatch => {
  dispatch({ type: TOGGLE_SEARCH, payload })
}

export const closeSearch = () => dispatch => {
  dispatch({ type: CLOSE_SEARCH })
}

export const openSignInModal = () => dispatch => {
  document.body.style.overflow = 'hidden'
  dispatch({ type: OPEN_SIGNIN_MODAL })
}

export const closeSignInModal = () => dispatch => {
  document.body.style.overflow = 'initial'
  document.body.style.overflowX = 'hidden'
  dispatch({ type: CLOSE_SIGNIN_MODAL })
}

export const openUserMenu = () => dispatch => {
  dispatch({ type: OPEN_USER_MENU })
}

export const closeUserMenu = () => dispatch => {
  dispatch({ type: CLOSE_USER_MENU })
}
