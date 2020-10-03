import React from 'react'
import Aside from '../layouts/Aside'
import ContactForm from '../layouts/ContactForm'
import SocialLinks from '../common/SocialLinks'

const Contact = () => {
  return (
    <>
      <figure className='contact__cover-img'></figure>
      <div className='contact container'>
        <div className='row'>
          <div className='contact-section col order-3 order-lg-1'>
            <hr className='d-block my-5 d-lg-none wide' />
            <h2 className='contact-section__title'># Contact</h2>
            <p className='contact-section__body'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
              accusamus quo illum, magnam quidem vel in ratione officia
              voluptatibus, consequuntur deserunt, iure doloremque delectus
              sint.
            </p>
            <SocialLinks classNames='contact-section__social-links' />
            <ContactForm />
          </div>
          <Aside subscribeSectionClass='aside-contact' showAsideItems={false} />
        </div>
      </div>
    </>
  )
}

export default Contact
