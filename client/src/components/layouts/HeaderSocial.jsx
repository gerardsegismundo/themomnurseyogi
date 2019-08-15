import React from 'react'

const Header = () => {
  return (
    <header className='row'>
      <section className='social-links col-lg-2 col-md-3 col-sm-4 col-xs-2 d-flex justify-content-around'>
        <a
          className='link'
          href='https://www.pinterest.ph/themomnurseyogi'
          target='_blank'
        >
          <i className='fa fa-pinterest' />
        </a>
        <a href='https://www.instagram.com/themomnurseyogi/' target='_blank'>
          <i className='fa fa-instagram' />
        </a>
        <a href='#' target='_blank'>
          <i className='fa fa-twitter' />
        </a>
        <a
          href='https://facebook.com/Themomnurseyogi-212826675960139/'
          target='_blank'
        >
          <i className='fa fa-facebook' />
        </a>
      </section>
      <section className='header-fieldset col-xs-10'>fieldset</section>
    </header>
  )
}

export default Header
