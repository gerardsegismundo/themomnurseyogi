import React, { useState, useEffect } from 'react'
import SocialLinks from '../common/SocialLinks'
import { auth } from '../../firebase/firebase.utils'
import { openSignInModal } from '../../redux/ui/ui.actions'
import { connect } from 'react-redux'
import { useOnKeyDownEnter } from '../../helpers/func'
import axios from 'axios'
import { NotificationManager } from 'react-notifications'
import HashLoader from 'react-spinners/HashLoader'

const ContactSection = ({ currentUser, openSignInModal }) => {
  const [message, setMessage] = useState({})
  const [isSendingMessage, setIsSendingMessage] = useState(false)
  const [messageIsInvalid, setMessageIsInvalid] = useState(false)

  useEffect(() => {
    setMessage({
      displayName: currentUser && auth.currentUser.displayName,
      email: currentUser && auth.currentUser.email,
      ...message.body
    })

    // eslint-disable-next-line
  }, [currentUser])

  const handleOnChange = e => {
    if (messageIsInvalid && e.target.value.length > 0) {
      setMessageIsInvalid(false)
    }
    setMessage({ ...message, body: e.target.value })
  }

  const handleSendMessage = async e => {
    e.preventDefault()

    if (!message.body) return setMessageIsInvalid(true)

    setIsSendingMessage(true)

    await axios.post('/api/messages', message)

    setTimeout(() => {
      setIsSendingMessage(false)

      NotificationManager.success('Message sent.', 'Success')
    }, 2000)

    setMessage({ ...message, body: '' })
  }

  useOnKeyDownEnter('textarea-message', handleSendMessage)

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
          id='textarea-message'
          onChange={e => handleOnChange(e)}
          value={message.body}
          className={`form-control ${messageIsInvalid && 'is-invalid'}`}
          placeholder='Message'
          cols='30'
          rows='10'
          disabled={!currentUser || isSendingMessage}
          required
        ></textarea>
        {messageIsInvalid && (
          <div className='invalid-feedback'>Please provide a message.</div>
        )}

        {currentUser ? (
          <button
            className={`btn-${
              isSendingMessage ? 'secondary' : 'primary'
            } contact-section__form__send-btn btn-xl`}
            onClick={e => handleSendMessage(e)}
            disabled={isSendingMessage}
          >
            {isSendingMessage ? 'Sending...' : 'Send'}
            <span
              className={`btn-spinner${isSendingMessage ? ' is-sending' : ''}`}
            >
              <HashLoader sizeUnit={'px'} size={16} color={'#CC0066'} />
            </span>
          </button>
        ) : (
          <p className='contact-section__form__requiremsg'>
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

export default connect(mapStateToProps, { openSignInModal })(ContactSection)
