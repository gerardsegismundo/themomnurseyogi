import React from 'react'
import Aside from '../layouts/Aside'
import ContactSection from '../layouts/ContactSection'

const Contact = () => {
  return (
    <>
      <figure className='contact__cover-img'></figure>
      <div className='contact container'>
        <div className='row'>
          <ContactSection />
          <Aside subscribeSectionClass='aside-contact' showAsideItems={false} />
        </div>
      </div>
    </>
  )
}

export default Contact
