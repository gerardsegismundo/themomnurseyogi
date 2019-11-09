import {
  CLOSE_SEARCH,
  TOGGLE_SEARCH,
  CLOSE_SIGNIN_MODAL,
  OPEN_SIGNIN_MODAL,
  OPEN_USER_MENU,
  CLOSE_USER_MENU,
  OPEN_DELETE_MODAL,
  CLOSE_DELETE_MODAL,
  ENABLE_STICKY,
  DISABLE_STICKY
} from './ui.types'

export const enableSticky = () => dispatch =>
  dispatch({
    type: ENABLE_STICKY
  })

export const disableSticky = () => dispatch =>
  dispatch({ type: DISABLE_STICKY })

const hideScrollBar = (isHidden = true) => {
  if (isHidden) return (document.body.style.overflow = 'hidden')
  document.body.style.overflow = 'initial'
  document.body.style.overflowX = 'hidden'
}

export const toggleSearch = payload => dispatch => {
  dispatch({ type: TOGGLE_SEARCH, payload })
}

export const closeSearch = () => dispatch => {
  dispatch({ type: CLOSE_SEARCH })
}

export const openSignInModal = () => dispatch => {
  hideScrollBar()
  dispatch({ type: OPEN_SIGNIN_MODAL })
}

export const closeSignInModal = () => dispatch => {
  hideScrollBar(false)
  dispatch({ type: CLOSE_SIGNIN_MODAL })
}

export const openDeleteModal = id => dispatch => {
  hideScrollBar()
  dispatch({ type: OPEN_DELETE_MODAL, payload: id })
}

export const closeDeleteModal = () => dispatch => {
  hideScrollBar(false)
  dispatch({ type: CLOSE_DELETE_MODAL })
}

export const openUserMenu = () => dispatch => {
  dispatch({ type: OPEN_USER_MENU })
}

export const closeUserMenu = () => dispatch => {
  dispatch({ type: CLOSE_USER_MENU })
}
