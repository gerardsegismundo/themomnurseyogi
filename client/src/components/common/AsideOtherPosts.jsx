import React from 'react'
import Fade from 'react-reveal/Fade'
import { withRouter } from 'react-router-dom'
import { getPostLink, renderHashtags } from '../../utils/helpers'

const OtherPosts = props => {
  const { classes, title, hashtags, date, _id, imgURL, history } = props

  const onChangeRoute = () => {
    const postLink = getPostLink(title, _id)
    history.push(postLink)
  }

  return (
    <Fade cascade>
      <section className={`other-posts${classes ? ' ' + classes : ''}`}>
        {title && _id && (
          <div className='d-block' onClick={onChangeRoute}>
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
        )}
      </section>
    </Fade>
  )
}
export default withRouter(OtherPosts)
