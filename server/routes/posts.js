const express = require('express')
const router = express.Router()

const { Post } = require('../models/Post')

router.get('/', async (req, res) => {
  const posts = await Post.find({}).sort({ date: 'desc' })
  if (!posts) return res.status(400).send('Failed loading posts.')

  res.json(posts)
})

// HACK FOR PROXY ERROR
router.get('/:id', async (req, res) => {
  const post = await Post.find({ _id: req.params.id })
  if (!post) return res.status(400).send('Failed loading post.')

  res.json(post)
})

module.exports = router
