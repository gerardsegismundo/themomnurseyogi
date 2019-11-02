import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getRandomPosts } from '../../redux/post/post.actions'
import { getPostLink, renderHashtags, formatDate } from '../../helpers/func'
import { Link } from 'react-router-dom'

const OtherPostsFooter = ({ getRandomPosts, randomPosts }) => {
  useEffect(() => {
    getRandomPosts()
  }, [])

  return (
    <div className='other-posts-footer container-fluid'>
      <div className='row'>
        {randomPosts &&
          randomPosts.map(({ _id, title, imgURL, hashtags, date }) => (
            <div className='post col-sm-12 col-lg-6 col-xl-3 d-flex' key={_id}>
              <figure>
                <Link to={getPostLink(title, _id)}>
                  <img className='img-fluid' src={imgURL} alt='post' />
                </Link>
              </figure>
              <div className='right-col'>
                <p className='date'>{formatDate(date)}</p>
                <Link to={getPostLink(title, _id)}>
                  <h4 className='title'>{title}</h4>
                </Link>
                <p className='hashtags'>{renderHashtags(hashtags, 3)}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

const mapStateToProps = ({ posts }) => ({
  randomPosts: posts.randomPosts
})

export default connect(
  mapStateToProps,
  { getRandomPosts }
)(OtherPostsFooter)
