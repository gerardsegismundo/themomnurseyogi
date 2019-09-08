import React, { useEffect } from 'react'

import Article from '../layouts/HomeArticle'
import Aside from '../layouts/Aside'

import { connect } from 'react-redux'
import { getRecentPosts } from '../../_actions/postActions'

const Home = ({ getRecentPosts }) => {
  useEffect(() => {
    getRecentPosts()
    // eslint-disable-next-line
  }, [])

  return (
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
}

export default connect(
  null,
  { getRecentPosts }
)(Home)
