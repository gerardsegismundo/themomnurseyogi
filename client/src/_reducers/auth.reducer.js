import { FETCH_USER } from '../_actions/types'

const initialState = {}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_USER:
      return payload || false
    default:
      return state
  }
}
