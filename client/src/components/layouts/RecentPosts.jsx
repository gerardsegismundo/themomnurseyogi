import React from 'react'
import RecentPost from '../common/RecentPost'
import { connect } from 'react-redux'

const RecentPosts = ({ recentPosts }) => {
  return (
    <section className='recent-posts col-sm-12 col-lg-8 col-xl-7 order-3 order-lg-1 mr-xl-5'>
      <hr className='d-block my-5 d-lg-none wide' />
      <h3 className='recent-posts--heading'> # Recent posts </h3>

      {recentPosts &&
        recentPosts.map(post => <RecentPost key={post._id} {...post} />)}
    </section>
  )
}

const mapStateToProps = ({ posts }) => ({
  recentPosts: posts.recentPosts
})

export default connect(mapStateToProps)(RecentPosts)
