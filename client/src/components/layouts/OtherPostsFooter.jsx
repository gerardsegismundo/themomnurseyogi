import React from 'react'
import { connect } from 'react-redux'
import OtherPostFooter from '../common/OtherPostFooter'

const OtherPostsFooter = ({ randomPosts }) => {
  return (
    <div className='other-posts-footer container-fluid'>
      <div className='row'>
        {randomPosts &&
          randomPosts.map(props => (
            <OtherPostFooter {...props} key={props._id} />
          ))}
      </div>
    </div>
  )
}

const mapStateToProps = ({ posts }) => ({
  randomPosts: posts.randomPosts
})

export default connect(mapStateToProps)(OtherPostsFooter)
