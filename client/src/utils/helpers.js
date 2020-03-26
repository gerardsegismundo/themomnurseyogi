import React from 'react'
import uuid from 'react-uuid'

const sliceParagraph = body => body.slice(0, 200) + '...'

const formatDate = date =>
  new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

const getPostId = locationPath =>
  locationPath
    .split('/')[2]
    .split('-')
    .slice(-1)[0]

const getPostLink = (title, id) => {
  return `/post/${title
    .split(' ')
    .join('-')
    .toLowerCase()}-${id}`
}

const renderHashtags = (hashtags, slice = hashtags.length) =>
  hashtags &&
  hashtags
    .map(tag => (
      <span key={uuid()}>
        #{tag}
        {'  '}
      </span>
    ))
    .slice(0, slice)

export { formatDate, getPostId, getPostLink, renderHashtags, sliceParagraph }
