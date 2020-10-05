import React, { useEffect, useState } from 'react'
import NavbarMobile from '../common/Navbar/Navbar.mobile'
import NavbarTab from '../common/Navbar/Navbar.tab'

const Navbar = () => {
  const [isScreenSmall, setIsScreenSmall] = useState()
  const smallScreenMediaQuery = window.matchMedia('(max-width: 767px)')

  // test if screen is small device
  const screenTest = e => setIsScreenSmall(e.matches)

  useEffect(() => {
    setIsScreenSmall(smallScreenMediaQuery.matches)
    smallScreenMediaQuery.addListener(screenTest)
    return () => smallScreenMediaQuery.removeListener(screenTest)
  }, [smallScreenMediaQuery])

  return isScreenSmall ? <NavbarMobile /> : <NavbarTab />
}

export default Navbar
