import React from 'react'
import Searchbar from './Searchbar'
import ButtonGroup from './ButtonGroup'

const HeaderFieldSet = () => {
  return (
    <section className='header__fieldset col d-none d-md-flex flex justify-content-end'>
      <Searchbar />
      <ButtonGroup />
    </section>
  )
}

export default HeaderFieldSet
