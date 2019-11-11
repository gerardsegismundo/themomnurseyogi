// Keys for dev and prod
if (process.env.NODE_ENV === 'production') {
  return (module.exports = require('./prod.keys'))
} else {
  module.exports = require('./dev.keys')
}
