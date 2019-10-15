import React, { useState, useRef } from 'react'
import { connect } from 'react-redux'
import { auth } from '../../../firebase/firebase.utils'
import { openModal } from '../../../redux/ui/ui.actions'
import { useOutsideClick } from '../../../helpers/func'

import firebase from 'firebase'

const ButtonGroup = ({ currentUser, openModal }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const userPopMenu = useRef()

  // Closes menu on outside click.
  useOutsideClick(userPopMenu, () => {
    if (menuIsOpen) setMenuIsOpen(false)
  })

  const signOut = () => {
    window.location = '/'
    auth.signOut()
  }

  const toggleMenu = () => setMenuIsOpen(!menuIsOpen)

  return currentUser ? (
    <div class='button-group'>
      <img
        className='photourl'
        src={firebase.auth().currentUser.photoURL}
        alt='user'
        onClick={toggleMenu}
      />

      {menuIsOpen && (
        <div className='menu' ref={userPopMenu}>
          <ul className='menu__list'>
            <li className='menu__list--item row'>
              <img
                className='menu__avatar col-3'
                src={firebase.auth().currentUser.photoURL}
                alt='user'
              />

              <figcaption className='menu__caption col-9'>
                <p className='menu__caption--displayname'>
                  {firebase.auth().currentUser.displayName}
                </p>
                <p className='menu__caption--email'>
                  {firebase.auth().currentUser.email}
                </p>
              </figcaption>
            </li>

            <li className='menu__list--item signout' onClick={signOut}>
              Sign out
            </li>
          </ul>
        </div>
      )}
    </div>
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
