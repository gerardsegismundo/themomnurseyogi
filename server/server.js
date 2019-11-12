const express = require('express')
const app = express()
const path = require('path')

require('./config/db')()
require('./config/routes')(app)
// require('./config/productionAsset')(app)

if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'))

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  )
}

// Port
const PORT = process.env.PORT || 5000
app.listen(PORT)
