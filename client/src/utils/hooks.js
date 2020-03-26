import { useEffect } from 'react'

const useOutsideClick = (ref, callback) => {
  const handleClick = e =>
    ref.current && !ref.current.contains(e.target) && callback()

  useEffect(() => {
    document.addEventListener('click', handleClick)

    return () => document.removeEventListener('click', handleClick)
  })
}

const useEscapeClick = (condition, callback) => {
  const onKeyDown = e => condition && e.key === 'Escape' && callback()

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown, false)

    return () => document.removeEventListener('keydown', onKeyDown, false)

    // eslint-disable-next-line
  }, [condition])
}

const useOutsideAndEscapeClick = (ref, condition, callback) => {
  useEscapeClick(condition, callback)
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
  useOutsideClick,
  useEscapeClick,
  useOutsideAndEscapeClick,
  useOnKeyDownEnter,
  useConfirmOnEnter
}
