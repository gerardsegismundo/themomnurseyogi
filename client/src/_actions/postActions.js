import { GET_POSTS } from './types'
import axios from 'axios'

// Get all posts from server
export const getPosts = () => async dispatch => {
  const res = await axios.get('api/posts')

  // console.log(res.data)

  dispatch({
    type: GET_POSTS,
    payload: res.data
  })
}
