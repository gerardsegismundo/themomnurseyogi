import React, { useState, useRef } from 'react'
import { connect } from 'react-redux'

import PostItem from '../common/Header-FieldSet-PostItem'
import { getPosts } from '../../_actions/postActions'

const HeaderFieldSet = ({ getPosts, posts }) => {
  const [isActive, setIsActive] = useState(false)
  const [searchResult, setSearchResult] = useState('')

  const searchInput = useRef()

  const clearSearch = () => {
    searchInput.current.blur()
    searchInput.current.value = ''
    setSearchResult('')
  }

  const onSearch = () => {
    setIsActive(!isActive)
    document.activeElement.blur()

    if (!isActive) return searchInput.current.focus()
    clearSearch()
  }

  const filterPost = e => {
    const { value } = searchInput.current

    posts === null && getPosts()

    const result =
      value &&
      posts &&
      posts.filter(post => {
        const regex = new RegExp(`${value}`, 'gi')
        return post.title.match(regex)
      })

    setSearchResult(result || '')
  }

  let searchInputClass = `search-post__input ${isActive && 'is-active'}`

  return (
    <section className='header__fieldset col d-none d-md-flex flex justify-content-end'>
      <div className='search-post d-flex-row trigger-search'>
        <button
          className='btn btn-lg btn-txt btn--search trigger-search'
          onClick={onSearch}
        >
          <i className='fa fa-search trigger-search' aria-hidden='true' />
        </button>

        <input
          type='search'
          className={`${searchInputClass} trigger-search`}
          placeholder='Search blog'
          onChange={filterPost}
          ref={searchInput}
        />

        {searchResult && searchResult.length > 0 && (
          <div
            className='search-post__results ml-5 trigger-search'
            onClick={() => clearSearch()}
          >
            <div className='search-post__results--arrow trigger-search' />

            <ul className='search-post__results--lists trigger-search'>
              {searchResult.map(({ _id, title }) => (
                <PostItem
                  key={_id}
                  title={title}
                  id={_id}
                  classNames='trigger-search'
                />
              ))}
            </ul>
          </div>
        )}
      </div>

      <button className='btn btn-lg btn-txt btn--signin'>Sign in</button>
      <button className='btn btn-lg btn-outline-dark btn--signup'>
        Sign up
      </button>
    </section>
  )
}

const mapStateToProps = state => ({
  posts: state.posts.posts
})

export default connect(
  mapStateToProps,
  { getPosts }
)(HeaderFieldSet)
