import React, { useState, useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'

import SocialLinks from '../common/SocialLinks'
import { useOutsideClick } from '../../helpers/func'

const Navbar = () => {
  const [isFixed, setIsFixed] = useState(false)
  const [isFixed_md, setIsFixed_md] = useState(false)
  const [navIsOpen, setNavIsOpen] = useState(false)

  // Makes small nav stick on top on scroll
  useEffect(() => {
    const handleScroll = () => {
      window.pageYOffset >= 185 ? setIsFixed(true) : setIsFixed(false)
      window.pageYOffset >= 312 ? setIsFixed_md(true) : setIsFixed_md(false)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
    // eslint-disable-next-line
  }, [])

  // Close small nav on outside click closes
  const nav_sm = useRef()
  useOutsideClick(nav_sm, () => navIsOpen && setNavIsOpen(false))

  // Navigation Links
  const NavLinks = () => (
    <>
      <NavLink exact to='/' onClick={() => setNavIsOpen(false)}>
        home
      </NavLink>
      <NavLink exact to='/posts' onClick={() => setNavIsOpen(false)}>
        posts
      </NavLink>
      <NavLink exact to='/about' onClick={() => setNavIsOpen(false)}>
        about
      </NavLink>
      <NavLink exact to='/contact' onClick={() => setNavIsOpen(false)}>
        contact
      </NavLink>

      <span className='d-md-none' href='' onClick={() => setNavIsOpen(false)}>
        search
      </span>

      <SocialLinks classNames='nav__social-links d-flex d-md-none' />
    </>
  )

  // Small screen nav classes
  let classNames_sm = `nav d-flex d-md-none mb-4 mt-4${
    isFixed ? ' sticky-top b-shadow' : ''
  }`

  // Medium to large screen nav classes
  let classNames_md = `nav-md d-none d-md-flex justify-content-around${
    isFixed_md ? ' sticky-top py-3 b-shadow' : ''
  }`

  return (
    <>
      <nav className={classNames_md}>
        <NavLinks />
      </nav>

      <nav className={classNames_sm} ref={nav_sm}>
        <input
          type='checkbox'
          checked={navIsOpen}
          onChange={e => setNavIsOpen(!navIsOpen)}
          className='nav__checkbox'
          id='nav__toggle'
        />

        <label htmlFor='nav__toggle' className='nav__btn mx-auto d-flex'>
          <span className='nav__icon' />
        </label>

        <div className='nav__links'>
          <NavLinks />
        </div>
      </nav>
    </>
  )
}

export default Navbar
