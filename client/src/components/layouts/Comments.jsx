import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { formatDate } from '../../helpers/func'
import { openSignInModal, openDeleteModal } from '../../redux/ui/ui.actions'
import { loadComments } from '../../redux/comment/comment.action'

import CommentForm from '../common/CommentForm'

const Comments = ({
  currentUser,
  post: { _id: postId },
  loadComments,
  comments,
  openDeleteModal
}) => {
  const [editComment, setEditComment] = useState('')
  const [isEditingComment, setIsEditingComment] = useState(true)
  // eslint-disable-next-line
  const [editCommentData, setEditCommentData] = useState('')

  useEffect(() => {
    loadComments(postId)
    //eslint-disable-next-line
  }, [postId])

  const handleEditComment = comment => {
    setIsEditingComment(true)
    setEditComment(comment)
  }

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
                  <h4 className='comment__label'>
                    {displayName} &nbsp;&nbsp;|&nbsp;&nbsp; {formatDate(date)}
                  </h4>

                  {currentUser && uid === currentUser.id && (
                    <div className='comment__crud'>
                      {!isEditingComment ? (
                        <>
                          <p className='comment__msg'>{comment}</p>
                          <span onClick={() => handleEditComment(comment)}>
                            edit
                          </span>
                          <span onClick={() => openDeleteModal(_id)}>
                            delete
                          </span>
                        </>
                      ) : (
                        <>
                          <textarea
                            onChange={e => {
                              setEditComment(e.target.value)
                            }}
                            name='comment'
                            value={editComment}
                            className='form-control'
                          ></textarea>

                          <span onClick={() => setIsEditingComment(false)}>
                            cancel
                          </span>
                          <span onClick={() => openDeleteModal(_id)}>save</span>
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

export default connect(
  mapStateToProps,
  { openSignInModal, loadComments, openDeleteModal }
)(Comments)
