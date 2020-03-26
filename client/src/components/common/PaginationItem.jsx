import React from 'react'
import {
  renderHashtags,
  getPostLink,
  sliceParagraph
} from '../../utils/helpers'
import Fade from 'react-reveal/Fade'
import { withRouter } from 'react-router-dom'

const PaginationItem = props => {
  const { _id, title, body, hashtags, imgURL, comments, likes, history } = props

  const goToPost = () => history.push(getPostLink(title, _id))

  return (
    <Fade cascade key={_id}>
      <div className='pagination-item row'>
        <div className='pagination-item__img-col cl-sm-12 col-md-4 col-lg-3'>
          <figure
            onClick={goToPost}
            style={{ backgroundImage: `url(${imgURL})` }}
          />
        </div>

        <div className='pagination-item__content-col col-md-8 col-lg-9'>
          <h2
            onClick={goToPost}
            className='pagination-item__content-col--title'
          >
            {title}
          </h2>

          <p className='pagination-item__content-col--body'>
            {sliceParagraph(body)}
          </p>
          <p className='pagination-item__content-col--hashtags'>
            {renderHashtags(hashtags)}
          </p>

          <div className='d-flex align-items-center'>
            <p
              onClick={goToPost}
              className='pagination-item__content-col--read-more'
            >
              Read more
            </p>

            <p className='pagination-item__content-col--icons ml-auto'>
              <span className='pagination-item__content-col--icons--likes'>
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

export default withRouter(PaginationItem)
