import React, { useState, useEffect } from 'react'
import Modal from './Modal'

const ModalSwitch = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

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
    setIsModalOpen(true)
  }

  const onModalClose = () => {
    document.body.style.overflow = 'initial'
    document.body.style.overflowX = 'hidden'
    setIsModalOpen(false)
  }

  const handleClick = e => {
    const { tagName, className } = e.target

    if (tagName === 'BUTTON' && className.includes('btn--signup')) onModalOpen()
  }

  // Close modal on escape
  const escFunction = e => {
    if (isModalOpen && e.key === 'Escape') onModalClose()
  }

  return (
    <>
      {isModalOpen && (
        <Modal setIsModalOpen={setIsModalOpen} onModalClose={onModalClose} />
      )}
    </>
  )
}

export default ModalSwitch
