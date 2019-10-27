import React, { useState } from 'react'
import SocialLinks from '../common/SocialLinks'
import { auth } from '../../firebase/firebase.utils'
import { openSignInModal } from '../../redux/ui/ui.actions'
import { connect } from 'react-redux'

const ContactSection = ({ currentUser, openSignInModal }) => {
  const [message, setMessage] = useState('')

  return (
    <div className='contact-section col order-3 order-lg-1'>
      <hr className='d-block my-5 d-lg-none wide' />
      <h2 className='contact-section__title'># Contact</h2>
      <p className='contact-section__body'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
        accusamus quo illum, magnam quidem vel in ratione officia voluptatibus,
        consequuntur deserunt, iure doloremque delectus sint.
      </p>
      <SocialLinks classNames='contact-section__social-links' />

      <form className='contact-section__form'>
        <input
          type='text'
          className='form-control'
          placeholder='Name'
          value={currentUser ? auth.currentUser.displayName : ''}
          disabled
        />

        <input
          type='text'
          className='form-control'
          placeholder='Email'
          value={currentUser ? auth.currentUser.email : ''}
          disabled
        />

        <textarea
          name='message'
          onChange={e => setMessage(e.target.value)}
          value={message}
          className='form-control'
          placeholder='Message'
          cols='30'
          rows='10'
          disabled={currentUser ? false : true}
        ></textarea>

        {currentUser ? (
          <button className='btn-primary btn-xl'>Send</button>
        ) : (
          <p className='contact-section__form--requiremsg'>
            You must{' '}
            <span onClick={openSignInModal} className='sign-in'>
              sign in
            </span>{' '}
            to send a message.
          </p>
        )}
      </form>
    </div>
  )
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

export default connect(
  mapStateToProps,
  { openSignInModal }
)(ContactSection)
