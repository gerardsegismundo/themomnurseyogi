import React from 'react'

const SocialLinks = () => {
  return (
    <section className='social-links col-lg-2 col-md-3 col-sm-4 col-xs-2 d-none d-sm-flex justify-content-start'>
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
    </section>
  )
}

export default SocialLinks
