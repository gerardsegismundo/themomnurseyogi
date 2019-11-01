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
  const onKeyDown = e => {
    if (condition && e.key === 'Escape') callback()
  }

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown, false)

    return () => {
      document.removeEventListener('keydown', onKeyDown, false)
    }
    // eslint-disable-next-line
  }, [condition])

  useOutsideClick(ref, () => {
    if (condition) {
      console.log('CONDITION!')
      return callback()
    }
    return null
  })
}

const useConfirmOnEnter = (condition, callback) => {
  const onKeyDown = e => {
    if (condition && e.key === 'Enter') callback()
  }

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown, false)

    return () => {
      document.removeEventListener('keydown', onKeyDown, false)
    }
    // eslint-disable-next-line
  }, [condition])
}

const useOnKeyDownEnter = (activeElementId, callback) => {
  const onKeyDown = e => {
    // if (e.key === 'Enter' && document.activeElement.id === activeElementId)
    //   callback(e)
    if (document.activeElement.id === activeElementId) {
      if (e.keyCode === 13 && e.shiftKey) return
      else if (e.key === 'Enter') callback(e)
    }
  }
  useEffect(() => {
    document.addEventListener('keydown', onKeyDown, false)

    return () => {
      document.removeEventListener('keydown', onKeyDown, false)
    }
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
