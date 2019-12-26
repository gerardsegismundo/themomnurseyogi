import React, { useState, useRef } from 'react'
import { connect } from 'react-redux'
import {
  formatDate,
  useOnKeyDownEnter,
  useOutsideAndEscapeClick
} from '../../helpers/func'
import { openSignInModal, openDeleteModal } from '../../redux/ui/ui.actions'

import CommentForm from '../common/CommentForm'

const Comments = ({
  currentUser,
  comments,
  openDeleteModal,
  updateComment
}) => {
  const [editedComment, setEditedComment] = useState({ text: '', _id: '' })
  const [isEditingComment, setIsEditingComment] = useState(false)
  const editedCommentTextarea = useRef()

  const handleEditComment = ({ text, _id }) => {
    setIsEditingComment(true)
    setEditedComment({ text, _id })
  }

  const exitEditComment = () => {
    setIsEditingComment(false)
    setEditedComment({ text: '', _id: '' })
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
            const { _id, user, name, avatar, text, date } = item

            return (
              <li className='comment d-flex' key={_id}>
                <img
                  src={avatar}
                  alt='user'
                  className='comment__author-avatar'
                />

                <div className='comment__right-col'>
                  {editedComment._id !== _id && (
                    <>
                      <h4 className='comment__label'>
                        {name} &nbsp;&nbsp;|&nbsp;&nbsp; {formatDate(date)}
                      </h4>

                      <p className='comment__msg'>{text}</p>
                    </>
                  )}

                  {currentUser && user === currentUser.id && (
                    <div className='comment__crud'>
                      {!isEditingComment || editedComment._id !== _id ? (
                        <>
                          <span
                            className='hidden'
                            onClick={() => handleEditComment({ text, _id })}
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
                                text: e.target.value
                              })
                            }}
                            ref={editedCommentTextarea}
                            id='edited-comment'
                            name='edited-comment'
                            value={editedComment.text}
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

const mapStateToProps = ({ user, posts }) => ({
  currentUser: user.currentUser,
  comments: posts.post.comments
})

export default connect(mapStateToProps, {
  openSignInModal,
  openDeleteModal
})(Comments)
