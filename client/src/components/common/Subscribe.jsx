import React, { Fragment } from 'react'
import profileImage from '../../assets/profile.jpg'

const Subscribe = ({ classNames }) => {
  if (classNames) classNames = `${classNames} profile-image image-fluid`
  else classNames = 'profile-image image-fluid'

  return (
    <Fragment>
      <img src={profileImage} className={classNames} alt='profile' />

      <hgroup className='subscribe-text'>
        <h4 className='subscribe-text--primary'>Subscribe</h4>
        <h5 className='subscribe-text--secondary'>to my Blog</h5>
      </hgroup>
    </Fragment>
  )
}

export default Subscribe
