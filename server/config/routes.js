const express = require('express')
const passport = require('passport')
const helmet = require('helmet')

require('express-async-errors')
require('./passport')

const postRoute = require('../routes/postRoute')
const notFound = require('../routes/notFound')

module.exports = app => {
  app.use(helmet())
  app.use(passport.initialize())
  app.use(express.json({ extended: false }))

  app.use('/api/posts', postRoute)

  app.use('/api/*', notFound)
}
