import React, { useState, useRef } from 'react'

import SearchResults from '../../common/Header/SearchResults'

import { connect } from 'react-redux'
import { searchPost, clearSearch } from '../../../redux/post/post.actions'
import { useOutsideAndEscapeClick } from '../../../utils/hooks'

import debounce from '../../../utils/debounce'

const Searchbar = ({ searchResult, clearSearch, searchPost }) => {
  const [searchbarIsActive, setSearchbarIsActive] = useState(false)
  const searchGroupRef = useRef()
  const searchInputRef = useRef()

  // Close searchbar on outsideClick and esc
  useOutsideAndEscapeClick(searchGroupRef, searchbarIsActive, () => {
    setSearchbarIsActive(false)
    handleClearSearch()
  })

  const handleClearSearch = () => {
    searchInputRef.current.blur()
    searchInputRef.current.value = ''
    clearSearch()
  }

  const handleToggle = () => {
    setSearchbarIsActive(!searchbarIsActive)
    document.activeElement.blur()

    if (!searchbarIsActive) return searchInputRef.current.focus()
    handleClearSearch()
  }

  const handleOnChange = async () => {
    const text = searchInputRef.current.value
    console.log('tae')
    debounce(searchPost(text), 50000)
  }

  return (
    <div className='search-post d-flex-row'>
      <div ref={searchGroupRef}>
        <button
          className='btn btn-lg btn-txt btn--search'
          onClick={handleToggle}
        >
          <i className='fa fa-search' aria-hidden='true' />
        </button>

        <input
          type='search'
          className={`search-post__input ${
            searchbarIsActive ? 'is-active' : ''
          }`}
          placeholder='Search blog'
          onChange={handleOnChange}
          ref={searchInputRef}
        />
      </div>

      {searchResult && searchResult.length > 0 && (
        <div className='search-post__results ml-5'>
          <div className='search-post__results--arrow' />
          <ul
            className='search-post__results--lists'
            onClick={handleClearSearch}
          >
            {searchResult.map(({ _id, title }) => (
              <SearchResults key={_id} title={title} id={_id} />
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

const mapStateToProps = ({ posts: { searchResult } }) => ({
  searchResult
})

export default connect(mapStateToProps, { clearSearch, searchPost })(Searchbar)
