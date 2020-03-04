import React, { useState, useRef } from 'react'
import { connect } from 'react-redux'
import { updateComment } from '../../redux/post/post.actions'
import { openDeleteModal } from '../../redux/ui/ui.actions'

import { useOnKeyDownEnter, useEscapeClick } from '../../helpers/func'

const Comment = props => {
  const { _id, user, name, avatar, text, date } = props
  const { postId, currentUser, openDeleteModal, updateComment } = props

  console.log(props)

  const [editedComment, setEditedComment] = useState({ text: '', _id: '' })

  const setEditedCommentHandler = e => {
    setEditedComment({ text: e.target.value, _id })
  }

  const [isEditingComment, setIsEditingComment] = useState(false)
  const editedCommentTextarea = useRef()

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
    setEditedComment({ text, _id })
  }

  const exitEditComment = () => {
    setIsEditingComment(false)
    setEditedComment({ text: '', _id: '' })
  }

  const saveEditComment = () => {
    const params = {
      post_id: postId,
      comment_id: editedComment._id,
      user_id: currentUser.id
    }

    updateComment(editedComment.text, params)
    exitEditComment()
  }

  useOnKeyDownEnter('edited-comment', saveEditComment)
  useEscapeClick(isEditingComment, exitEditComment)

  return (
    <li className='comment d-flex' key={_id}>
      <img src={avatar} alt='user' className='comment__author-avatar' />

      <div className='comment__right-col'>
        {editedComment._id !== _id && (
          <>
            <h4 className='comment__label'>
              {name} &nbsp;&nbsp;|&nbsp;&nbsp; {date}
            </h4>

            <p className='comment__msg'>{text}</p>
          </>
        )}

        {currentUser && user === currentUser.id && (
          <div className='comment__crud'>
            {!isEditingComment || editedComment._id !== _id ? (
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
                  onChange={setEditedCommentHandler}
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
}

const mapStateToProps = ({ user, posts }) => ({
  currentUser: user.currentUser,
  comments: posts.post.comments
})

export default connect(mapStateToProps, {
  updateComment,
  openDeleteModal
})(Comment)
