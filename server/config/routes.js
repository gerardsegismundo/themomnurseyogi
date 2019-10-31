const express = require('express')
const passport = require('passport')
const cookieSession = require('cookie-session')
const helmet = require('helmet')
const cors = require('cors')
const { cookieKey } = require('../config/keys')
require('express-async-errors')

// Models
require('../models/User')
require('../models/Post')
require('../models/Comment')

// Routes
const authRoute = require('../routes/auth.routes')
const postRoute = require('../routes/post.routes')
const commentRoute = require('../routes/comment.routes')
const notFound = require('../routes/notFound.routes')

module.exports = app => {
  app.use(helmet())
  app.use(cors())
  app.use(express.json({ extended: false }))

  // Passport & cookies
  app.use(
    cookieSession({
      maxAge: 30 * 24 * 60 * 60 * 1000,
      keys: [cookieKey]
    })
  )
  app.use(passport.initialize())
  app.use(passport.session())
  require('../services/passport')

  // Routes
  app.use(authRoute)
  // app.use('/post/api/posts', postRoute) // fix route bug in getPost
  app.use('/api/posts', postRoute)
  app.use('/api/comments', commentRoute)
  app.use('/api/*', notFound)
}
