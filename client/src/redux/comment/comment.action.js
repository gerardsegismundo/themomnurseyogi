import {
  LOAD_COMMENTS,
  SUBMIT_COMMENT,
  DELETE_COMMENT
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

export const submitComment = comment => async dispatch => {
  const res = await axios.post(API, comment)

  dispatch({
    type: SUBMIT_COMMENT,
    payload: res.data
  })
}

export const deleteComment = commentId => async dispatch => {
  axios.delete(`${API}/${commentId}`)

  dispatch({
    type: DELETE_COMMENT,
    payload: commentId
  })
}
