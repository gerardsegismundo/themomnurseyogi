import { useEffect } from 'react'

let allowCallbackA = true
let allowCallbackB = true

const useStickOnTop = (pageYOffset, callbackA, callbackB) => {
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset >= pageYOffset) {
        if (allowCallbackA) {
          callbackA()
          allowCallbackA = false
          allowCallbackB = true
        }
      } else {
        if (allowCallbackB) {
          callbackB()
          allowCallbackB = false
          allowCallbackA = true
        }
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
    // eslint-disable-next-line
  }, [])
}

export default useStickOnTop
