import { GET_RECENT_POSTS, GET_POST, SEARCH_POST } from './types'
import axios from 'axios'

export const getPost = id => async dispatch => {
  dispatch({
    type: GET_POST,
    payload: id
  })
}

export const getRecentPosts = () => async dispatch => {
  try {
    const res = await axios.get('api/posts/recent')
    dispatch({
      type: GET_RECENT_POSTS,
      payload: res.data
    })
  } catch (err) {
    console.log(err)
  }
}

export const searchPost = text => async dispatch => {
  dispatch({
    type: SEARCH_POST,
    payload: text
  })
}
