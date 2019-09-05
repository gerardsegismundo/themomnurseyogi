import React, { useState, useEffect } from 'react'
import Modal from './Modal'

const ModalSwitch = () => {
  const [isOpen, setIsOpen] = useState(true)

  useEffect(() => {
    document.addEventListener('click', handleClick)
    document.addEventListener('keydown', escFunction, false)

    return () => {
      document.removeEventListener('click', handleClick)
      document.removeEventListener('keydown', escFunction, false)
    }

    // eslint-disable-next-line
  }, [])

  const onModalOpen = () => {
    document.body.style.overflow = 'hidden'
    setIsOpen(true)
  }

  const onModalClose = () => {
    document.body.style.overflow = 'initial'
    document.body.style.overflowX = 'hidden'
    setIsOpen(false)
  }

  const handleClick = e => {
    const { tagName, className } = e.target

    if (tagName === 'BUTTON' && className.includes('btn--signup')) onModalOpen()
  }

  // Close modal on escape
  const escFunction = e => {
    if (isOpen && e.key === 'Escape') onModalClose()
  }

  return (
    <>{isOpen && <Modal setIsOpen={setIsOpen} onModalClose={onModalClose} />}</>
  )
}

export default ModalSwitch
