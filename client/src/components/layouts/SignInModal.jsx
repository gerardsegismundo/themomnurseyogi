import React, { useRef } from 'react'
import {
  signInWithGoogle,
  signInWithFacebook
} from '../../firebase/firebase.utils'
import { FacebookIcon, GoogleIcon, CloseIcon } from './SvgIcons'
import { connect } from 'react-redux'
import { closeSignInModal } from '../.../../../redux/ui/ui.actions'
import { useOutsideAndEscapeClick } from '../../helpers/func'

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

          <div className='signin-modal__content--section p-5'>
            <h1 className='signin-modal__content--section--title'>
              #themomnurseyogi.
            </h1>

            <center>
              <button
                onClick={signInWithGoogleHandler}
                className='signin-modal__content--section--btn-1 d-block align-self-center align-content-center'
              >
                <GoogleIcon className='d-flex align-items-center' />
                &nbsp;&nbsp;Sign in with Google
              </button>

              <button
                onClick={signInWithFacebookHandler}
                className='signin-modal__content--section--btn-2 d-block'
              >
                <FacebookIcon className='d-flex align-items-center' />
                &nbsp;&nbsp;Sign in with Facebook
              </button>
            </center>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  signInModalIsOpen: state.ui.signInModalIsOpen
})

export default connect(
  mapStateToProps,
  { closeSignInModal }
)(SignInModal)
