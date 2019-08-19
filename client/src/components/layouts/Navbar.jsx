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
        <input type='checkbox' className='nav__checkbox' id='nav__toggle' />

        <label htmlFor='nav__toggle' className='nav__btn mx-auto'>
          <span className='nav__icon' />
        </label>

        <div className='nav__links'>{/* <NavLinks /> */}</div>
      </nav>
    </Fragment>
  )
}

export default Navbar
