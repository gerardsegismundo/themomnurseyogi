import React, { useState, useRef } from 'react'

import SearchResults from '../../common/Header/SearchResults'

import { connect } from 'react-redux'
import { searchPost, clearSearch } from '../../../redux/post/post.actions'
import { useOutsideAndEscapeClick } from '../../../utils/hooks'

const Searchbar = ({ searchResult, clearSearch, searchPost }) => {
  const [searchbarIsActive, setSearchbarIsActive] = useState(false)
  const searchGroupRef = useRef()
  const searchInputRef = useRef()

  // Close searchbar on outsideClick and esc
  useOutsideAndEscapeClick(searchGroupRef, searchbarIsActive, () => {
    setSearchbarIsActive(false)
    onClearSearch()
  })

  const onClearSearch = () => {
    searchInputRef.current.blur()
    searchInputRef.current.value = ''
    clearSearch()
  }

  const toggleSearchIcon = () => {
    setSearchbarIsActive(!searchbarIsActive)
    document.activeElement.blur()

    if (!searchbarIsActive) return searchInputRef.current.focus()
    onClearSearch()
  }

  const onChange = async () => {
    const text = searchInputRef.current.value
    searchPost(text)
  }

  return (
    <div className='search-post d-flex-row'>
      <div ref={searchGroupRef}>
        <button
          className='btn btn-lg btn-txt btn--search'
          onClick={toggleSearchIcon}
        >
          <i className='fa fa-search' aria-hidden='true' />
        </button>

        <input
          type='search'
          className={`search-post__input ${
            searchbarIsActive ? 'is-active' : ''
          }`}
          placeholder='Search blog'
          onChange={onChange}
          ref={searchInputRef}
        />
      </div>

      {searchResult && searchResult.length > 0 && (
        <div className='search-post__results ml-5'>
          <div className='search-post__results--arrow' />
          <ul className='search-post__results--lists' onClick={onClearSearch}>
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
