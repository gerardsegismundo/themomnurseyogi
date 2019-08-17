import React from 'react'
import Post from '../common/HomeArticlePost'

import { connect } from 'react-redux'

const HomeArticle = ({ recentPosts }) => {
  console.log(recentPosts)
  return (
    <article className='col-sm-12 col-lg-8 order-3 order-lg-1'>
      <h3 className='recent-posts'> # Recent posts </h3>

      {recentPosts &&
        recentPosts.map(post => <Post key={post._id} {...post} />)}
    </article>
  )
}

const mapStateToProps = state => ({
  recentPosts: state.posts.posts
})

export default connect(mapStateToProps)(HomeArticle)
