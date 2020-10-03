import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useOnKeyDownEnter } from '../../utils/hooks'
// import axios from 'axios'
// import { NotificationManager } from 'react-notifications'
import HashLoader from 'react-spinners/HashLoader'

const ContactSection = ({ currentUser }) => {
  const [message, setMessage] = useState({
    title: '',
    email: '',
    body: ''
  })

  // eslint-disable-next-line
  const [isSendingMessage, setIsSendingMessage] = useState(false)
  const [messageIsInvalid, setMessageIsInvalid] = useState(false)

  const handleOnChange = e => {
    if (messageIsInvalid && e.target.value.length > 0) {
      setMessageIsInvalid(false)
    }

    setMessage({ ...message, [e.target.name]: e.target.value })
  }

  const handleSendMessage = async e => {
    e.preventDefault()

    console.log(message)

    /*     if (!message.body || !message.title || !message.email)
      return setMessageIsInvalid(true)

    setIsSendingMessage(true)

    let response

    try {
      response = await axios.post('/api/messages', message)
    } catch (err) {
      NotificationManager.error('Message sending failed.', 'Error!', 5000)
    }

    setTimeout(() => {
      if (response)
        NotificationManager.success('Message sent.', 'Success', 5000)
      setIsSendingMessage(false)
      setMessage({ ...message, body: '', title: '', email: '' })
    }, 2000) */
  }

  useOnKeyDownEnter('textarea-message', handleSendMessage)

  return (
    <form className='contact-form'>
      <input
        type='text'
        name='email'
        className='form-control'
        placeholder='Email'
        value={message.email}
        onChange={handleOnChange}
        disabled={isSendingMessage}
        required
      />

      <input
        type='text'
        name='title'
        className={`form-control ${messageIsInvalid &&
          !message.title &&
          'is-invalid'}`}
        value={message.title}
        disabled={isSendingMessage}
        onChange={handleOnChange}
        placeholder='Title'
        required
      />

      {!message.title && messageIsInvalid && (
        <div className='invalid-feedback invalid-feedback--title'>
          Please provide a title.
        </div>
      )}

      <textarea
        name='body'
        id='textarea-message'
        onChange={handleOnChange}
        value={message.body}
        className={`form-control ${messageIsInvalid &&
          !message.body &&
          'is-invalid'}`}
        placeholder='Message'
        cols='30'
        rows='10'
        disabled={isSendingMessage}
        required
      ></textarea>

      {!message.body && messageIsInvalid && (
        <div className='invalid-feedback'>Please provide a message.</div>
      )}

      <button
        className={`btn-${
          isSendingMessage ? 'secondary' : 'primary'
        } send-btn btn-xl`}
        onClick={e => handleSendMessage(e)}
        disabled={isSendingMessage}
      >
        {isSendingMessage ? 'Sending...' : 'Send'}
        <span className={`btn-spinner${isSendingMessage ? ' is-sending' : ''}`}>
          <HashLoader sizeUnit={'px'} size={16} color={'#144'} />
        </span>
      </button>
    </form>
  )
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(ContactSection)
