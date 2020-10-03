// const debounce = (func, wait) => {
//   let timeout

//   return function executedFunction (...args) {
//     const later = () => {
//       clearTimeout(timeout)
//       func(...args)
//     }

//     clearTimeout(timeout)
//     timeout = setTimeout(later, wait)
//   }
// }

function debounce (fn, ms) {
  let timer

  return () => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      timer = null
      fn.apply(this, arguments)
    }, ms)
  }
}

export default debounce
