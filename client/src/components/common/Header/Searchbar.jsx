import React, { useState, useRef } from 'react'

import PostItem from '../../common/Header/PostItem'

import { connect } from 'react-redux'
import { searchPost, clearSearch } from '../../../redux/post/post.actions'
import { useOutsideClick } from '../../../helpers/func'

const Searchbar = ({ searchResult, clearSearch, searchPost }) => {
  const [searchbarIsActive, setSearchbarIsAcive] = useState(false)

  const clickOut = useRef()

  // Close search bar on click outside.
  useOutsideClick(clickOut, () => {
    searchbarIsActive && setSearchbarIsAcive(false)
    clearSearch()
  })

  const searchInput = useRef()
  const onClearSearch = () => {
    searchInput.current.blur()
    searchInput.current.value = ''
    clearSearch()
  }

  const onClickSearch = () => {
    setSearchbarIsAcive(!searchbarIsActive)
    document.activeElement.blur()

    if (!searchbarIsActive) return searchInput.current.focus()
    onClearSearch()
  }

  const onChange = async () => {
    const text = searchInput.current.value
    searchPost(text)
  }

  let searchInputClass = `search-post__input ${
    searchbarIsActive ? 'is-active' : ''
  }`
  return (
    <div className='search-post d-flex-row'>
      <div ref={clickOut}>
        <button
          className='btn btn-lg btn-txt btn--search'
          onClick={onClickSearch}
        >
          <i className='fa fa-search' aria-hidden='true' />
        </button>

        <input
          type='search'
          className={searchInputClass}
          placeholder='Search blog'
          onChange={onChange}
          ref={searchInput}
        />
      </div>

      {searchResult && searchResult.length > 0 && (
        <div className='search-post__results ml-5'>
          <div className='search-post__results--arrow' />

          <ul className='search-post__results--lists' onClick={onClearSearch}>
            {searchResult.map(({ _id, title }) => (
              <PostItem key={_id} title={title} id={_id} />
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

export default connect(
  mapStateToProps,
  { clearSearch, searchPost }
)(Searchbar)
