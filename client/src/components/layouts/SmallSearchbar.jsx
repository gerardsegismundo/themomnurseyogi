import React, { useRef, useEffect } from 'react'
import { connect } from 'react-redux'
import { toggleSmallSearchbar, enableSticky } from '../../redux/ui/ui.actions'
import { CloseIcon } from './SvgIcons'
import { searchPost, clearSearch } from '../../redux/post/post.actions'

import SearchResults from '../common/Header/SearchResults'

const SmallSearchbar = ({
  toggleSmallSearchbar,
  smallSearchbarIsOpen,
  enableSticky,
  searchPost,
  clearSearch,
  searchResult
}) => {
  // Focus on input on render
  const searchInputRef = useRef()
  useEffect(() => {
    if (smallSearchbarIsOpen) searchInputRef.current.focus()
  }, [smallSearchbarIsOpen])

  const onClearSearch = () => {
    searchInputRef.current.blur()
    searchInputRef.current.value = ''
    clearSearch()
  }

  const closeSmallSearchBar = () => {
    if (window.pageYOffset >= 220) enableSticky()
    toggleSmallSearchbar(smallSearchbarIsOpen)
    onClearSearch()
  }

  const onChange = async => {
    const text = searchInputRef.current.value
    searchPost(text)
  }

  return (
    smallSearchbarIsOpen && (
      <div
        className={`searchbar-sm_overlay${
          smallSearchbarIsOpen ? ' is-open ' : ''
        }d-flex flex-column d-md-none`}
      >
        <CloseIcon onClick={closeSmallSearchBar} />
        <div
          className={`searchbar-sm${
            smallSearchbarIsOpen ? ' searchbar-sm--open' : ''
          }`}
        >
          <i
            className='searchbar-sm__search-icon fa fa-search'
            onClick={() => searchInputRef.current.focus()}
          />
          <input
            ref={searchInputRef}
            type='search'
            className='searchbar-sm__input form-control'
            placeholder='Search blog'
            onChange={onChange}
          />
        </div>

        {searchResult && searchResult.length > 0 && (
          <div className='search-results'>
            <ul className='search-results__lists' onClick={closeSmallSearchBar}>
              {searchResult.map(({ _id, title }) => (
                <SearchResults key={_id} title={title} id={_id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  )
}

const mapStateToProps = ({ ui, posts }) => ({
  smallSearchbarIsOpen: ui.smallSearchbarIsOpen,
  searchResult: posts.searchResult
})

export default connect(mapStateToProps, {
  toggleSmallSearchbar,
  enableSticky,
  searchPost,
  clearSearch
})(SmallSearchbar)
