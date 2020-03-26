import React, { useState, useEffect } from 'react'
import Fade from 'react-reveal/Fade'
import { Link } from 'react-router-dom'
import { getPostLink, sliceParagraph } from '../../helpers/func'

import { connect } from 'react-redux'
import { likePost, unlikePost } from '../../redux/post/post.actions'
import { NotificationManager } from 'react-notifications'
import { openSignInModal } from '../../redux/ui/ui.actions'

const RecentPost = ({
  title,
  imgURL,
  hashtags,
  date,
  body,
  _id,
  comments,
  likes,
  currentUser,
  likePost,
  unlikePost,
  openSignInModal
}) => {
  const [isLiked, setIsLiked] = useState()
  const [likeCount, setLikeCount] = useState()

  const loadLikes = () => {
    if (!currentUser) return
    const likeIds = likes.map(like => like.user)

    if (likeIds.includes(currentUser.id)) return setIsLiked(true)
    setIsLiked(false)
  }

  useEffect(() => {
    loadLikes()
    setLikeCount(likes.length)

    // eslint-disable-next-line
  }, [currentUser])

  const handleOnLike = () => {
    if (!currentUser) {
      NotificationManager.error(
        'Must sign in to like a post.',
        'Account not signed in',
        2000
      )

      return openSignInModal()
    }

    likePost(_id, currentUser.id)
    setIsLiked(true)
    setLikeCount(likeCount + 1)
  }

  const handleOnUnlike = () => {
    unlikePost(_id, currentUser.id)
    setIsLiked(false)
    setLikeCount(likeCount - 1)
  }

  return (
    <Fade cascade>
      <div className='recent-post p-1'>
        <div className='text-center'>
          <p className='recent-post__date'>{date}</p>

          <h2 className='recent-post__title'>{title}</h2>
          {hashtags && (
            <p className='recent-post__hash-tags d-flex justify-content-center px-5'>
              {hashtags.map(hashtag => {
                return hashtag + ' '
              })}
            </p>
          )}
        </div>
        <img
          className='recent-post__img mb-5 d-flex mx-auto'
          src={imgURL}
          alt={title + 'photo'}
        />
        <p className='recent-post__body'>{sliceParagraph(body)}</p>
        <div className='d-flex'>
          <Link
            to={getPostLink(title, _id)}
            className='recent-post__read-more btn-primary btn-xl align-content-center mb-2'
          >
            Read more
          </Link>

          <div className='recent-post__icons'>
            <span
              className='recent-post__icons--likes'
              onClick={isLiked ? handleOnUnlike : handleOnLike}
            >
              <i className={`fa fa-heart${isLiked ? '' : '-o'}`} />
              {likeCount}
              <span className='d-none d-sm-inline'>
                &nbsp;like{likeCount < 2 ? '' : 's'}
              </span>
            </span>
            <span className='recent-post__icons--comments'>
              <i className='fa fa-comment-o' />
              {comments.length}
              <span className='d-none d-sm-inline'>
                &nbsp;comment{comments.length < 2 ? '' : 's'}
              </span>
            </span>
          </div>
        </div>
      </div>
    </Fade>
  )
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

export default connect(mapStateToProps, {
  openSignInModal,
  likePost,
  unlikePost
})(RecentPost)
