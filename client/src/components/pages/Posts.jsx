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
    <div className='container posts-page'>
      <h2 className='posts__page-title'># Posts</h2>

      {posts &&
        posts.map(({ _id, title, body, hashtags, imgURL }) => {
          return (
            <div className='post row' key={_id}>
              <div className='post__img-col cl-sm-12 col-md-4 col-lg-3'>
                <Link to={getPostLink(title, _id)}>
                  {/* <img src={imgURL} alt='post' className='img-fluid m-auto' /> */}
                  <figure
                    style={{ backgroundImage: `url(${imgURL})` }}
                  ></figure>
                </Link>
              </div>

              <div className='post__content-col col-md-8 col-lg-9'>
                <Link to={getPostLink(title, _id)}>
                  <h2 className='post__content-col--title'>{title}</h2>
                </Link>
                <p className='post__content-col--body'>
                  {sliceParagraph(body)}
                </p>
                <p className='post__content-col--hashtags'>
                  {renderHashtags(hashtags)}
                </p>
                <Link
                  to={getPostLink(title, _id)}
                  className='post__content-col--read-more'
                >
                  <p>Read more</p>
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
