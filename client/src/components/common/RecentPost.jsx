import React from 'react'
import { Link } from 'react-router-dom'
import {
  getPostLink,
  formatDate,
  sliceParagraph,
  renderHashtags
} from '../../helpers/func'

const Post = ({ title, imgURL, hashtags, date, body, _id }) => (
  <div className='recent-post p-1'>
    <div className='text-center'>
      <p className='recent-post__date'>{formatDate(date)}</p>
      <h2 className='recent-post__title'>{title}</h2>
      {hashtags && (
        <ul className='recent-post__hash-tags d-flex justify-content-center px-5'>
          {renderHashtags(hashtags)}
        </ul>
      )}
    </div>

    <img
      className='recent-post__img mb-5 d-flex mx-auto'
      src={imgURL}
      alt={title + 'image'}
    />

    <p className='recent-post__body'>{sliceParagraph(body)}</p>

    <Link to={getPostLink(title, _id)}>
      <button className='recent-post__read-more btn-primary btn-xl align-content-center mb-2'>
        Read more
      </button>
    </Link>
  </div>
)

export default Post
