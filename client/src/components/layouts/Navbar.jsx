import React, { useEffect, useState } from 'react'
import NavbarSmall from '../common/Navbar/NavbarSmall'
import NavbarMedium from '../common/Navbar/NavbarMedium'

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

  return isScreenSmall ? <NavbarSmall /> : <NavbarMedium />
}

export default Navbar
