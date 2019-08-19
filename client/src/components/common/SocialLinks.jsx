import React, { Fragment } from 'react'

const SocialLinks = ({ classes }) => {
  const links = (
    <Fragment>
      <a
        className='link'
        href='https://www.pinterest.ph/themomnurseyogi'
        target='_blank'
        rel='noopener noreferrer'
      >
        <i className='fa fa-pinterest' />
      </a>

      <a
        href='https://www.instagram.com/themomnurseyogi/'
        rel='noopener noreferrer'
        target='_blank'
      >
        <i className='fa fa-instagram' />
      </a>

      <a href='#!' target='_blank' rel='noopener noreferrer'>
        <i className='fa fa-twitter' />
      </a>

      <a
        href='https://facebook.com/Themomnurseyogi-212826675960139/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <i className='fa fa-facebook' />
      </a>
    </Fragment>
  )

  // Has no className return fragment
  return !classes ? (
    <Fragment>{links}</Fragment>
  ) : (
    <span className={classes}>{links}</span>
  )
}

export default SocialLinks
