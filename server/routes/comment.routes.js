const express = require('express')
const router = express.Router()
const { model } = require('mongoose')
const Comment = model('comment')

// @route GET /postID
// @desc get post comments
router.get('/:id', async (req, res) => {
  const comments = await Comment.find({ postId: req.params.id })
  if (!comments) return res.status(404).send('Comments not found.')
  res.json(comments)
})

// @route POST /
// @desc add comment
router.post('/', async (req, res) => {
  const { postId, uid, displayName, photoURL, comment } = req.body

  const newComment = new Comment({
    postId,
    uid,
    displayName,
    photoURL,
    comment
  })

  newComment.save()
  res.json(newComment)
})

router.patch('/', async (req, res) => {
  const { _id, comment } = req.body

  const updateComment = await Comment.findByIdAndUpdate(_id, {
    $set: { comment, date: Date.now() }
  })
  if (!updateComment) res.status(400).send('Comment update error.')

  res.status(200).send('Comment updated.')
})

// @route DELETE /:id
// @desc delete comment
router.delete('/:id', async (req, res) => {
  const deleteComment = await Comment.findByIdAndDelete(req.params.id)
  if (!deleteComment) return res.status(400).send('Delete failed.')

  res.status(200).send('Delete success.')
})

module.exports = router
