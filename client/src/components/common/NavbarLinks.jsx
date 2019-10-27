import React from 'react'
import SocialLinks from './SocialLinks'
import { NavLink } from 'react-router-dom'

const NavbarLinks = ({ setNavIsOpen }) => (
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

    <span className='d-md-none' onClick={() => setNavIsOpen(false)}>
      search
    </span>

    <SocialLinks classNames='nav__social-links d-flex d-md-none' />
  </>
)

export default NavbarLinks
