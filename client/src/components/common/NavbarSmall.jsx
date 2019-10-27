import React, { useRef } from 'react'
import { useOutsideClick } from '../../helpers/func'
import NavbarLinks from './NavbarLinks'

const NavbarSmall = ({ isFixed, navIsOpen, setNavIsOpen }) => {
  // Close small nav on outside click closes
  const nav_sm = useRef()
  useOutsideClick(nav_sm, () => navIsOpen && setNavIsOpen(false))

  let classNames_sm = `nav d-flex d-md-none mb-4 mt-4${
    isFixed ? ' sticky-top b-shadow' : ''
  }`

  return (
    <nav className={classNames_sm} ref={nav_sm}>
      <input
        type='checkbox'
        checked={navIsOpen}
        onChange={() => setNavIsOpen(!navIsOpen)}
        className='nav__checkbox'
        id='nav__toggle'
      />

      <label htmlFor='nav__toggle' className='nav__btn mx-auto d-flex'>
        <span className='nav__icon' />
      </label>

      <div className='nav__links'>
        <NavbarLinks setNavIsOpen={setNavIsOpen} />
      </div>
    </nav>
  )
}

export default NavbarSmall
