const express = require('express')
const router = express.Router()

const { Post } = require('../models/Post')

// @route GET /
// @desc get posts
router.get('/', async (req, res) => {
  const posts = await Post.find({})
  if (!posts) return res.status(400).send('Failed loading posts.')

  res.json(posts)
})

module.exports = router
