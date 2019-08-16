import React from 'react'

import Article from '../layouts/HomeArticle'
import Aside from '../layouts/HomeAside'

const Home = () => {
  return (
    <div className='home-page'>
      <figure className='cover-image ' />
      <div className='container'>
        <div className='row'>
          <Article />
          <Aside />
        </div>
      </div>
    </div>
  )
}

export default Home
