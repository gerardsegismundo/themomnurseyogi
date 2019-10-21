import React, { useState, useEffect } from 'react'
import { auth } from '../../firebase/firebase.utils'
import { connect } from 'react-redux'
import { submitReply } from '../../redux/post/post.actions'
import { formatDate } from '../../helpers/func'

const Comments = ({
  currentUser,
  post: { comments, _id: postId },
  submitReply
}) => {
  const [reply, setReply] = useState('')

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown, false)

    return () => {
      document.removeEventListener('keydown', onKeyDown, false)
    }
  })

  const onKeyDown = e => {
    if (e.key === 'Enter' && document.activeElement.id === 'textarea-reply') {
      handleSubmitReply(e)
    }
  }

  const handleSubmitReply = e => {
    e.preventDefault()

    const payload = {
      postId,
      uid: currentUser.id,
      displayName: currentUser.displayName,
      photoURL: currentUser.photoURL,
      comment: reply
    }

    comments.push({
      displayName: currentUser.displayName,
      photoURL: currentUser.photoURL,
      comment: reply,
      date: Date.now()
    })

    submitReply(payload)
    setReply('')
  }

  return (
    <div className='comments'>
      <div className='comments__heading row mb-5'>
        <h2 className='col'>Comments</h2>
        <p className='col text-right'>{comments.length} comments</p>
      </div>

      <ul>
        {comments &&
          comments.map(({ displayName, photoURL, comment, date }, index) => (
            <li className='comment d-flex' key={date + index}>
              <img
                src={photoURL}
                alt='user'
                className='comment__author-avatar'
              />

              <div>
                <h4 className='comment__label'>
                  {displayName} &nbsp;&nbsp;|&nbsp;&nbsp; {formatDate(date)}
                </h4>
                <p className='comment__msg'>{comment}</p>
              </div>
            </li>
          ))}
      </ul>
      <div className='comments__reply'>
        <h2 className='comments__reply--heading'>Leave a reply</h2>

        {currentUser ? (
          <form
            onSubmit={e => handleSubmitReply(e)}
            className='comments__reply--form'
          >
            <div>
              <img
                src={currentUser && auth.currentUser.photoURL}
                alt='current-user'
              />
              <textarea
                onChange={e => {
                  setReply(e.target.value)
                }}
                id='textarea-reply'
                value={reply}
                type='text'
                placeholder='Write a comment...'
                className='form-control col'
                rows='4'
              />
            </div>

            <button className='btn-primary btn-xl'>Publish</button>
          </form>
        ) : (
          <p>You must be logged in to comment.</p>
        )}
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  post: state.posts.post
})

export default connect(
  mapStateToProps,
  { submitReply }
)(Comments)
