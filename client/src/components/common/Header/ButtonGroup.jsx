import React from 'react'
import { connect } from 'react-redux'
import { auth } from '../../../firebase/firebase.utils'
import {
  openSignInModal,
  openUserMenu,
  closeUserMenu
} from '../../../redux/ui/ui.actions'

const ButtonGroup = props => {
  const {
    currentUser,
    userMenuIsOpen,
    openSignInModal,
    openUserMenu,
    closeUserMenu
  } = props

  const toggleUserMenu = () => {
    userMenuIsOpen ? closeUserMenu() : openUserMenu()
  }

  return currentUser ? (
    <div className='button-group'>
      <img
        className='photourl'
        src={auth.currentUser.photoURL}
        alt='user'
        onClick={toggleUserMenu}
      />
    </div>
  ) : (
    <button
      id='sign-in-btn'
      onClick={openSignInModal}
      className='btn--signup btn btn-lg btn-outline-dark'
    >
      Sign in
    </button>
  )
}

const mapStateToProps = ({ user, ui }) => ({
  currentUser: user.currentUser,
  userMenuIsOpen: ui.userMenuIsOpen
})

export default connect(mapStateToProps, {
  openSignInModal,
  openUserMenu,
  closeUserMenu
})(ButtonGroup)
