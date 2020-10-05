import React, { useState } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { NotificationManager } from 'react-notifications'

const ContactForm = ({ currentUser }) => {
  const [form, setForm] = useState({
    message: '',
    title: '',
    email: ''
  })

  const [errors, setErrors] = useState({
    message: '',
    title: '',
    email: ''
  })

  const [isSending, setIsSending] = useState(false)

  const handleOnChange = e => {
    errors[e.target.name] && setErrors({ ...errors, [e.target.name]: '' })

    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleOnSubmit = async e => {
    e.preventDefault()

    setIsSending(true)

    let response

    try {
      response = await axios.post('/api/email', form)
    } catch (err) {
      NotificationManager.error('Message sending failed.', 'Error!', 5000)
    }

    if (!response.data.success) {
      let temp = {}

      response.data.errorDetails.map(({ key, message }) => {
        temp = { ...temp, [key]: message }
      })

      setErrors({ ...errors, ...temp })
      console.log(temp)
    }

    if (response) NotificationManager.success('Message sent.', 'Success', 5000)
    setIsSending(false)
    setForm({ ...form, message: '', title: '', email: '' })
  }

  return (
    <form className='contact-form' onSubmit={handleOnSubmit}>
      <input
        type='text'
        name='email'
        className={`form-control ${errors.email && 'is-invalid'}`}
        placeholder='Email'
        value={form.email}
        onChange={handleOnChange}
        disabled={isSending}
        /* required */
      />

      {errors.email && <div className='invalid-feedback'>{errors.email}</div>}

      <input
        type='text'
        name='title'
        className={`form-control ${errors.title && 'is-invalid'}`}
        value={form.title}
        disabled={isSending}
        onChange={handleOnChange}
        placeholder='Title'
        /* required */
      />

      {errors.title && <div className='invalid-feedback'>{errors.title}</div>}

      <textarea
        name='message'
        id='textarea-message'
        onChange={handleOnChange}
        value={form.message}
        className={`form-control ${errors.message && 'is-invalid'}`}
        placeholder='Message'
        cols='30'
        rows='10'
        disabled={isSending}
        /* required */
      ></textarea>

      {errors.message && (
        <div className='invalid-feedback'>{errors.message}</div>
      )}

      <button
        className={`btn-${isSending ? 'secondary' : 'primary'} send-btn btn-xl`}
        disabled={isSending}
      >
        {isSending ? 'Sending...' : 'Send'}
      </button>
    </form>
  )
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(ContactForm)
