import React from 'react'

const ButtonGroup = () => {
  return (
    <>
      <button className='btn--signin btn btn-lg btn-txt'>Sign in</button>

      <button
        id='sign-in'
        // onClick={onModalOpen}
        className='btn--signup btn btn-lg btn-outline-dark'
      >
        Sign up
      </button>
    </>
  )
}

export default ButtonGroup
