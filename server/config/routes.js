const express = require('express')
const helmet = require('helmet')
require('express-async-errors')

const posts = require('../routes/posts')
const route404 = require('../routes/route404')

module.exports = app => {
  app.use(helmet())
  app.use(express.json({ extended: false }))

  app.use('/api/posts', posts)
  app.use('/api/*', route404)
}
