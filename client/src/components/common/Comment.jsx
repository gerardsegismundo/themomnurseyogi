import React, { useState, useRef } from 'react'
import { connect } from 'react-redux'
import { updateComment } from '../../redux/post/post.actions'
import { openDeleteModal } from '../../redux/ui/ui.actions'

import { useOnKeyDownEnter, useEscapeClick } from '../../utils/hooks'

import { formatDate } from '../../utils/helpers'

const Comment = props => {
  const { _id, user, name, avatar, text, date } = props
  const { postId, currentUser, openDeleteModal, updateComment } = props

  const [commentEdit, setCommentEdit] = useState({ text: '', _id: '' })

  const handleOnChange = e => {
    setCommentEdit({ text: e.target.value, _id })
  }

  const [isEditingComment, setIsEditingComment] = useState(false)
  const textAreaRef = useRef()

  const handleDeleteComment = () => {
    const params = {
      post_id: postId,
      comment_id: _id,
      user_id: currentUser.id
    }

    openDeleteModal(params)
  }

  const handleEditComment = () => {
    setIsEditingComment(true)
    setCommentEdit({ text, _id })
  }

  const handleCancel = () => {
    setIsEditingComment(false)
    setCommentEdit({ text: '', _id: '' })
  }

  const handleSave = () => {
    const params = {
      post_id: postId,
      comment_id: commentEdit._id,
      user_id: currentUser.id
    }

    updateComment(commentEdit.text, params)
    handleCancel()
  }

  useOnKeyDownEnter('comment-edit', handleSave)
  useEscapeClick(isEditingComment, handleCancel)

  return (
    <li className='comment d-flex' key={_id}>
      <img src={avatar} alt='user' className='comment__author-avatar' />

      <div className='comment__right-col'>
        {commentEdit._id !== _id && (
          <>
            <h4 className='comment__label'>
              {name} &nbsp;&nbsp;|&nbsp;&nbsp; {formatDate(date)}
            </h4>

            <p className='comment__msg'>{text}</p>
          </>
        )}

        {currentUser && user === currentUser.id && (
          <div className='comment__crud'>
            {!isEditingComment || commentEdit._id !== _id ? (
              <>
                <span className='hidden' onClick={handleEditComment}>
                  edit
                </span>
                <span className='hidden' onClick={handleDeleteComment}>
                  delete
                </span>
              </>
            ) : (
              <>
                <textarea
                  onChange={handleOnChange}
                  ref={textAreaRef}
                  id='comment-edit'
                  name='comment-edit'
                  value={commentEdit.text}
                  className='form-control'
                  placeholder='Write a comment...'
                  required
                ></textarea>

                <span onClick={handleCancel}>cancel</span>
                <span onClick={handleSave}>save</span>
              </>
            )}
          </div>
        )}
      </div>
    </li>
  )
}

const mapStateToProps = ({ user, posts }) => ({
  currentUser: user.currentUser,
  comments: posts.post.comments
})

export default connect(mapStateToProps, {
  updateComment,
  openDeleteModal
})(Comment)
