import React from 'react'

const HeaderFieldSet = () => {
  return (
    <section className='header-fieldset col d-none d-sm-flex  flex-row-reverse'>
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
