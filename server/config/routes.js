const express = require('express')
const helmet = require('helmet')
require('express-async-errors')

const postRoute = require('../routes/postRoute')
const notFound = require('../routes/notFound')

module.exports = app => {
  app.use(helmet())
  app.use(express.json({ extended: false }))

  app.use('/api/posts', postRoute)

  app.use('/api/*', notFound)
}
