import React from 'react'
import SocialLinks from '../common/SocialLinks'

const Footer = () => (
  <footer className='footer bg-dark py-4 py-md-3 py-lg-4'>
    <p className='mx-5 row'>
      <span className='footer__copyright col order-2 justify-content-center justify-content-md-start'>
        Copyright &copy; 2019 Themomnurseyogi. All rights reserved.
      </span>
      <span />
      <SocialLinks
        classNames={'footer__links col-12 col-md-3 order-1 order-md-3'}
      />
    </p>
  </footer>
)

export default Footer
