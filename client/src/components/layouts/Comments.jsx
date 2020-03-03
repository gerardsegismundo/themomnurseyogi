import React, { useState, useRef } from 'react'
import { connect } from 'react-redux'
import { useOnKeyDownEnter, useEscapeClick } from '../../helpers/func'
import { openSignInModal, openDeleteModal } from '../../redux/ui/ui.actions'

import { updateComment } from '../../redux/post/post.actions'

import CommentForm from '../common/CommentForm'
import Comment from './Comment'

const Comments = ({
  postId,
  currentUser,
  comments,
  openDeleteModal,
  updateComment
}) => {
  const [editedComment, setEditedComment] = useState({ text: '', _id: '' })
  const [isEditingComment, setIsEditingComment] = useState(false)
  const editedCommentTextarea = useRef()

  const handleDeleteComment = commentId => {
    const params = {
      post_id: postId,
      comment_id: commentId,
      user_id: currentUser.id
    }
    openDeleteModal(params)
  }

  const handleEditComment = ({ text, _id }) => {
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

    const { text } = editedComment

    updateComment(text, params)
    exitEditComment()
  }

  useOnKeyDownEnter('edited-comment', saveEditComment)
  useEscapeClick(isEditingComment, exitEditComment)

  return (
    <div
      className={`comments${
        comments.length >= 1 ? ' mt-6' : ' border-top-none'
      }`}
    >
      {comments.length >= 1 ? (
        <>
          <div className='comments__heading row mb-5'>
            <h2 className='col'>Comments</h2>
            <p className='col text-right'>
              {comments && comments.length} comments
            </p>
          </div>

          <ul>
            {comments &&
              comments.map(props => <Comment {...props} key={props._id} />)}
          </ul>
        </>
      ) : (
        <br />
      )}

      <CommentForm />
    </div>
  )
}

const mapStateToProps = ({ user, posts }) => ({
  currentUser: user.currentUser,
  comments: posts.post.comments
})

export default connect(mapStateToProps, {
  updateComment,
  openSignInModal,
  openDeleteModal
})(Comments)
