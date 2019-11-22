import React, { useEffect, useMemo } from 'react'
import queryString from 'query-string'

import {
  useParams,
  useLocation,
  useHistory,
  useRouteMatch
} from 'react-router-dom'

function useRouter() {
  const params = useParams()
  const location = useLocation()
  const history = useHistory()
  const match = useRouteMatch()

  // Return our custom router object
  // Memoize so that a new object is only returned if something changes
  return useMemo(() => {
    return {
      // For convenience add push(), replace(), pathname at top level
      push: history.push,
      replace: history.replace,
      pathname: location.pathname,
      // Merge params and parsed query string into single "query" object
      // so that they can be used interchangeably.
      // Example: /:topic?sort=popular -> { topic: "react", sort: "popular" }
      query: {
        ...queryString.parse(location.search), // Convert string to object
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

// Component that attaches scroll to top hanler on router change
// renders nothing, just attaches side effects
const ScrollToTopController = () => {
  // this assumes that current router state is accessed via hook
  // but it does not matter, pathname and search (or that ever) may come from props, context, etc.
  const { pathname, search } = useRouter()

  // just run the effect on pathname and/or search change
  useEffect(() => {
    try {
      // trying to use new API - https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTofsadfsafsd
      window.scroll({
        top: 318,
        left: 0
        // behavior: 'smooth'
      })
    } catch (error) {
      // just a fallback for older browsers
      window.scrollTo(0, 0)
    }
  }, [pathname, search])

  // renders nothing, since nothing is needed
  return null
}
export default ScrollToTopController
