import React from 'react'
import SocialLinks from '../common/SocialLinks'

const ContactContent = () => {
  return (
    <div className='contact-section col'>
      <h2 className='contact-section__title'># Contact</h2>
      <p className='contact-section__body'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
        accusamus quo illum, magnam quidem vel in ratione officia voluptatibus,
        consequuntur deserunt, iure doloremque delectus sint.
      </p>
      <SocialLinks classNames='contact-section__social-links' />
      <form className='contact-section__form'>
        <input type='text' className='form-control' placeholder='Name' />

        <input type='text' className='form-control' placeholder='Email' />

        <textarea
          name=''
          className='form-control'
          placeholder='Message'
          id=''
          cols='30'
          rows='10'
        ></textarea>

        <button className='btn-primary btn-xl'>Send</button>
      </form>
    </div>
  )
}

export default ContactContent
