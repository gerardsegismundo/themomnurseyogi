import {
  LOAD_COMMENTS,
  ADD_COMMENT,
  DELETE_COMMENT,
  UPDATE_COMMENT
} from '../comment/comment.types'
import axios from 'axios'
const API = '/api/comments'

export const loadComments = postId => async dispatch => {
  const res = await axios.get(`${API}/${postId}`)

  dispatch({
    type: LOAD_COMMENTS,
    payload: res.data
  })
}

export const addComment = comment => async dispatch => {
  const res = await axios.post(API, comment)

  dispatch({
    type: ADD_COMMENT,
    payload: res.data
  })
}

export const updateComment = comment => async dispatch => {
  axios.patch(API, comment)

  dispatch({
    type: UPDATE_COMMENT,
    payload: comment
  })
}

export const deleteComment = commentId => async dispatch => {
  axios.delete(`${API}/${commentId}`)

  dispatch({
    type: DELETE_COMMENT,
    payload: commentId
  })
}
