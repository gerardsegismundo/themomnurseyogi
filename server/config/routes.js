const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
require('express-async-errors')

// Models
require('../models/Post')
require('../models/Comment')
require('../models/Message')

// Routes
const postRoute = require('../routes/post.routes')
const commentRoute = require('../routes/comment.routes')
const messageRoute = require('../routes/message.routes')
const notFound = require('../routes/notFound.routes')

module.exports = app => {
  app.use(helmet())
  app.use(cors())
  app.use(express.json({ extended: false }))

  app.use('/api/posts', postRoute)
  app.use('/api/comments', commentRoute)
  app.use('/api/messages', messageRoute)
  app.use('/api/*', notFound)
}
