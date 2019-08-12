import { SAMPLE_TYPE } from '../_actions/types'

const initialState = {
  loading: false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SAMPLE_TYPE:
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
}
