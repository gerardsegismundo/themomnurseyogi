import React from 'react'
import profileImage from '../../assets/profile.jpg'

const HomeAsideOtherPost = () => {
  return (
    <section className='other-posts d-none d-lg-flex justify-content-center'>
      <div className=''>
        <img
          src={profileImage}
          className='other-posts__img img-fluid '
          alt='profile'
        />

        <p className='other-posts__date'>JANUARY 30, 2018</p>
        <a href='#!' className='other-posts__title'>
          My Fall Story
        </a>
        <ul className='other-posts__hashtags d-flex justify-content-start'>
          <li>#winter</li>
          <li>#love</li>
          <li>#moments</li>
          <li>#february</li>
        </ul>
      </div>
    </section>
  )
}

export default HomeAsideOtherPost
