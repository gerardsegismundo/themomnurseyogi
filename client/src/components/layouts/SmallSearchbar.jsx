import React, { useRef, useEffect } from 'react'
import { connect } from 'react-redux'
import { toggleSmallSearchbar, enableSticky } from '../../redux/ui/ui.actions'
import { CloseIcon } from './SvgIcons'

const SmallSearchbar = ({
  toggleSmallSearchbar,
  smallSearchbarIsOpen,
  enableSticky
}) => {
  // Focus on input on render
  const searchInputRef = useRef()
  useEffect(() => {
    if (smallSearchbarIsOpen) searchInputRef.current.focus()
  }, [smallSearchbarIsOpen])

  const onClearSearch = () => {
    searchInputRef.current.blur()
    searchInputRef.current.value = ''
  }

  const closeSmallSearchBar = () => {
    if (window.pageYOffset >= 220) enableSticky()
    toggleSmallSearchbar(smallSearchbarIsOpen)
    onClearSearch()
  }

  const onChange = async => {
    const text = searchInputRef.current.value
    console.log(text)
  }

  return (
    smallSearchbarIsOpen && (
      <div
        className={`searchbar-sm_overlay${
          smallSearchbarIsOpen ? ' is-open ' : ''
        }d-flex d-md-none`}
      >
        <CloseIcon onClick={closeSmallSearchBar} />
        <div
          className={`searchbar-sm${smallSearchbarIsOpen ? ' is-open' : ''}`}
        >
          <i className='fa fa-search' />
          <input
            ref={searchInputRef}
            type='search'
            className='searchbar-sm__input form-control'
            placeholder='Search blog'
            onChange={onChange}
          />
        </div>
      </div>
    )
  )
}

const mapStateToProps = ({ ui }) => ({
  smallSearchbarIsOpen: ui.smallSearchbarIsOpen
})

export default connect(
  mapStateToProps,
  { toggleSmallSearchbar, enableSticky }
)(SmallSearchbar)
