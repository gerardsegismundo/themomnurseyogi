import React from 'react'
import SocialLinks from '../SocialLinks'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { auth } from '../../../firebase/firebase.utils'
import { openSignInModal } from '../../../redux/ui/ui.actions'

const NavbarLinks = ({ setNavIsOpen, openSignInModal, currentUser }) => {
  const signOut = () => {
    window.location = '/'
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

      <span onClick={closeNavbar}>search</span>

      <SocialLinks classNames='nav__social-links d-flex d-md-none' />
    </>
  )
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

export default connect(
  mapStateToProps,
  { openSignInModal }
)(NavbarLinks)
