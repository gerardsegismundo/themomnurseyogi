import axios from 'axios'

import {
  GET_RECENT_POSTS,
  GET_POST,
  GET_POSTS,
  // eslint-disable-next-line
  SEARCH_POST,
  GET_POST_DB,
  GET_RANDOM_POSTS_A,
  GET_RANDOM_POSTS_B,
  CLEAR_SEARCH
} from './types'

export const getPost = id => dispatch => {
  dispatch({
    type: GET_POST,
    payload: id
  })
}

export const getPostDb = id => async dispatch => {
  try {
    const res = await axios.get(`/api/posts/${id}`)

    dispatch({
      type: GET_POST_DB,
      payload: res.data[0]
    })
  } catch (err) {
    console.log(err)
  }
}

export const getRandomPostsA = () => async dispatch => {
  dispatch({
    type: GET_RANDOM_POSTS_A
  })
}

export const getRandomPostsB = () => async dispatch => {
  dispatch({
    type: GET_RANDOM_POSTS_B
  })
}

export const getPosts = () => async dispatch => {
  try {
    const res = await axios.get(`/api/posts/recent`)
    dispatch({
      type: GET_POSTS,
      payload: res.data
    })
  } catch (err) {
    console.log(err)
  }
}

export const getRecentPosts = () => async dispatch => {
  try {
    const res = await axios.get(`/api/posts/recent`)
    dispatch({
      type: GET_RECENT_POSTS,
      payload: res.data
    })
  } catch (err) {
    console.log(err)
  }
}

export const searchPost = text => async dispatch => {
  try {
    const res = await axios.post('/api/posts/search-post', {
      text
    })

    dispatch({
      type: SEARCH_POST,
      payload: res.data
    })
  } catch (err) {
    console.log(err)
  }

  // dispatch({
  //   type: SEARCH_POST,
  //   payload: text
  // })
}

export const clearSearch = () => async dispatch => {
  dispatch({
    type: CLEAR_SEARCH
  })
}
