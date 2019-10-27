import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { getPosts } from '../../redux/post/post.actions'

import { renderHashtags, getPostLink, sliceParagraph } from '../../helpers/func'

const Posts = ({ getPosts, posts }) => {
  useEffect(() => {
    if (!posts) getPosts()

    // eslint-disable-next-line
  }, [])

  return (
    <div className='container posts'>
      <h2 className='posts__page-title'># Posts</h2>

      {posts &&
        posts.map(({ _id, title, body, hashtags, imgURL }) => {
          return (
            <div className='post row'>
              <div className='post__img-col col-3'>
                <Link to={getPostLink(title, _id)}>
                  <img src={imgURL} alt='post' className='img-fluid m-auto' />
                </Link>
              </div>

              <div className='post__content-col col-8'>
                <Link to={getPostLink(title, _id)}>
                  <h2>{title}</h2>
                  <p>{sliceParagraph(body)}</p>
                  <ul>{renderHashtags(hashtags)}</ul>
                </Link>
              </div>
            </div>
          )
        })}
    </div>
  )
}

const mapStateToProps = state => ({
  posts: state.posts.posts
})

export default connect(
  mapStateToProps,
  { getPosts }
)(Posts)
