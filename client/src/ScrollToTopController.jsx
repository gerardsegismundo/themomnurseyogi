import { useState, useEffect, useMemo } from 'react'
import queryString from 'query-string'

import { useParams, useLocation, useHistory } from 'react-router-dom'

const useRouter = () => {
  const params = useParams()
  const location = useLocation()
  const history = useHistory()

  return useMemo(() => {
    return {
      push: history.push,
      replace: history.replace,
      pathname: location.pathname,
      query: {
        ...queryString.parse(location.search),
        ...params
      }
    }
  }, [params, location, history])
}

const ScrollToTopController = () => {
  // Window screen
  const [isScreenSmall, setIsScreenSmall] = useState()
  const smallScreenMediaQuery = window.matchMedia('(max-width: 767px)')

  // test if screen is small device
  const screenTest = e => setIsScreenSmall(e.matches)

  useEffect(() => {
    setIsScreenSmall(smallScreenMediaQuery.matches)
    smallScreenMediaQuery.addListener(screenTest)
    return () => smallScreenMediaQuery.removeListener(screenTest)
  }, [smallScreenMediaQuery])

  // Window scroll
  const { pathname } = useRouter()

  useEffect(() => {
    try {
      window.scroll({
        top: pathname === '/' ? 0 : isScreenSmall ? 265 : 350,
        left: 0
        // behavior: 'smooth'
      })
    } catch (err) {
      // just a fallback for older browsers
      window.scrollTo(0, 0)
    }
  }, [pathname, isScreenSmall])

  return null
}

export default ScrollToTopController
