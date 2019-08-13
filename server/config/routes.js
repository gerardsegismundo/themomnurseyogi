const express = require('express')
const helmet = require('helmet')
require('express-async-errors')

const sampleRoute = require('../routes/sampleRoute')
const route404 = require('../routes/route404')

module.exports = app => {
  app.use(helmet())
  app.use(express.json({ extended: false }))

  app.use('/api/sample-route', sampleRoute)
  app.use('/api/*', route404)
}
