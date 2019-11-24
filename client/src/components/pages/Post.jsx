import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getPost } from '../../redux/post/post.actions'
import Comments from '../layouts/Comments'
import Spinner from '../layouts/Spinner'

import { renderHashtags, formatDate, getPostId } from '../../helpers/func'

const Post = ({ location, getPost, post }) => {
  useEffect(() => {
    const postId = getPostId(location.pathname)
    getPost(postId)
    // eslint-disable-next-line
  }, [])

  if (!post) {
    return (
      <div className='post--spinner'>
        <Spinner msg={'Loading post... '} />
      </div>
    )
  }

  const { imgURL, date, hashtags, title, body } = post

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

      <Comments />
    </div>
  )
}

const mapStateToProps = state => ({
  post: state.posts.post,
  posts: state.posts.posts
})

export default connect(mapStateToProps, { getPost })(Post)
