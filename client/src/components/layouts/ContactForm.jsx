import React, { useState } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { NotificationManager } from 'react-notifications'
import HashLoader from 'react-spinners/HashLoader'

const ContactSection = ({ currentUser }) => {
  const [message, setMessage] = useState({
    title: '',
    email: '',
    body: ''
  })

  const [isSendingMessage, setIsSendingMessage] = useState(false)
  const [messageIsInvalid, setMessageIsInvalid] = useState(false)

  const handleOnChange = e => {
    if (messageIsInvalid && e.target.value.length > 0) {
      setMessageIsInvalid(false)
    }

    setMessage({ ...message, [e.target.name]: e.target.value })
  }

  const handleOnSubmit = async e => {
    e.preventDefault()

    setIsSendingMessage(true)

    let response

    try {
      response = await axios.post('/api/messages', message)
      console.log(response)
    } catch (err) {
      NotificationManager.error('Message sending failed.', 'Error!', 5000)
    }

    setTimeout(() => {
      if (response)
        NotificationManager.success('Message sent.', 'Success', 5000)
      setIsSendingMessage(false)
      // setMessage({ ...message, body: '', title: '', email: '' })
    }, 2000)
  }

  return (
    <form className='contact-form' onSubmit={handleOnSubmit}>
      <input
        type='text'
        name='email'
        className={`form-control ${messageIsInvalid &&
          !message.email &&
          'is-invalid'}`}
        placeholder='Email'
        value={message.email}
        onChange={handleOnChange}
        disabled={isSendingMessage}
        /* required */
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
        /* required */
      />

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
        /* required */
      ></textarea>

      <button
        className={`btn-${
          isSendingMessage ? 'secondary' : 'primary'
        } send-btn btn-xl`}
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
