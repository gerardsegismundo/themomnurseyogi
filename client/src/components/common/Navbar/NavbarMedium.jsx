import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { enableSticky, disableSticky } from '../../../redux/ui/ui.actions'
import useStickOnTop from './useStickOnTop'

const NavbarMedium = ({ isSticky, enableSticky, disableSticky }) => {
  useStickOnTop(312, enableSticky, disableSticky)

  return (
    <nav
      className={`${
        isSticky ? 'sticky-top py-3 b-shadow ' : ''
      }nav-md d-none d-md-flex justify-content-around`}
    >
      <NavLink exact to='/'>
        home
      </NavLink>
      <NavLink exact to='/posts'>
        posts
      </NavLink>
      <NavLink exact to='/about'>
        about
      </NavLink>
      <NavLink exact to='/contact'>
        contact
      </NavLink>
    </nav>
  )
}

const mapStateToProps = state => ({
  isSticky: state.ui.isSticky
})

export default connect(
  mapStateToProps,
  { enableSticky, disableSticky }
)(NavbarMedium)
