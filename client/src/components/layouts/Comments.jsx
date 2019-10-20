import React from 'react'
import { auth } from '../../firebase/firebase.utils'
import { connect } from 'react-redux'

const Reply = ({ currentUser }) => {
  return (
    <div className='comments'>
      <div className='comments__heading row mb-5'>
        <h2 className='col'>Comments</h2>
        <p className='col text-right'>2 comments</p>
      </div>

      <ul>
        <li className='comment d-flex'>
          <img
            src='https://lh3.googleusercontent.com/a-/AAuE7mC39Zija_fiUTVY4xanSSLFGV0u3fQWhPxYZE0Q8w'
            alt='user'
            className='comment__author-avatar'
          />

          <div>
            <h4 className='comment__label'>
              Gerard Segismundo &nbsp;&nbsp;|&nbsp;&nbsp; Jan 29, 2018
            </h4>
            <p className='comment__msg'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
              repudiandae fugit explicabo earum, est porro obcaecati. Unde,
              necessitatibus? Eius, recusandae magni! Sit sapiente
              reprehenderit, quam voluptates minus rem fuga placeat.
            </p>
          </div>
        </li>

        <li className='comment d-flex'>
          <img
            src='https://lh3.googleusercontent.com/a-/AAuE7mC39Zija_fiUTVY4xanSSLFGV0u3fQWhPxYZE0Q8w'
            alt='user'
            className='comment__author-avatar'
          />

          <div>
            <h4 className='comment__label'>
              Gerard Segismundo &nbsp;&nbsp;|&nbsp;&nbsp; Jan 29, 2018
            </h4>
            <p className='comment__msg'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
              repudiandae fugit explicabo earum, est porro obcaecati. Unde,
              necessitatibus? Eius, recusandae magni! Sit sapiente
              reprehenderit, quam voluptates minus rem fuga placeat.
            </p>
          </div>
        </li>
      </ul>

      <div className='comments__reply'>
        <h2 className='comments__reply--heading'>Leave a reply</h2>

        {currentUser ? (
          <form className=' comments__reply--form'>
            <div>
              <img
                src={currentUser && auth.currentUser.photoURL}
                alt='current-user'
              />
              <textarea
                type='text'
                placeholder='Write a comment...'
                className='form-control col'
                rows='4'
              />
            </div>

            <button className='btn-primary btn-xl'>Publish</button>
          </form>
        ) : (
          <p>You must be logged in to comment.</p>
        )}
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Reply)
