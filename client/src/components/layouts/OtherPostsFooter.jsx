import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getPostLink, renderHashtags } from '../../helpers/func'
import { changeOtherPosts } from '../../redux/post/post.actions'

const OtherPostsFooter = ({ randomPosts, changeOtherPosts }) => {
  return (
    <div className='other-posts-footer container-fluid'>
      <div className='row'>
        {randomPosts &&
          randomPosts.map(({ _id, title, imgURL, hashtags, date }) => (
            <div className='post col-sm-12 col-md-6 col-xl-3 d-flex' key={_id}>
              <Link
                onClick={() => changeOtherPosts(_id)}
                to={getPostLink(title, _id)}
                className='post__img-container'
              >
                <figure
                  className='post__img-container__img'
                  style={{ backgroundImage: `url(${imgURL})` }}
                />{' '}
              </Link>
              <div className='post__labels'>
                <p className='post__labels--date'>{date}</p>
                <Link
                  to={getPostLink(title, _id)}
                  onClick={() => changeOtherPosts(_id)}
                >
                  <h4 className='post__labels--title'>{title}</h4>
                </Link>
                <p className='post__labels--hashtags'>
                  {renderHashtags(hashtags, 3)}
                </p>
                <Link
                  onClick={() => changeOtherPosts(_id)}
                  to={getPostLink(title, _id)}
                  className='post__labels--read-more'
                >
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
  randomPosts: posts.randomPosts
})

export default connect(mapStateToProps, { changeOtherPosts })(OtherPostsFooter)
