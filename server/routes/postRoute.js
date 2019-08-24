const express = require('express')
const router = express.Router()

const { Post } = require('../models/Post')

// @route GET /recent
// @desc  Get recent posts
router.get('/recent', async (req, res) => {
  const posts = await Post.find({})
    .sort({ date: 'desc' })
    .limit(3)

  if (!posts) return res.status(400).send('Failed loading posts.')

  res.json(posts)
})

// @route GET /:id
// @desc  Get post by id
router.get('/:id', async (req, res) => {
  const post = await Post.find({ _id: req.params.id })
  if (!post) return res.status(400).send('Failed loading post.')

  res.json(post)
})

// @route POST /search-post
// @desc  Get search result
router.post('/search-post', async (req, res) => {
  const { text } = req.body

  // Search validation
  if (text == undefined || typeof text !== 'string') return res.end()

  // Get all posts from db
  const postTitles = await Post.find({}).select('title')
  if (!postTitles) return res.status(400).send('Failed loading posts')

  // Filter post titles
  const result = postTitles.filter(post => {
    const regex = new RegExp(`${text}`, 'gi')

    return post.title.match(regex)
  })

  res.json(result)
})

module.exports = router
