import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getPost } from '../../redux/post/post.actions'
import Comments from '../layouts/Comments'
import Spinner from '../layouts/Spinner'

import { renderHashtags, formatDate, getPostId } from '../../helpers/func'
import { likePost, unlikePost } from '../../redux/post/post.actions'

import { NotificationManager } from 'react-notifications'
import { openSignInModal } from '../../redux/ui/ui.actions'

const Post = ({
  location,
  getPost,
  post,
  currentUser,
  likePost,
  unlikePost
}) => {
  useEffect(() => {
    getPost(postId)
    loadLikes()
    post && setLikeCount(post.likes.length)

    // eslint-disable-next-line
  }, [currentUser])

  const [isLiked, setIsLiked] = useState()
  const [likeCount, setLikeCount] = useState()

  const loadLikes = () => {
    if (!currentUser) return
    const likeIds = likes.map(like => like.user)

    if (likeIds.includes(currentUser.id)) return setIsLiked(true)
    setIsLiked(false)
  }

  const handleOnLike = () => {
    if (!currentUser) {
      NotificationManager.error(
        'Must sign in to like a post.',
        'Account not signed in',
        2000
      )

      return openSignInModal()
    }

    likePost(post._id, currentUser.id)
    setIsLiked(true)
    setLikeCount(likeCount + 1)
  }

  const handleOnUnlike = () => {
    unlikePost(post._id, currentUser.id)
    setIsLiked(false)
    setLikeCount(likeCount - 1)
  }
  const postId = getPostId(location.pathname)

  if (!post) {
    return (
      <div className='post--spinner'>
        <Spinner msg={'Loading post... '} />
      </div>
    )
  }

  const { imgURL, date, hashtags, title, body, likes } = post

  return (
    <div className='post container'>
      <h3 className='post__story'># Story</h3>
      <p className='post__date text-grey fw-600'>{formatDate(date)}</p>
      <h1 className='post__title'>{title}</h1>
      <ul className='post__hashtags text-grey fw-600'>
        {renderHashtags(hashtags)}
      </ul>
      <img src={imgURL} alt={title} className='post__img' />
      <center>
        <p
          id='post-body'
          className='post__body fw-600 align-self-center align-content-center'
        >
          {body}
        </p>
      </center>

      <div className='post__likes'>
        <span onClick={isLiked ? handleOnUnlike : handleOnLike}>
          <i
            className={`post__likes--icon fa fa-heart${isLiked ? '' : '-o'}`}
          />
          {likeCount} like{likeCount < 2 ? '' : 's'}
        </span>
      </div>

      <Comments postId={postId} />
    </div>
  )
}

const mapStateToProps = ({ posts, user }) => ({
  post: posts.post,
  posts: posts.posts,
  currentUser: user.currentUser
})

export default connect(mapStateToProps, { getPost, likePost, unlikePost })(Post)
