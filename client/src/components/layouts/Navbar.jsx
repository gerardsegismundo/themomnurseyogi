import React, { Fragment } from 'react'
import { NavLink, Link } from 'react-router-dom'

const NavLinks = () => (
  <Fragment>
    <Link to='/'>home</Link>
    <NavLink to='/blogs'>blogs</NavLink>
    <NavLink to='/about'>about</NavLink>
    <NavLink to='/contact'>contact</NavLink>
  </Fragment>
)

const Navbar = () => {
  return (
    <Fragment>
      <nav className='nav-md d-none d-md-flex justify-content-between container'>
        <NavLinks />
      </nav>

      <nav className='nav d-flex d-md-none mb-5'>
        <input type='checkbox' class='nav__checkbox' id='nav__toggle' />

        <label for='nav__toggle' class='nav__btn mx-auto'>
          <span class='nav__icon' />
        </label>

        <div className='nav__links'>{/* <NavLinks /> */}</div>
      </nav>
    </Fragment>
  )
}

export default Navbar
