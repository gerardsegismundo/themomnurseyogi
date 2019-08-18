import { GET_POSTS, GET_POST } from './types'
import axios from 'axios'

export const getPost = id => async dispatch => {
  dispatch({
    type: GET_POST,
    payload: id
  })
}

export const getPosts = () => async dispatch => {
  try {
    const res = await axios.get('api/posts')
    dispatch({
      type: GET_POSTS,
      payload: res.data
    })
  } catch (err) {
    console.log(err)
  }
}
