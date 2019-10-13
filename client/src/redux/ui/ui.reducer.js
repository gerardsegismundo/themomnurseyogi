import {
  CLOSE_SEARCH,
  TOGGLE_SEARCH,
  OPEN_MODAL,
  CLOSE_MODAL
} from './ui.types'

const initialState = {
  searchbarIsActive: false,
  modalIsOpen: false
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
    case OPEN_MODAL:
      return {
        ...state,
        modalIsOpen: true
      }
    case CLOSE_MODAL:
      return {
        ...state,
        modalIsOpen: false
      }
    default:
      return state
  }
}

export default uiReducer
