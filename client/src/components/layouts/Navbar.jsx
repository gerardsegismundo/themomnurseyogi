import React, { useState, useEffect, useRef } from 'react'
import { NavLink, Link } from 'react-router-dom'

import SocialLinks from '../common/SocialLinks'
import { useOutsideClick } from '../../helpers'

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

  const clickOut = useRef()
  // Close small nav on outside click close
  useOutsideClick(clickOut, () => {
    navIsOpen && setNavIsOpen(false)
  })

  const NavLinks = () => (
    <>
      <Link to='/' onClick={e => setNavIsOpen(false)}>
        home
      </Link>
      <NavLink to='/blogs' onClick={e => setNavIsOpen(false)}>
        blogs
      </NavLink>
      <NavLink to='/about' onClick={e => setNavIsOpen(false)}>
        about
      </NavLink>
      <NavLink to='/contact' onClick={e => setNavIsOpen(false)}>
        contact
      </NavLink>

      <SocialLinks classes='nav__social-links d-flex d-md-none' />
    </>
  )

  let classes = `nav d-flex d-md-none mb-4 mt-4${
    isFixed ? ' sticky-top b-shadow' : ''
  }`

  let classes_md = `nav-md d-none d-md-flex justify-content-around${
    isFixed_md ? ' sticky-top py-3 b-shadow' : ''
  }`

  return (
    <>
      <nav className={classes_md}>
        <NavLinks />
      </nav>

      <nav className={classes} ref={clickOut}>
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
