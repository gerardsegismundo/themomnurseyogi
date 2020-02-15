import React from 'react'
import { connect } from 'react-redux'
import { getPostLink, renderHashtags, formatDate } from '../../helpers/func'
import { changeOtherPosts } from '../../redux/post/post.actions'

const OtherPostsFooter = ({ randomPosts, changeOtherPosts }) => {
  return (
    <div className='other-posts-footer container-fluid'>
      <div className='row'>
        {randomPosts &&
          randomPosts.map(({ _id, title, imgURL, hashtags, date }) => (
            <div className='post col-sm-12 col-md-6 col-xl-3 d-flex' key={_id}>
              <a
                onClick={() => changeOtherPosts(_id)}
                href={getPostLink(title, _id)}
                className='post__img-container'
              >
                <figure
                  className='post__img-container__img'
                  style={{ backgroundImage: `url(${imgURL})` }}
                />{' '}
              </a>
              <div className='post__labels'>
                <p className='post__labels--date'>{formatDate(date)}</p>
                <a
                  href={getPostLink(title, _id)}
                  onClick={() => changeOtherPosts(_id)}
                >
                  <h4 className='post__labels--title'>{title}</h4>
                </a>
                <p className='post__labels--hashtags'>
                  {renderHashtags(hashtags, 3)}
                </p>
                <a
                  onClick={() => changeOtherPosts(_id)}
                  href={getPostLink(title, _id)}
                  className='post__labels--read-more'
                >
                  Read more
                </a>
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
