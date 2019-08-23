import { CLOSE_SEARCH } from './types'

export const closeSearch = () => dispatch => {
  dispatch({
    type: CLOSE_SEARCH
  })
}
