import React from 'react'

const getPostLink = (title, id) => {
  return `/post/${title
    .split(' ')
    .join('-')
    .toLowerCase()}-${id}`
}

const formatDate = date => {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }

  return new Date(date).toLocaleDateString('en-US', options)
}

const renderHashtags = (hashtags, title) => {
  return (
    hashtags && hashtags.map(tag => <li key={`${title} ${tag}`}>#{tag}</li>)
  )
}

export { getPostLink, formatDate, renderHashtags }
