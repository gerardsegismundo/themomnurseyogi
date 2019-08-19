import React from 'react'
import SocialLinks from '../common/SocialLinks'

const Footer = () => {
  const classes =
    'footer__links col-12 col-md-6 d-flex justify-content-around justify-content-md-end align-items-center mt-4 mt-md-0'

  return (
    <footer className='footer bg-dark py-5 py-md-4'>
      <p className='mx-5 row'>
        <span className='footer__copyright col d-flex justify-content-center justify-content-md-start'>
          Copyright &copy; 2019 Themomnurseyogi. All rights reserved.
        </span>
        <span />
        <SocialLinks classes={classes} />
      </p>
    </footer>
  )
}

export default Footer
