import React, { useEffect } from 'react'
import uuid from 'react-uuid'

const formatDate = date => {
  const settings = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }

  return new Date(date).toLocaleDateString('en-US', settings)
}

const sliceParagraph = body => body.slice(0, 200) + '...'

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

const getThreeRandomPosts = posts =>
  [...posts].sort(() => 0.5 - Math.random()).slice(0, 3)

const getThreeRecentPosts = posts =>
  [...posts]
    .sort((a, b) => a.date - b.date)
    .slice(0, 3)
    .reverse()

const renderHashtags = hashtags => {
  return hashtags && hashtags.map(tag => <li key={uuid()}>#{tag}</li>)
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

const useOutsideAndEscapeClick = (ref, condition, callback) => {
  useEffect(() => {
    document.addEventListener('keydown', onKeyDown, false)

    return () => {
      document.removeEventListener('keydown', onKeyDown, false)
    }
    // eslint-disable-next-line
  }, [condition])

  const onKeyDown = e => {
    if (condition && e.key === 'Escape') callback()
  }

  useOutsideClick(ref, () => {
    if (condition) return callback()
    return null
  })
}

export {
  formatDate,
  getPostId,
  getPostLink,
  renderHashtags,
  useOutsideClick,
  getThreeRandomPosts,
  getThreeRecentPosts,
  sliceParagraph,
  useOutsideAndEscapeClick
}
