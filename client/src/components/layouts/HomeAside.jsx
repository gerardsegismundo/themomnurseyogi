import React from 'react'
import profileImage from '../../assets/profile.jpg'
import HomeAsideOtherPost from './HomeAsideOtherPost'
import Ads from '../common/Ads'

const HomeAside = () => {
  return (
    <aside className='col-sm-12 col-lg-4 d-flex-row order-2'>
      <center>
        <img
          src={profileImage}
          className='profile-image img-fluid'
          alt='profile'
        />

        <hgroup className='subscribe-text'>
          <h4 className='subscribe-text--primary'>Subscribe</h4>
          <h5 className='subscribe-text--secondary'>to my Blog</h5>
        </hgroup>

        <div className='about'>
          <h2 className='about__name'>I'm Maydee Segismundo</h2>
          <p className='about__content'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            dolorem sit fugit, quia, reprehenderit natus maiores officia qui
            consequuntur provident, nobis soluta quod. Dolor ea amet ipsum?
            Corrupti, sunt? Nemo!
          </p>
        </div>
      </center>

      <HomeAsideOtherPost />
      <HomeAsideOtherPost />
      <HomeAsideOtherPost />
      <HomeAsideOtherPost />
      <Ads />
    </aside>
  )
}

export default HomeAside
