import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getPostLink, renderHashtags } from '../../utils/helpers'
import { rearrangePosts } from '../../redux/post/post.actions'

const OtherPostFooter = props => {
  const { _id, title, imgURL, hashtags, date, history, rearrangePosts } = props

  const handleRearrangePosts = () => {
    history.push(getPostLink(title, _id))
    rearrangePosts(_id)
  }

  return (
    <div className='post col-sm-12 col-md-6 col-xl-3 d-flex' key={_id}>
      <figure
        onClick={handleRearrangePosts}
        className='post__img-container__img'
        style={{ backgroundImage: `url(${imgURL})` }}
      />
      <div className='post__labels'>
        <p className='post__labels--date'>{date}</p>

        <h4 className='post__labels--title' onClick={handleRearrangePosts}>
          {title}
        </h4>

        <p className='post__labels--hashtags'>{renderHashtags(hashtags, 3)}</p>
        <span
          onClick={handleRearrangePosts}
          className='post__labels--read-more'
        >
          Read more
        </span>
      </div>
    </div>
  )
}

export default withRouter(connect(null, { rearrangePosts })(OtherPostFooter))
