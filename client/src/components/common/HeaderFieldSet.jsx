import React from 'react'

const HeaderFieldSet = () => {
  return (
    <section className='header__fieldset col d-none d-md-flex  flex-row-reverse'>
      <button className='btn btn-outline-danger'>Sign up</button>
      <button className='btn btn-outline-info'>Sign in</button>
      <input
        className='form-control search-box'
        type='text'
        placeholder=' Search...'
      />
    </section>
  )
}

export default HeaderFieldSet
