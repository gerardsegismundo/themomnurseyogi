// Keys for dev and prod
const devKeys = require('./dev.keys')
const prodKeys = require('./prod.keys')

// export keys
process.env.NODE_ENV === 'production'
  ? (module.exports = prodKeys)
  : (module.exports = devKeys)
