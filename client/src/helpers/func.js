import React, { useEffect } from 'react'

const formatDate = date => {
  const settings = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }

  return new Date(date).toLocaleDateString('en-US', settings)
}

const getPostId = locationPath => {
  return locationPath
    .split('/')[2]
    .split('-')
    .slice(-1)[0]
}

const getPostLink = (title, id) => {
  return `/post/${title
    .split(' ')
    .join('-')
    .toLowerCase()}-${id}`
}

const renderHashtags = (hashtags, title) => {
  return (
    hashtags && hashtags.map(tag => <li key={`${title} ${tag}`}>#{tag}</li>)
  )
}

const useOutsideClick = (ref, callback) => {
  const handleClick = e => {
    ref.current && !ref.current.contains(e.target) && callback()
  }

  useEffect(() => {
    document.addEventListener('click', handleClick)

    return () => document.removeEventListener('click', handleClick)
  })
}

export { formatDate, getPostId, getPostLink, renderHashtags, useOutsideClick }
