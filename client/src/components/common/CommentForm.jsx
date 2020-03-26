import React, { useState } from 'react'
import { auth } from '../../firebase/firebase.utils'
import { connect } from 'react-redux'
import { useOnKeyDownEnter } from '../../utils/hooks'
import { openSignInModal } from '../../redux/ui/ui.actions'
import { addComment } from '../../redux/post/post.actions'

const CommentForm = ({ currentUser, postId, openSignInModal, addComment }) => {
  const [newComment, setNewComment] = useState('')

  const handleAddComment = e => {
    e.preventDefault()

    const formData = {
      user: currentUser.id,
      name: currentUser.displayName,
      avatar: currentUser.photoURL,
      text: newComment
    }

    addComment(postId, formData)
    setNewComment('')
  }

  useOnKeyDownEnter('textarea-comment', handleAddComment)

  return (
    <div className='comments__reply'>
      <h2 className='comments__reply--heading'>Leave a Comment</h2>
      {currentUser ? (
        <form
          onSubmit={e => handleAddComment(e)}
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
              required
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

const mapStateToProps = ({ user, posts }) => ({
  currentUser: user.currentUser,
  postId: posts.post._id
})

export default connect(mapStateToProps, { openSignInModal, addComment })(
  CommentForm
)
