import React, { useEffect } from 'react'
// import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getPosts, getPageItems } from '../../redux/post/post.actions'
// import { renderHashtags, getPostLink, sliceParagraph } from '../../helpers/func'
// import Fade from 'react-reveal/Fade'
import Pagination from '../layouts/Pagination'

const Posts = ({ getPosts, getPageItems, posts, pageItems }) => {
  useEffect(() => {
    if (!posts) getPosts()
    if (!pageItems) getPageItems()

    // eslint-disable-next-line
  }, [])

  return (
    <div className='container posts'>
      <h2 className='posts__page-title'># Posts</h2>

      {/* {posts &&
        posts.map(({ _id, title, body, hashtags, imgURL, comments, likes }) => {
          return (
            <Fade cascade key={_id}>
              <div className='post row'>
                <div className='post__img-col cl-sm-12 col-md-4 col-lg-3'>
                  <Link to={getPostLink(title, _id)}>
                    <figure style={{ backgroundImage: `url(${imgURL})` }} />
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

                  <div className='d-flex align-items-center'>
                    <Link
                      to={getPostLink(title, _id)}
                      className='post__content-col--read-more'
                    >
                      <p>Read more</p>
                    </Link>

                    <p className='post__content-col--icons ml-auto'>
                      <span className='post__content-col--icons--likes'>
                        <i className='fa fa-heart-o' /> {likes.length}
                      </span>
                      <span>
                        <i className='fa fa-comment-o' /> {comments.length}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </Fade>
          )
        })} */}

      <Pagination />
    </div>
  )
}

const mapStateToProps = state => ({
  posts: state.posts.posts
})

export default connect(mapStateToProps, { getPosts, getPageItems })(Posts)
