import React from 'react'
import HashLoader from 'react-spinners/HashLoader'

const Spinner = ({ msg }) => {
  return (
    <div className='spinner'>
      <div className='items'>
        <HashLoader sizeUnit={'px'} size={50} color={'#144'} />
        <h2 className='spinner__msg'>{msg}</h2>
      </div>
    </div>
  )
}

export default Spinner
