import React, { useEffect, useRef } from 'react'
import { useOutsideClick } from '../../helpers/func'

import { signInWithGoogle } from '../../firebase/firebase.utils'

import FacebookIcon from './svg/FacebookIcon'
import GoogleIcon from './svg/GoogleIcon'
import CloseIcon from './svg/CloseIcon'

import { connect } from 'react-redux'
import { closeModal } from '../.../../../redux/ui/ui.actions'

const Modal = ({ modalIsOpen, closeModal }) => {
  const modalRef = useRef()

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown, false)

    return () => {
      document.removeEventListener('keydown', onKeyDown, false)
    }
    // eslint-disable-next-line
  }, [modalIsOpen])

  const onKeyDown = e => {
    if (modalIsOpen && e.key === 'Escape') closeModal()
  }

  useOutsideClick(modalRef, () => {
    if (modalIsOpen) return closeModal()
    return null
  })

  const signInWithGoogleHandler = () => {
    signInWithGoogle()
    closeModal()
  }

  return (
    <div
      style={modalIsOpen ? { zIndex: 1 } : { zIndex: -1 }}
      className={`my-modal__overlay${
        modalIsOpen ? ' opacity-1' : ' opacity-0'
      }`}
    >
      <div className={`my-modal${modalIsOpen ? ' is-open' : ''}`}>
        <div
          className='my-modal__content p-3  d-flex align-items-center justify-content-center'
          ref={modalRef}
        >
          <i
            className='my-modal__content--close text-align-right hov'
            onClick={closeModal}
          >
            <CloseIcon />
          </i>

          <div className='my-modal__content--section p-5'>
            <h1 className='my-modal__content--section--title'>
              #themomnurseyogi.
            </h1>

            <center>
              <button
                className='my-modal__content--section--btn-1 d-block align-self-center align-content-center'
                onClick={signInWithGoogleHandler}
              >
                <div className='d-flex align-items-center'>
                  <GoogleIcon />
                  &nbsp;&nbsp;Sign in with Google
                </div>
              </button>

              <button className='my-modal__content--section--btn-2 d-block'>
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
  modalIsOpen: state.ui.modalIsOpen
})

export default connect(
  mapStateToProps,
  { closeModal }
)(Modal)
