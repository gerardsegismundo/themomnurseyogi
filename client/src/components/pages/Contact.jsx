import React from 'react'
import Aside from '../layouts/Aside'
import ContactSection from '../layouts/ContactSection'

const Contact = () => {
  return (
    <>
      <figure className='contact__cover-img'></figure>
      <div class='contact container'>
        <div className='row'>
          <ContactSection />
          <Aside subscribeSectionClass='aside-contact' />
        </div>
      </div>
    </>
  )
}

export default Contact
