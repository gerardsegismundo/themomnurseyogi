import React, { useState, useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import {
  formatDate,
  useOnKeyDownEnter,
  useOutsideAndEscapeClick
} from '../../helpers/func'
import { openSignInModal, openDeleteModal } from '../../redux/ui/ui.actions'
import { loadComments, updateComment } from '../../redux/comment/comment.action'

import CommentForm from '../common/CommentForm'

const Comments = ({
  currentUser,
  post: { _id: postId },
  comments,
  openDeleteModal,
  loadComments,
  updateComment
}) => {
  const [editedComment, setEditedComment] = useState({ comment: '', _id: '' })
  const [isEditingComment, setIsEditingComment] = useState(false)
  const editedCommentTextarea = useRef()

  useEffect(() => {
    loadComments(postId)
    //eslint-disable-next-line
  }, [postId])

  const handleEditComment = ({ comment, _id }) => {
    setIsEditingComment(true)
    setEditedComment({ comment, _id })
  }

  const exitEditComment = () => {
    setIsEditingComment(false)
    setEditedComment({ comment: '', _id: '' })
  }

  const saveEditComment = () => {
    updateComment(editedComment)
    exitEditComment()
  }

  useOnKeyDownEnter('edited-comment', saveEditComment)
  useOutsideAndEscapeClick(
    editedCommentTextarea,
    isEditingComment,
    exitEditComment
  )

  return (
    <div className='comments'>
      <div className='comments__heading row mb-5'>
        <h2 className='col'>Comments</h2>
        <p className='col text-right'>{comments && comments.length} comments</p>
      </div>

      <ul>
        {comments &&
          comments.map(item => {
            const { _id, uid, displayName, photoURL, comment, date } = item

            return (
              <li className='comment d-flex' key={_id}>
                <img
                  src={photoURL}
                  alt='user'
                  className='comment__author-avatar'
                />

                <div className='comment__right-col'>
                  {editedComment._id !== _id && (
                    <>
                      <h4 className='comment__label'>
                        {displayName} &nbsp;&nbsp;|&nbsp;&nbsp;{' '}
                        {formatDate(date)}
                      </h4>
                      <p className='comment__msg'>{comment}</p>
                    </>
                  )}

                  {currentUser && uid === currentUser.id && (
                    <div className='comment__crud'>
                      {!isEditingComment || editedComment._id !== _id ? (
                        <>
                          <span
                            className='hidden'
                            onClick={() => handleEditComment({ comment, _id })}
                          >
                            edit
                          </span>
                          <span
                            className='hidden'
                            onClick={() => openDeleteModal(_id)}
                          >
                            delete
                          </span>
                        </>
                      ) : (
                        <>
                          <textarea
                            onChange={e => {
                              setEditedComment({
                                _id,
                                comment: e.target.value
                              })
                            }}
                            ref={editedCommentTextarea}
                            id='edited-comment'
                            name='edited-comment'
                            value={editedComment.comment}
                            className='form-control'
                            placeholder='Write a comment...'
                            required
                          ></textarea>

                          <span onClick={exitEditComment}>cancel</span>
                          <span onClick={saveEditComment}>save</span>
                        </>
                      )}
                    </div>
                  )}
                </div>
              </li>
            )
          })}
      </ul>

      <CommentForm />
    </div>
  )
}

const mapStateToProps = ({
  user: { currentUser },
  posts: { post },
  comments: { comments }
}) => ({
  currentUser,
  post,
  comments
})

export default connect(mapStateToProps, {
  openSignInModal,
  loadComments,
  openDeleteModal,
  updateComment
})(Comments)
