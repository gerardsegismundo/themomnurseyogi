import React, { useState, useEffect } from 'react'
import NavbarLinks from '../common/NavbarLinks'
import NavbarSmall from '../common/NavbarSmall'

const Navbar = () => {
  const [isFixed, setIsFixed] = useState(false)
  const [isFixed_md, setIsFixed_md] = useState(false)
  const [navIsOpen, setNavIsOpen] = useState(false)

  // Makes small nav stick on top on scroll
  useEffect(() => {
    const handleScroll = () => {
      window.pageYOffset >= 185 ? setIsFixed(true) : setIsFixed(false)
      window.pageYOffset >= 312 ? setIsFixed_md(true) : setIsFixed_md(false)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
    // eslint-disable-next-line
  }, [])

  // Medium to large screen nav classes
  let classNames_md = `nav-md d-none d-md-flex justify-content-around${
    isFixed_md ? ' sticky-top py-3 b-shadow' : ''
  }`

  return (
    <>
      <nav className={classNames_md}>
        <NavbarLinks setNavIsOpen={setNavIsOpen} />
      </nav>

      <NavbarSmall
        isFixed={isFixed}
        navIsOpen={navIsOpen}
        setNavIsOpen={setNavIsOpen}
      />
    </>
  )
}

export default Navbar
