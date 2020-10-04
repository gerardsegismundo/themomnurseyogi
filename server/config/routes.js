const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
require('express-async-errors')

// Models
require('../models/Post')

// Routes
const postRoute = require('../routes/post.routes')
const emailRoute = require('../routes/email.routes')

module.exports = app => {
  app.use(helmet())
  app.use(cors())
  app.use(express.json({ extended: false }))

  app.use('/api/posts', postRoute)
  app.use('/api/email', emailRoute)
}
