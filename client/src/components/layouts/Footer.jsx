import React, { useEffect } from 'react'
import SocialLinks from '../common/SocialLinks'

const Footer = () => {
  const socialLinksClassNames =
    'footer__links col-12 col-md-6 d-flex order-1 order-md-3 justify-content-around justify-content-md-end align-items-center mb-4 mb-md-0'

  return (
    <footer className='footer bg-dark py-4 py-md-3 py-lg-4'>
      <p className='mx-5 row'>
        <span className='footer__copyright col order-2 d-flex justify-content-center justify-content-md-start'>
          Copyright &copy; 2019 Themomnurseyogi. All rights reserved.
        </span>
        <span />
        <SocialLinks classNames={socialLinksClassNames} />
      </p>
    </footer>
  )
}

export default Footer
