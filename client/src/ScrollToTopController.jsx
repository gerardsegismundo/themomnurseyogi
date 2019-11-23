import { useState, useEffect, useMemo } from 'react'
import queryString from 'query-string'

import {
  useParams,
  useLocation,
  useHistory,
  useRouteMatch
} from 'react-router-dom'

const useRouter = () => {
  const params = useParams()
  const location = useLocation()
  const history = useHistory()
  const match = useRouteMatch()

  return useMemo(() => {
    return {
      push: history.push,
      replace: history.replace,
      pathname: location.pathname,
      query: {
        ...queryString.parse(location.search),
        ...params
      },
      // Include match, location, history objects so we have
      // access to extra React Router functionality if needed.
      match,
      location,
      history
    }
  }, [params, match, location, history])
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
  const { pathname, search } = useRouter()

  useEffect(() => {
    try {
      window.scroll({
        top: isScreenSmall ? 265 : 400,
        left: 0
        // behavior: 'smooth'
      })
    } catch (error) {
      // just a fallback for older browsers
      window.scrollTo(0, 0)
    }
  }, [pathname, search, isScreenSmall])

  return null
}

export default ScrollToTopController
