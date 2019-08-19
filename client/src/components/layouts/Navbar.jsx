import React, { Fragment, useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'

import SocialLinks from '../common/SocialLinks'

const Navbar = () => {
  const [isFixed, setIsFixed] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const handleScroll = () => {
    window.pageYOffset >= 242 ? setIsFixed(true) : setIsFixed(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
    // eslint-disable-next-line
  }, [])

  const NavLinks = () => (
    <Fragment>
      <Link to='/' onClick={e => setIsOpen(false)}>
        home
      </Link>
      <NavLink to='/blogs' onClick={e => setIsOpen(false)}>
        blogs
      </NavLink>
      <NavLink to='/about' onClick={e => setIsOpen(false)}>
        about
      </NavLink>
      <NavLink to='/contact' onClick={e => setIsOpen(false)}>
        contact
      </NavLink>

      <SocialLinks classes='nav__social-links d-flex d-md-none' />
    </Fragment>
  )

  let classes = 'nav d-flex d-md-none mb-5 mt-5'
  let burgerNavClasses = isFixed ? classes + ' sticky-top b-shadow' : classes

  return (
    <Fragment>
      <nav className='nav-md d-none d-md-flex justify-content-between container'>
        <NavLinks />
      </nav>

      <nav className={burgerNavClasses}>
        <input
          type='checkbox'
          checked={isOpen}
          onChange={e => setIsOpen(!isOpen)}
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
    </Fragment>
  )
}

export default Navbar
