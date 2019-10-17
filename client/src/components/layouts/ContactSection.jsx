import React from 'react'
import SocialLinks from '../common/SocialLinks'
import { auth } from '../../firebase/firebase.utils'
import { connect } from 'react-redux'

const ContactContent = ({ currentUser }) => {
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
          name=''
          className='form-control'
          placeholder='Message'
          cols='30'
          rows='10'
          disabled={currentUser ? false : true}
        ></textarea>

        <button
          className='btn-primary btn-xl'
          disabled={currentUser ? false : true}
        >
          Send
        </button>
      </form>
    </div>
  )
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

export default connect(
  mapStateToProps,
  null
)(ContactContent)
