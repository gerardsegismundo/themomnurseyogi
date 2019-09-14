import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getPost, getPostDb } from '../../redux/post/post.actions'

import { renderHashtags, formatDate } from '../../helpers/func'

const Post = ({ location, getPost, getPostDb, post, posts }) => {
  const postId = location.pathname
    .split('/')[2]
    .split('-')
    .slice(-1)[0]

  useEffect(() => {
    posts ? getPost(postId) : getPostDb(postId)

    // eslint-disable-next-line
  }, [])

  if (!post) return <div className='container'>loading.....</div>

  const { imgURL, date, hashtags, title, body } = post

  return (
    <div className='post container'>
      <h3 className='post__story'># Story</h3>
      <p className='post__date text-grey fw-600'>{formatDate(date)}</p>
      <h1 className='post__title'>{title}</h1>
      <ul className='post__hashtags text-grey fw-600'>
        {renderHashtags(hashtags, title)}
      </ul>
      <img src={imgURL} alt={title} className='post__img' />
      <center>
        <p className='post__body fw-600 d-flex align-self-center align-content-center'>
          <span>{body}</span>
        </p>
      </center>
    </div>
  )
}

const mapStateToProps = state => ({
  post: state.posts.post,
  posts: state.posts.posts
})

export default connect(
  mapStateToProps,
  { getPost, getPostDb }
)(Post)
