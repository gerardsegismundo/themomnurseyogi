import React, { useRef } from 'react'
import { FacebookIcon, GoogleIcon, CloseIcon } from './SvgIcons'
import { connect } from 'react-redux'
import { useOutsideAndEscapeClick } from '../../utils/hooks'
import { closeSignInModal } from '../.../../../redux/ui/ui.actions'

import {
  signInWithGoogle,
  signInWithFacebook
} from '../../firebase/firebase.utils'

const SignInModal = ({ signInModalIsOpen, closeSignInModal }) => {
  const signInModalRef = useRef()

  // Close signInModal on outsideClick & esc
  useOutsideAndEscapeClick(signInModalRef, signInModalIsOpen, closeSignInModal)

  const signInWithGoogleHandler = () => {
    signInWithGoogle()
    closeSignInModal()
  }

  const signInWithFacebookHandler = () => {
    signInWithFacebook()
    closeSignInModal()
  }

  return (
    <div
      className={`signin-modal_overlay${signInModalIsOpen ? ' is-open' : ''}`}
    >
      <div className={`signin-modal${signInModalIsOpen ? ' is-open' : ''}`}>
        <div
          className='signin-modal__content p-3  d-flex align-items-center justify-content-center'
          ref={signInModalRef}
        >
          <CloseIcon
            className='signin-modal__content--close'
            onClick={closeSignInModal}
          />

          <div className='wrapper'>
            <h1 className='title'>#themomnurseyogi.</h1>

            <button
              onClick={signInWithGoogleHandler}
              className='google-signin-btn'
            >
              <GoogleIcon />
              &nbsp;&nbsp;Sign in with Google
            </button>

            <button
              onClick={signInWithFacebookHandler}
              className='fb-signin-btn'
            >
              <FacebookIcon />
              &nbsp;&nbsp;Sign in with Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = ({ ui }) => ({
  signInModalIsOpen: ui.signInModalIsOpen
})

export default connect(mapStateToProps, { closeSignInModal })(SignInModal)
