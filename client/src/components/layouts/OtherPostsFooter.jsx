import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getOtherRandomPosts } from '../../redux/post/post.actions'

const OtherPostsFooter = ({ getOtherRandomPosts, otherRandomPosts }) => {
  useEffect(() => {
    getOtherRandomPosts()
  }, [])
  return (
    <div className='container-fluid'>
      <div className='row'>
        {otherRandomPosts &&
          otherRandomPosts.map(post => <p key={post._id}>{post.title}</p>)}
      </div>
    </div>
  )
}

const mapStateToProps = ({ posts }) => ({
  otherRandomPosts: posts.otherRandomPosts
})

export default connect(
  mapStateToProps,
  { getOtherRandomPosts }
)(OtherPostsFooter)
