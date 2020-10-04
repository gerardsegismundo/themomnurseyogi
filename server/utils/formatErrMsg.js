const formatErrMsg = msg => {
  const removedQuote = msg.replace(/"/gi, '')

  return removedQuote.charAt(0).toUpperCase() + removedQuote.substring(1) + '.'
}

module.exports = formatErrMsg
