const express = require('express')
const helmet = require('helmet')
require('express-async-errors')

const posts = require('../routes/posts')
const notFound = require('../routes/notFound')

module.exports = app => {
  app.use(helmet())
  app.use(express.json({ extended: false }))

  app.use('/api/posts', posts)

  app.use('/api/*', notFound)
}
