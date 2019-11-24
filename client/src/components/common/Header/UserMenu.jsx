import React, { useRef } from 'react'
import { connect } from 'react-redux'
import { auth } from '../../../firebase/firebase.utils'
import { useOutsideAndEscapeClick } from '../../../helpers/func'
import { closeUserMenu } from '../../../redux/ui/ui.actions'

const UserMenu = ({ userMenuIsOpen, currentUser, closeUserMenu }) => {
  const userMenu = useRef()

  // Close userMenu on outsideClick & esc
  useOutsideAndEscapeClick(userMenu, userMenuIsOpen, closeUserMenu)

  const signOut = () => {
    window.location = '/'
    auth.signOut()
  }

  return currentUser && userMenuIsOpen ? (
    <div ref={userMenu} className='user-menu d-none d-md-block container'>
      <ul className='user-menu__list'>
        <li className='user-menu__list--item d-flex'>
          <img
            className='user-menu__avatar mr-4'
            src={auth.currentUser.photoURL}
            alt='user'
          />

          <figcaption className='user-menu__caption'>
            <p className='user-menu__caption--displayname'>
              {auth.currentUser.displayName}
            </p>
            <p className='user-menu__caption--email'>
              {auth.currentUser.email}
            </p>
          </figcaption>
        </li>

        <li className='user-menu__list--item signout' onClick={signOut}>
          Sign out
        </li>
      </ul>
    </div>
  ) : null
}

const mapStateToProps = ({ user, ui }) => ({
  currentUser: user.currentUser,
  userMenuIsOpen: ui.userMenuIsOpen
})

export default connect(mapStateToProps, { closeUserMenu })(UserMenu)
