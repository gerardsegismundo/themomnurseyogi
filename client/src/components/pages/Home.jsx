import React from 'react'
import RecentPosts from '../layouts/RecentPosts'
import Aside from '../layouts/Aside'

const Home = () => (
  <div className='home-page'>
    <figure className='cover-image' />
    <div className='container'>
      <div className='row'>
        <RecentPosts />
        <Aside subscribeSectionClass='aside-home' />
      </div>
    </div>
  </div>
)

export default Home
