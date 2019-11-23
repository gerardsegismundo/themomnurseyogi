import { useEffect, useMemo } from 'react'
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
  const { pathname, search } = useRouter()

  useEffect(() => {
    try {
      window.scroll({
        top: 320,
        left: 0
        // behavior: 'smooth'
      })
    } catch (error) {
      // just a fallback for older browsers
      window.scrollTo(0, 0)
    }
  }, [pathname, search])

  return null
}

export default ScrollToTopController
