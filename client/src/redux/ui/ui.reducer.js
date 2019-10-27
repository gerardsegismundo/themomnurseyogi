import {
  CLOSE_SEARCH,
  TOGGLE_SEARCH,
  OPEN_SIGNIN_MODAL,
  CLOSE_SIGNIN_MODAL,
  OPEN_USER_MENU,
  CLOSE_USER_MENU
} from './ui.types'

const initialState = {
  searchbarIsActive: false,
  signInModalIsOpen: false,
  userMenuIsOpen: false
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
    case OPEN_SIGNIN_MODAL:
      return {
        ...state,
        signInModalIsOpen: true
      }
    case CLOSE_SIGNIN_MODAL:
      return {
        ...state,
        signInModalIsOpen: false
      }
    case OPEN_USER_MENU:
      return {
        ...state,
        userMenuIsOpen: true
      }
    case CLOSE_USER_MENU:
      return {
        ...state,
        userMenuIsOpen: false
      }

    default:
      return state
  }
}

export default uiReducer
