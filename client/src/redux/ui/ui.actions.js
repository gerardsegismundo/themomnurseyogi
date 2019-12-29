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
  DISABLE_STICKY,
  TOGGLE_SMALL_SEARCHBAR
} from './ui.types'

const hideScrollBar = (isHidden = true) => {
  if (isHidden) return (document.documentElement.style.overflowY = 'hidden')
  document.documentElement.style.overflowY = 'auto'
}

export const toggleSmallSearchbar = smallSearchbarIsOpen => dispatch => {
  // toggles window scrollbar
  hideScrollBar(!smallSearchbarIsOpen)
  dispatch({ type: TOGGLE_SMALL_SEARCHBAR })
}

export const enableSticky = () => dispatch =>
  dispatch({
    type: ENABLE_STICKY
  })

export const disableSticky = () => dispatch =>
  dispatch({ type: DISABLE_STICKY })

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

export const openDeleteModal = params => dispatch => {
  hideScrollBar()
  dispatch({ type: OPEN_DELETE_MODAL, payload: params })
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
