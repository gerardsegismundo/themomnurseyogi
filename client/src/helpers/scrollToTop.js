import { useEffect } from 'react'

export default function ScrollToTopOnMount() {
  useEffect(() => {
    console.log('youW!')
    window.scrollTo(0, 0)
  }, [])

  return null
}
