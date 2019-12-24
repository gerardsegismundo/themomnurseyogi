import React from 'react'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade'
import {
  getPostLink,
  formatDate,
  sliceParagraph,
  renderHashtags
} from '../../helpers/func'

import { connect } from 'react-redux'
import { likePost } from '../../redux/post/post.actions'

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
  likePost
}) => {
  const handleOnLike = () => {
    if (!currentUser) return console.log('You must be logged in')

    likePost(_id, currentUser.id)
  }

  const handleOnUnlike = () => {
    if (!currentUser) return console.log('You must be logged in')

    console.log('Unlike post!')
  }

  const isLiked = (() => {
    if (currentUser) {
      const likeIds = likes.map(like => like.user)
      if (likeIds.includes(currentUser.id)) return true
    }

    return false
  })()

  return (
    <Fade cascade>
      <div className='recent-post p-1'>
        <div className='text-center'>
          <p className='recent-post__date'>{formatDate(date)}</p>
          <h2 className='recent-post__title'>{title}</h2>
          {hashtags && (
            <ul className='recent-post__hash-tags d-flex justify-content-center px-5'>
              {renderHashtags(hashtags)}
            </ul>
          )}
        </div>
        <img
          className='recent-post__img mb-5 d-flex mx-auto'
          src={imgURL}
          alt={title + 'photo'}
        />
        <p className='recent-post__body'>{sliceParagraph(body)}</p>
        <div className='d-flex'>
          <Link to={getPostLink(title, _id)}>
            <button className='recent-post__read-more btn-primary btn-xl align-content-center mb-2'>
              Read more
            </button>
          </Link>

          <div className='recent-post__icons'>
            <span
              className='recent-post__icons--likes'
              onClick={isLiked ? handleOnUnlike : handleOnLike}
            >
              <i className={`fa fa-heart${isLiked ? '' : '-o'}`}></i>
              {likes.length}&nbsp;{likes.length < 2 ? 'like' : 'likes'}
            </span>
            <span className='recent-post__icons--comments'>
              <i className='fa fa-comment-o'></i>
              {comments.length} {comments.length < 2 ? 'comment' : 'comments'}
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

export default connect(mapStateToProps, { likePost })(RecentPost)
