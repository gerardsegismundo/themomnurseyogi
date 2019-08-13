const express = require('express')
const app = express()

// Routes
require('./config/routes')(app)
require('./config/db')()

// Serve static asssets in production
const path = require('path')
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('../client/build'))

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  )
}

// Port
const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
