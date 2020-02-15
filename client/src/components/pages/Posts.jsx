import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getPosts } from '../../redux/post/post.actions'
import { renderHashtags, getPostLink, sliceParagraph } from '../../helpers/func'
import Fade from 'react-reveal/Fade'
import Pagination from '../layouts/Pagination'

const Posts = ({ getPosts, posts, pageItems }) => {
  useEffect(() => {
    if (!posts) getPosts()

    // eslint-disable-next-line
  }, [])

  return (
    <>
      <div className='container posts'>
        <h2 className='posts__page-title'># Posts</h2>

        {pageItems &&
          pageItems.map(
            ({ _id, title, body, hashtags, imgURL, comments, likes }) => {
              return (
                <Fade cascade key={_id}>
                  <div className='post row'>
                    <div className='post__img-col cl-sm-12 col-md-4 col-lg-3'>
                      <a href={getPostLink(title, _id)}>
                        <figure style={{ backgroundImage: `url(${imgURL})` }} />
                      </a>
                    </div>

                    <div className='post__content-col col-md-8 col-lg-9'>
                      <a href={getPostLink(title, _id)}>
                        <h2 className='post__content-col--title'>{title}</h2>
                      </a>
                      <p className='post__content-col--body'>
                        {sliceParagraph(body)}
                      </p>
                      <p className='post__content-col--hashtags'>
                        {renderHashtags(hashtags)}
                      </p>

                      <div className='d-flex align-items-center'>
                        <a
                          href={getPostLink(title, _id)}
                          className='post__content-col--read-more'
                        >
                          <p>Read more</p>
                        </a>

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
            }
          )}
      </div>
      <Pagination />
    </>
  )
}

const mapStateToProps = ({ posts }) => ({
  posts: posts.posts,
  pageItems: posts.pagination.pageItems
})

export default connect(mapStateToProps, { getPosts })(Posts)
