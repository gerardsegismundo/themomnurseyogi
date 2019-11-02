import React, { useEffect } from 'react'
import uuid from 'react-uuid'

const formatDate = date =>
  new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

const sliceParagraph = body => body.slice(0, 200) + '...'

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

const useOutsideClick = (ref, callback) => {
  const handleClick = e =>
    ref.current && !ref.current.contains(e.target) && callback()

  useEffect(() => {
    document.addEventListener('click', handleClick)

    return () => document.removeEventListener('click', handleClick)
  })
}

const useOutsideAndEscapeClick = (ref, condition, callback) => {
  const onKeyDown = e => condition && e.key === 'Escape' && callback()

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown, false)

    return () => document.removeEventListener('keydown', onKeyDown, false)

    // eslint-disable-next-line
  }, [condition])

  useOutsideClick(ref, () => (condition ? callback() : null))
}

const useConfirmOnEnter = (condition, callback) => {
  const onKeyDown = e => condition && e.key === 'Enter' && callback()

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown, false)

    return () => document.removeEventListener('keydown', onKeyDown, false)

    // eslint-disable-next-line
  }, [condition])
}

const useOnKeyDownEnter = (activeElementId, callback) => {
  const onKeyDown = e => {
    if (document.activeElement.id === activeElementId) {
      if (e.keyCode === 13 && e.shiftKey) return
      else if (e.key === 'Enter') callback(e)
    }
  }
  useEffect(() => {
    document.addEventListener('keydown', onKeyDown, false)

    return () => document.removeEventListener('keydown', onKeyDown, false)
  })
}

export {
  formatDate,
  getPostId,
  getPostLink,
  renderHashtags,
  useOutsideClick,
  sliceParagraph,
  useOutsideAndEscapeClick,
  useOnKeyDownEnter,
  useConfirmOnEnter
}
