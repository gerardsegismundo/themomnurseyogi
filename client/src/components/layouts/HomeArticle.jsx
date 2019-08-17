import React from 'react'
import Post from '../common/HomePost'

const HomeArticle = () => {
  return (
    <article className='col-sm-12 col-lg-8 order-3 order-lg-1'>
      <h3 className='recent-posts'> # Recent posts </h3>

      <Post />
      <Post />
      <Post />
    </article>
  )
}

export default HomeArticle
