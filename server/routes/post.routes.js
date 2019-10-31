const express = require('express')
const router = express.Router()

const { model } = require('mongoose')
const Post = model('post')

// @route GET /
// @desc get all posts
router.get('/', async (req, res) => {
  const posts = await Post.find().sort({ date: -1 })
  if (!posts) return res.status(400).send('Failed loading posts')

  res.json(posts)
})

// @route POST /
// @desc  Add post
router.post('/', async (req, res) => {
  const { title, imgURL, body, hashtags } = req.body

  const date = new Date()

  const newPost = new Post({
    title,
    imgURL,
    body,
    hashtags,
    date
  })

  await newPost.save()
  res.json(newPost)
})

module.exports = router
