import React, { useState, useRef } from 'react'
import { useOutsideClick } from '../../../helpers/func'
import NavbarLinks from './NavbarLinks'
import { connect } from 'react-redux'
import { enableSticky, disableSticky } from '../../../redux/ui/ui.actions'
import useStickOnTop from './useStickOnTop'

const NavbarSmall = ({
  isSticky,
  enableSticky,
  disableSticky,
  smallSearchbarIsOpen
}) => {
  const [navIsOpen, setNavIsOpen] = useState(false)
  useStickOnTop(220, enableSticky, disableSticky)

  const smallNavbarRef = useRef()
  useOutsideClick(smallNavbarRef, () => navIsOpen && setNavIsOpen(false))

  return (
    !smallSearchbarIsOpen && (
      <nav
        className={`nav d-flex d-md-none mb-4 mt-4${
          isSticky ? ' sticky-top b-shadow' : ''
        }`}
        ref={smallNavbarRef}
      >
        <input
          type='checkbox'
          checked={navIsOpen}
          onChange={() => setNavIsOpen(!navIsOpen)}
          className='nav__checkbox'
          id='nav__toggle'
        />

        <label htmlFor='nav__toggle' className='nav__btn mx-auto d-flex'>
          <span className='nav__icon' />
        </label>

        <div className='nav__links'>
          <NavbarLinks setNavIsOpen={setNavIsOpen} />
        </div>
      </nav>
    )
  )
}

const mapStateToProps = ({ ui }) => ({
  isSticky: ui.isSticky,
  smallSearchbarIsOpen: ui.smallSearchbarIsOpen
})

export default connect(
  mapStateToProps,
  { enableSticky, disableSticky }
)(NavbarSmall)