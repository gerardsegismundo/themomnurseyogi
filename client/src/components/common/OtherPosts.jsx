import React from 'react'
import Fade from 'react-reveal/Fade'
import { Link } from 'react-router-dom'
import { getPostLink, renderHashtags } from '../../helpers/func'

const OtherPosts = ({ classes, title, hashtags, date, _id, imgURL }) => (
  <Fade cascade>
    <section className={`other-posts${classes ? ' ' + classes : ''}`}>
      {title && _id && (
        <Link
          to={getPostLink(title, _id)}
          className='other-posts__title fw-600 '
        >
          <div className='d-block'>
            <img
              src={imgURL}
              className='other-posts__img img-fluid '
              alt='profile'
            />
            <p className='other-posts__date'>{date}</p>
            <h4>{title}</h4>
            <p className='other-posts__hashtags'>
              {renderHashtags(hashtags, 3)}
            </p>
          </div>
        </Link>
      )}
    </section>
  </Fade>
)

export default OtherPosts
