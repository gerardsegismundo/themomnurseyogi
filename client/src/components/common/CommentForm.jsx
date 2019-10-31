import React, { useState } from 'react'
import { auth } from '../../firebase/firebase.utils'
import { connect } from 'react-redux'
import { useOnKeyDownEnter } from '../../helpers/func'
import { openSignInModal } from '../../redux/ui/ui.actions'
import { submitComment } from '../../redux/comment/comment.action'

const CommentForm = ({
  currentUser,
  post: { _id: postId },
  openSignInModal,
  submitComment
}) => {
  const [newComment, setNewComment] = useState('')

  const handleSubmitComment = e => {
    e.preventDefault()

    const payload = {
      postId,
      uid: currentUser.id,
      displayName: currentUser.displayName,
      photoURL: currentUser.photoURL,
      comment: newComment
    }

    submitComment(payload)
    setNewComment('')
  }

  useOnKeyDownEnter('textarea-comment', handleSubmitComment)

  return (
    <div className='comments__reply'>
      <h2 className='comments__reply--heading'>Leave a Comment</h2>
      {currentUser ? (
        <form
          onSubmit={e => handleSubmitComment(e)}
          className='comments__reply--form'
        >
          <div>
            <img
              src={currentUser && auth.currentUser.photoURL}
              alt='current-user'
            />
            <textarea
              onChange={e => setNewComment(e.target.value)}
              id='textarea-comment'
              value={newComment}
              type='text'
              placeholder='Write a comment...'
              className='form-control col'
              rows='4'
            />
          </div>

          <button className='btn-primary btn-xl'>Publish</button>
        </form>
      ) : (
        <p className='comments__reply--requiremsg'>
          You must{' '}
          <span onClick={openSignInModal} className='sign-in'>
            sign in
          </span>{' '}
          in to comment.
        </p>
      )}
    </div>
  )
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  post: state.posts.post
})

export default connect(
  mapStateToProps,
  { openSignInModal, submitComment }
)(CommentForm)
