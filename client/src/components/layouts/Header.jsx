import React from 'react'
import SocialLinks from './HeaderSocialLinks'
import FieldSet from './HeaderFieldSet'

const Header = () => {
  return (
    <header className='mt-4 px-xl-5'>
      <div className='row'>
        <SocialLinks />
        <FieldSet />
      </div>

      <main className='d-flex-row justify-content-center text-center'>
        <h1>themomnurseyogi</h1>
        <h4>LIVE LOVE MANIFEST</h4>
      </main>
    </header>
  )
}

export default Header
