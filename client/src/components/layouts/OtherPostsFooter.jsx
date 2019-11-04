import React from 'react'
import { connect } from 'react-redux'
import { getPostLink, renderHashtags, formatDate } from '../../helpers/func'
import { Link } from 'react-router-dom'

const OtherPostsFooter = ({ randomPosts }) => {
  return (
    <div className='other-posts-footer container-fluid'>
      <div className='row'>
        {randomPosts &&
          randomPosts.map(({ _id, title, imgURL, hashtags, date }) => (
            <div className='post col-sm-12 col-md-6 col-xl-3 d-flex' key={_id}>
              <Link to={getPostLink(title, _id)}>
                <figure style={{ backgroundImage: `url(${imgURL})` }} />{' '}
              </Link>
              <div className='right-col'>
                <p className='date'>{formatDate(date)}</p>
                <Link to={getPostLink(title, _id)}>
                  <h4 className='title'>{title}</h4>
                </Link>
                <p className='hashtags'>{renderHashtags(hashtags, 3)}</p>
                <Link to={getPostLink(title, _id)} className='read-more'>
                  Read more
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

const mapStateToProps = ({ posts }) => ({
  randomPosts: posts.filteredPosts.random
})

export default connect(
  mapStateToProps,
  {}
)(OtherPostsFooter)
