import React from 'react'
import { connect } from 'react-redux'
import { auth } from '../../../firebase/firebase.utils'
import { openModal } from '../../../redux/ui/ui.actions'

const ButtonGroup = ({ currentUser, openModal }) => {
  return currentUser ? (
    <button
      id='sign-out'
      onClick={() => auth.signOut()}
      className='btn--signup btn btn-lg btn-outline-dark'
    >
      Sign Out
    </button>
  ) : (
    <button
      id='sign-in'
      onClick={openModal}
      className='btn--signup btn btn-lg btn-outline-dark'
    >
      Sign in
    </button>
  )
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

export default connect(
  mapStateToProps,
  { openModal }
)(ButtonGroup)
