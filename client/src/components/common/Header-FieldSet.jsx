import React, { useState, useRef } from 'react'
import { connect } from 'react-redux'
import { searchPost } from '../../_actions/postActions'

const HeaderFieldSet = ({ searchPost, post }) => {
  const [isActive, setIsActive] = useState(false)

  const searchInput = useRef()

  const onSearch = () => {
    setIsActive(!isActive)
    searchInput.current.focus()
  }

  const onChange = e => {
    searchPost(searchInput.current.value)
    console.log(post)
  }

  let searchInputClass = isActive ? '__is-active' : ''

  return (
    <section className='header__fieldset col d-none d-md-flex flex justify-content-end'>
      <button className='btn btn-lg btn-txt btn--search' onClick={onSearch}>
        <i className='fa fa-search' aria-hidden='true' />
      </button>
      <input
        type='search'
        className={'search-input' + searchInputClass}
        placeholder='Search blog'
        onChange={onChange}
        ref={searchInput}
      />
      <button className='btn btn-lg btn-txt btn--signin'>Sign in</button>
      <button className='btn btn-lg btn-outline-dark btn--signup'>
        Sign up
      </button>
    </section>
  )
}

const mapStateToProps = state => ({
  post: state.posts.post
})

export default connect(
  mapStateToProps,
  { searchPost }
)(HeaderFieldSet)
