import React from 'react'
import { useEffect } from 'react'

const getPostLink = (title, id) => {
  return `/post/${title
    .split(' ')
    .join('-')
    .toLowerCase()}-${id}`
}

const formatDate = date => {
  const settings = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }

  return new Date(date).toLocaleDateString('en-US', settings)
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

export { getPostLink, formatDate, renderHashtags, useOutsideClick }
