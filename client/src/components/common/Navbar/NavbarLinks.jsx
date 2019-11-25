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

  disableSticky
}) => {
  const signOut = () => {
    window.location.reload()
    auth.signOut()
  }

  const onSign = () => {
    closeNavbar()
    currentUser ? signOut() : openSignInModal()
  }

  const onSearch = () => {
    toggleSmallSearchbar()
    closeNavbar()
    disableSticky()
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

      <span onClick={onSearch}>search</span>

      <span onClick={onSign}>{currentUser ? 'signout' : 'signin'}</span>

      <SocialLinks classNames='nav--sm__social-links d-flex d-md-none' />
    </>
  )
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

export default connect(mapStateToProps, {
  openSignInModal,
  toggleSmallSearchbar,
  disableSticky
})(NavbarLinks)
