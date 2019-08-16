import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='nav-lg d-none d-md-flex justify-content-between container'>
      <Link to='/'>Home</Link>
      <NavLink to='/blogs'>blogs</NavLink>
      <NavLink to='/about'>about</NavLink>
      <NavLink to='/contact'>contact</NavLink>
    </nav>
  )
}

export default Navbar
