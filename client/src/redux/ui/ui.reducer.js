import {
  CLOSE_SEARCH,
  TOGGLE_SEARCH,
  OPEN_SIGNIN_MODAL,
  CLOSE_SIGNIN_MODAL,
  OPEN_DELETE_MODAL,
  CLOSE_DELETE_MODAL,
  OPEN_USER_MENU,
  CLOSE_USER_MENU,
  ENABLE_STICKY,
  DISABLE_STICKY,
  TOGGLE_SMALL_SEARCHBAR
} from './ui.types'

const initialState = {
  searchbarIsActive: false,
  userMenuIsOpen: false,
  signInModalIsOpen: false,
  deleteModalIsOpen: false,
  deleteModalId: '',
  isSticky: false,
  smallSearchbarIsOpen: false
}

const uiReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TOGGLE_SEARCH:
      return {
        ...state,
        searchbarIsActive: payload
      }
    case TOGGLE_SMALL_SEARCHBAR:
      return {
        ...state,
        smallSearchbarIsOpen: !state.smallSearchbarIsOpen
      }
    case CLOSE_SEARCH:
      return {
        ...state,
        seachIsOpen: false
      }
    case OPEN_SIGNIN_MODAL:
      return {
        ...state,
        signInModalIsOpen: true,
        isSticky: false
      }
    case CLOSE_SIGNIN_MODAL:
      return {
        ...state,
        signInModalIsOpen: false
      }
    case OPEN_DELETE_MODAL:
      return {
        ...state,
        deleteModalIsOpen: true,
        deleteModalId: payload
      }
    case CLOSE_DELETE_MODAL:
      return {
        ...state,
        deleteModalIsOpen: false
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
    case ENABLE_STICKY:
      return {
        ...state,
        isSticky: true
      }
    case DISABLE_STICKY:
      return {
        ...state,
        isSticky: false
      }

    default:
      return state
  }
}

export default uiReducer
