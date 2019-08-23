import React, { Fragment } from 'react'
import profileImage from '../../assets/profile.jpg'

const Subscribe = () => {
  return (
    <Fragment>
      <img
        src={profileImage}
        className='profile-image img-fluid'
        alt='profile'
      />

      <hgroup className='subscribe-text'>
        <h4 className='subscribe-text--primary'>Subscribe</h4>
        <h5 className='subscribe-text--secondary'>to my Blog</h5>
      </hgroup>
    </Fragment>
  )
}

export default Subscribe
