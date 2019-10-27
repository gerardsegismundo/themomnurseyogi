import React, { /* useEffect,  */ useRef } from 'react'
import {
  signInWithGoogle,
  signInWithFacebook
} from '../../firebase/firebase.utils'
import { FacebookIcon, GoogleIcon, CloseIcon } from './SvgIcons'
import { connect } from 'react-redux'
import { closeSignInModal } from '../.../../../redux/ui/ui.actions'
import { useOutsideAndEscapeClick } from '../../helpers/func'

const SignInModal = ({ signInModalIsOpen, closeSignInModal }) => {
  const modalRef = useRef()

  // Close modal on outsideClick & esc
  useOutsideAndEscapeClick(modalRef, signInModalIsOpen, closeSignInModal)

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
      id='login-modal'
      style={signInModalIsOpen ? { zIndex: '1' } : { zIndex: '-1' }}
      className={`my-modal__overlay${
        signInModalIsOpen ? ' opacity-1' : ' opacity-0'
      }`}
    >
      <div className={`my-modal${signInModalIsOpen ? ' is-open' : ''}`}>
        <div
          className='my-modal__content p-3  d-flex align-items-center justify-content-center'
          ref={modalRef}
        >
          <i
            className='my-modal__content--close text-align-right hov'
            onClick={closeSignInModal}
          >
            <CloseIcon />
          </i>

          <div className='my-modal__content--section p-5'>
            <h1 className='my-modal__content--section--title'>
              #themomnurseyogi.
            </h1>

            <center>
              <button
                onClick={signInWithGoogleHandler}
                className='my-modal__content--section--btn-1 d-block align-self-center align-content-center'
              >
                <div className='d-flex align-items-center'>
                  <GoogleIcon />
                  &nbsp;&nbsp;Sign in with Google
                </div>
              </button>

              <button
                onClick={signInWithFacebookHandler}
                className='my-modal__content--section--btn-2 d-block'
              >
                <div className='d-flex align-items-center'>
                  <FacebookIcon />
                  &nbsp;&nbsp;Sign in with Facebook
                </div>
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
