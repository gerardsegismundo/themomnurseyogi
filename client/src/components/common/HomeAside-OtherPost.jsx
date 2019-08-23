import React from 'react'

import { Link } from 'react-router-dom'
import { getPostLink, renderHashtags, formatDate } from '../../helpers'

const OtherPosts = ({ classes, title, hashtags, date, _id, imgURL }) => {
  return (
    <section className={`other-posts${classes ? ' ' + classes : ''}`}>
      <div className='d-block'>
        <img
          src={imgURL}
          className='other-posts__img img-fluid '
          alt='profile'
        />
        <p className='other-posts__date'>{formatDate(date)}</p>

        {title && _id && (
          <Link
            to={getPostLink(title, _id)}
            className='other-posts__title fw-600 mt-5'
          >
            {title}
          </Link>
        )}

        <ul className='other-posts__hashtags d-flex justify-content-start'>
          {renderHashtags(hashtags, title)}
        </ul>
      </div>
    </section>
  )
}

export default OtherPosts
