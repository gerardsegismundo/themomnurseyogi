import React from 'react'
import { connect } from 'react-redux'
import { toggleSmallSearchbar } from '../../redux/ui/ui.actions'
import { CloseIcon } from './SvgIcons'

const SmallSearchbar = ({ toggleSmallSearchbar, smallSearchbarIsOpen }) => {
  return (
    smallSearchbarIsOpen && (
      <div
        className={`searchbar-sm_overlay${
          smallSearchbarIsOpen ? ' is-open ' : ''
        }d-flex d-md-none`}
      >
        <CloseIcon onClick={() => toggleSmallSearchbar(smallSearchbarIsOpen)} />
        <div
          className={`searchbar-sm${smallSearchbarIsOpen ? ' is-open' : ''}`}
        >
          <i className='fa fa-search' />
          <input
            type='search'
            className='searchbar-sm__input form-control'
            placeholder='Search blog'
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
  { toggleSmallSearchbar }
)(SmallSearchbar)
