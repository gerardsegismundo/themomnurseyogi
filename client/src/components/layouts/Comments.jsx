import React from 'react'
import { connect } from 'react-redux'

import { openSignInModal, openDeleteModal } from '../../redux/ui/ui.actions'

import CommentForm from '../common/CommentForm'
import Comment from './Comment'

const Comments = ({ comments, postId }) => {
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
              comments.map(props => (
                <Comment {...props} postId={postId} key={props._id} />
              ))}
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
  openSignInModal,
  openDeleteModal
})(Comments)
