import React, { useRef } from 'react'
import { useOutsideClick } from '../../helpers/func'

import FacebookIcon from './svg/FacebookIcon'
import GoogleIcon from './svg/GoogleIcon'
import CloseIcon from './svg/CloseIcon'

const Modal = ({ setIsModalOpen, onModalClose }) => {
  const modalRef = useRef()
  useOutsideClick(modalRef, onModalClose)

  return (
    <>
      <div
        className={`my-modal__overlay${setIsModalOpen ? ' d-flex' : ' d-none'}`}
      >
        <div
          className={`my-modal${setIsModalOpen ? ' is-open' : ' is-closed'}`}
        >
          <div
            className='my-modal__content p-3  d-flex align-items-center justify-content-center'
            ref={modalRef}
          >
            <i
              className='my-modal__content--close text-align-right hov'
              onClick={onModalClose}
            >
              <CloseIcon />
            </i>

            <div className='my-modal__content--section p-5'>
              <h1 className='my-modal__content--section--title'>
                #themomnurseyogi.
              </h1>

              {/* <p className='my-modal__content--section--msg-1'>
                Create an account to receive great stories in your inbox.
              </p> */}

              <center>
                <a
                  href='/auth/google'
                  className='my-modal__content--section--btn-1 d-block align-self-center align-content-center'
                  onClick={onModalClose}
                >
                  <div className='d-flex align-items-center'>
                    <GoogleIcon />
                    &nbsp;&nbsp;Sign in with Google
                  </div>
                </a>

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
    </>
  )
}

export default Modal
