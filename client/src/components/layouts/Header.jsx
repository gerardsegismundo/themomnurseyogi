import React from 'react'
import SocialLinks from '../common/SocialLinks'
import FieldSet from '../common/HeaderFieldSet'

const Header = () => {
  const classes =
    'header__social-links col-lg-2 col-md-3 col-sm-4 col-xs-2 d-none d-md-flex justify-content-start mx-2'

  return (
    <header className='header px-xl-5 px-lg-4 px-md-3 mt-md-3'>
      <div className='row'>
        <SocialLinks classes={classes} />
        <FieldSet />
      </div>

      <main className='header__main d-flex-row justify-content-center text-center'>
        <h1>themomnurseyogi</h1>
        <h4>LIVE LOVE MANIFEST</h4>
      </main>
    </header>
  )
}

export default Header
