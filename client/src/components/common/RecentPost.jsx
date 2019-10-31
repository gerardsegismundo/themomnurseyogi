import React from 'react'
import { Link } from 'react-router-dom'
import {
  getPostLink,
  formatDate,
  sliceParagraph,
  renderHashtags
} from '../../helpers/func'

const Post = ({ title, imgURL, hashtags, date, body, _id }) => (
  <div className='post p-1'>
    <div className='text-center'>
      <p className='post__date'>{formatDate(date)}</p>

      <h2 className='post__title'>{title}</h2>

      {hashtags && (
        <ul className='post__hash-tags d-flex justify-content-center px-5'>
          {renderHashtags(hashtags)}
        </ul>
      )}
    </div>

    <img
      className='post__img mb-5 d-flex mx-auto'
      src={imgURL}
      alt={title + 'image'}
    />

    <p className='post__body'>{sliceParagraph(body)}</p>

    {/* <div className='post__footer d-flex align-content-center align-self-center justify-content-start'> */}

    <Link to={getPostLink(title, _id)}>
      <button className='btn-primary btn-xl align-content-center mb-2'>
        Read more
      </button>
    </Link>
    {/* </div> */}
  </div>
)

export default Post
