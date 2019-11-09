import React from 'react'
import Article from '../layouts/HomeArticle'
import Aside from '../layouts/Aside'

const Home = () => (
  <div className='home-page'>
    <figure className='cover-image' />
    <div className='container'>
      <div className='row'>
        <Article />
        <Aside subscribeSectionClass='aside-home' />
      </div>
    </div>
  </div>
)

export default Home
