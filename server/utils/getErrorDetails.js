const formatErrMsg = msg => {
  const removedQuote = msg.replace(/"/gi, '')

  return removedQuote.charAt(0).toUpperCase() + removedQuote.substring(1) + '.'
}

const getErrorDetails = error => {
  const errorDetails = error.details.map(d => {
    return { message: formatErrMsg(d.message), key: d.path[0] }
  })

  return errorDetails
}

module.exports = getErrorDetails
