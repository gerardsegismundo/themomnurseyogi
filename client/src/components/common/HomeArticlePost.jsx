import React from 'react'

const Post = props => {
  const { title, imgURL, hashtags, date, body } = props

  const formatDate = date => {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }

    return new Date(date).toLocaleDateString('en-US', options)
  }

  return (
    <div className='post p-1'>
      <div className='text-center'>
        <p className='post__date'>{formatDate(date)}</p>

        <h2 className='post__title'>{title}</h2>

        {hashtags && (
          <ul className='post__hash-tags d-flex justify-content-center px-5'>
            {hashtags.map(tag => (
              <li key={title + tag}>#{tag}</li>
            ))}
          </ul>
        )}
      </div>

      <img className='post__img mb-5' src={imgURL} alt={title + 'image'} />

      <p className='post__body'>{body.slice(0, 200) + '...'}</p>

      <div className='post__footer d-flex align-content-center align-self-center justify-content-end'>
        <button className='btn-primary btn-xl'>Read more</button>
        <h2 className='post__footer--comments'>2 comments</h2>
      </div>
    </div>
  )
}

export default Post
