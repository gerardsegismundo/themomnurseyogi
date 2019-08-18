import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getPost } from '../../_actions/postActions'

const Post = ({ location, getPost, post }) => {
  const postId = location.pathname
    .split('/')[2]
    .split('-')
    .slice(-1)[0]

  useEffect(() => {
    getPost(postId)

    // eslint-disable-next-line
  }, [])

  const notFound = 'page Error'

  return (
    <div>
      <h1>{post ? post.title : notFound}</h1>
    </div>
  )
}

const mapStateToProps = state => ({
  post: state.posts.post
})

export default connect(
  mapStateToProps,
  { getPost }
)(Post)
