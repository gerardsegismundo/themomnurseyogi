import React from 'react'
import { connect } from 'react-redux'

const ButtonGroup = ({ auth }) => {
  console.log(auth)
  const renderContent = () => {
    switch (auth) {
      case null:
        return
      case false:
        return (
          <button
            id='sign-in'
            className='btn--signup btn btn-lg btn-outline-dark'
          >
            Sign in
          </button>
        )
      default:
        return (
          <li>
            <a href='/api/logout'>Signout</a>
          </li>
        )
    }
  }
  return <>{renderContent()}</>
}

const mapStateToProps = ({ auth }) => ({
  auth
})

export default connect(mapStateToProps)(ButtonGroup)
