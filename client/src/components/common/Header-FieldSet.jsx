import React, { useState, useRef } from 'react'
import { connect } from 'react-redux'

import PostItem from '../common/Header-FieldSet-PostItem'
import { searchPost, clearSearch } from '../../_actions/postActions'

const HeaderFieldSet = ({ searchResult, clearSearch, searchPost }) => {
  const [searchbarIsActive, setSearchbarIsActive] = useState(false)

  const searchInput = useRef()

  const onClearSearch = () => {
    searchInput.current.blur()
    searchInput.current.value = ''
    clearSearch()
  }

  const onClickSearch = () => {
    setSearchbarIsActive(!searchbarIsActive)
    document.activeElement.blur()

    if (!searchbarIsActive) return searchInput.current.focus()
    onClearSearch()
  }

  // @issue Displays null on first input. (thoughts: framework issue)
  const onChange = async () => {
    const text = searchInput.current.value
    searchPost(text)
  }

  let searchInputClass = `search-post__input ${
    searchbarIsActive ? 'is-active' : ''
  }`

  return (
    <section className='header__fieldset col d-none d-md-flex flex justify-content-end'>
      <div className='search-post d-flex-row trigger-search'>
        <button
          className='btn btn-lg btn-txt btn--search trigger-search'
          onClick={onClickSearch}
        >
          <i className='fa fa-search trigger-search' aria-hidden='true' />
        </button>

        <input
          type='search'
          className={`${searchInputClass} trigger-search`}
          placeholder='Search blog'
          onChange={onChange}
          ref={searchInput}
        />

        {searchResult && searchResult.length > 0 && (
          <div className='search-post__results ml-5 trigger-search'>
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
  searchResult: state.posts.searchResult
})

export default connect(
  mapStateToProps,
  { clearSearch, searchPost }
)(HeaderFieldSet)
