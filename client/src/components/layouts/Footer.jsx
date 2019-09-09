import React, { useRef } from 'react'
import SocialLinks from '../common/SocialLinks'
import { displayNoneOnAdmin } from '../../helpers/func'

const Footer = () => {
  // Removes footer on admin page
  const footer = useRef()
  displayNoneOnAdmin(footer)

  // ClassName for SocialLink component.
  const socialLinksClassNames =
    'footer__links col-12 col-md-6 d-flex order-1 order-md-3 justify-content-around justify-content-md-end align-items-center mb-4 mb-md-0'

  return (
    <footer className='footer bg-dark py-4 py-md-3 py-lg-4' ref={footer}>
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
