const express = require('express')
const router = express.Router()

const { model } = require('mongoose')
const Post = model('post')

const validateComment = require('../validations/validateComment')
const formatErrMsg = require('../utils/formatErrMsg')

// @route    GET api/posts
// @desc     Get all posts
router.get('/', async (req, res) => {
  const posts = await Post.find().sort({ date: -1 })
  if (!posts) return res.status(400).send('Failed loading posts')

  res.json(posts)
})

// @route    PUT api/posts/like/:id/:user_id
// @desc     Like a post
router.put('/like/:id/:user_id', async (req, res) => {
  const { id, user_id } = req.params
  const post = await Post.findById(id)

  const isLiked = (() =>
    post.likes.filter(({ user }) => user.toString() === user_id).length > 0)()

  // Check if the post has already been liked
  if (isLiked)
    return res.status(400).json({ error: { msg: 'Post already liked.' } })

  post.likes.unshift({ user: user_id })

  await post.save()

  res.json(post.likes)
})

// @route    PUT api/posts/unlike/:id/:user_id
// @desc     Unlike a post
router.put('/unlike/:id/:user_id', async (req, res) => {
  const { id, user_id } = req.params
  const post = await Post.findById(id)

  const isLiked = (() =>
    post.likes.filter(({ user }) => user === user_id).length > 0)()

  // Check if the post has already been liked
  if (!isLiked)
    return res
      .status(400)
      .json({ error: { msg: 'Post has not yet been liked.' } })

  console.log(isLiked)
  // Get remove index
  const removeIndex = post.likes
    .map(like => like.user.toString())
    .indexOf(user_id)

  post.likes.splice(removeIndex, 1)

  await post.save()

  res.json(post.likes)
})

// @route    POST api/posts/comment/:id
// @desc     Add comment
router.post('/comment/:id', async (req, res) => {
  const { error } = validateComment(req.body)
  if (error) {
    const msg = formatErrMsg(error.details[0].message)

    return res
      .status(400)
      .json({ error: { keys: [error.details[0].context.key], msg } })
  }

  const post = await Post.findById(req.params.id)

  const { text, user, name, avatar } = req.body

  const newComment = {
    text,
    name,
    avatar,
    user
  }

  post.comments.push(newComment)

  await post.save()

  const recentComment = post.comments[post.comments.length - 1]

  res.json(recentComment)
})

// @route    PUT api/posts/comment/:id
// @desc     Update comment
router.put('/comment/:post_id/:comment_id/:user_id', async (req, res) => {
  const { text } = req.body

  if (!text) {
    return res.status(404).json({ error: { msg: 'Comment is required.' } })
  }

  const { post_id, comment_id, user_id } = req.params

  const post = await Post.findById(post_id)

  const comment = post.comments.find(comment => comment.id === comment_id)

  // If comment don't exists
  if (!comment) {
    return res.status(404).json({ error: { msg: 'Comment does not exists.' } })
  }

  // Checks user
  if (comment.user.toString() !== user_id) {
    return res.status(401).json({ error: { msg: 'User not authorized.' } })
  }

  // Get update index
  const updateIndex = post.comments
    .map(comment => comment.id)
    .indexOf(comment_id)

  post.comments[updateIndex].text = text

  await post.save()

  res.json(post.comments[updateIndex])
})

// @route    DELETE api/posts/comment/:id/:comment_id/:user_id
// @desc     Delete comment
router.delete('/comment/:post_id/:comment_id/:user_id', async (req, res) => {
  const { post_id, comment_id, user_id } = req.params

  const post = await Post.findById(post_id)
  const comment = post.comments.find(comment => comment.id === comment_id)

  // If comment don't exists
  if (!comment)
    return res.status(404).json({ error: { msg: 'Comment does not exists.' } })

  // Checks user
  if (comment.user.toString() !== user_id)
    return res.status(401).json({ error: { msg: 'User not authorized.' } })

  // Get remove index
  const removeIndex = post.comments
    .map(comment => comment.id)
    .indexOf(comment_id)

  post.comments.splice(removeIndex, 1)

  await post.save()

  res.json(post.comments)
})

module.exports = router
