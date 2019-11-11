import React from 'react'
import SocialLinks from '../SocialLinks'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { auth } from '../../../firebase/firebase.utils'
import {
  openSignInModal,
  toggleSmallSearchbar,
  disableSticky
} from '../../../redux/ui/ui.actions'

const NavbarLinks = ({
  setNavIsOpen,
  openSignInModal,
  currentUser,
  toggleSmallSearchbar,
  smallSearchbarIsOpen,
  disableSticky
}) => {
  const signOut = () => {
    window.location.reload()
    auth.signOut()
  }

  const closeNavbar = () => setNavIsOpen(false)

  return (
    <>
      <NavLink exact to='/' onClick={closeNavbar}>
        home
      </NavLink>
      <NavLink exact to='/posts' onClick={closeNavbar}>
        posts
      </NavLink>
      <NavLink exact to='/about' onClick={closeNavbar}>
        about
      </NavLink>
      <NavLink exact to='/contact' onClick={closeNavbar}>
        contact
      </NavLink>

      <span
        onClick={() => {
          closeNavbar()
          currentUser ? signOut() : openSignInModal()
        }}
      >
        {currentUser ? 'signout' : 'signin'}
      </span>

      <span
        onClick={() => {
          toggleSmallSearchbar()
          closeNavbar()
          disableSticky()
        }}
      >
        search
      </span>

      <SocialLinks classNames='nav__social-links d-flex d-md-none' />
    </>
  )
}

const mapStateToProps = ({ user, ui }) => ({
  currentUser: user.currentUser,
  smallSearchbarIsOpen: ui.smallSearchbarIsOpen
})

export default connect(
  mapStateToProps,
  { openSignInModal, toggleSmallSearchbar, disableSticky }
)(NavbarLinks)
