import React from 'react'

const SocialLinks = ({ classNames }) => {
  const links = (
    <>
      <a
        className='link'
        href='https://www.pinterest.ph/themomnurseyogi'
        target='_blank'
        rel='noopener noreferrer'
      >
        <i className='fa fa-pinterest' />
      </a>

      <a
        href='https://www.instagram.com/themomnurseyogi/'
        rel='noopener noreferrer'
        target='_blank'
      >
        <i className='fa fa-instagram' />
      </a>

      <a href='#!' target='_blank' rel='noopener noreferrer'>
        <i className='fa fa-twitter' />
      </a>

      <a
        href='https://facebook.com/Themomnurseyogi-212826675960139/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <i className='fa fa-facebook' />
      </a>
    </>
  )

  // Has no className return
  return !classNames ? (
    <>{links}</>
  ) : (
    <span className={`${classNames} align-items-center`}>{links}</span>
  )
}

export default SocialLinks
