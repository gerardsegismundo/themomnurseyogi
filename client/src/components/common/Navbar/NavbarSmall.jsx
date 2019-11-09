import React, { useState, useRef, useEffect } from 'react'
import { useOutsideClick } from '../../../helpers/func'
import NavbarLinks from './NavbarLinks'

const NavbarSmall = () => {
  const [isSticked, setIsSticked] = useState(false)
  const [navIsOpen, setNavIsOpen] = useState(false)

  // Makes small nav stick on top on scroll
  useEffect(() => {
    const handleScroll = () => {
      window.pageYOffset >= 185 ? setIsSticked(true) : setIsSticked(false)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
    // eslint-disable-next-line
  }, [])

  const smallNavbarRef = useRef()
  useOutsideClick(smallNavbarRef, () => navIsOpen && setNavIsOpen(false))

  return (
    <nav
      className={`nav d-flex d-md-none mb-4 mt-4${
        isSticked ? ' sticky-top b-shadow' : ''
      }`}
      ref={smallNavbarRef}
    >
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
