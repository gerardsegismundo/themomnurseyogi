const express = require('express')
const router = express.Router()
const { model } = require('mongoose')
const Message = model('message')
const validateMessage = require('../validations/validateMessage')
const arrangeMessage = require('../utils/arrangeMessage')

// @route  POST
// @desc   Send client's message to admin.
router.post('/', async (req, res) => {
  // Joi validation
  const { error } = validateMessage(req.body)
  if (error) {
    const msg = arrangeMessage(error.details[0].message)

    return res
      .status(400)
      .json({ error: { keys: [error.details[0].context.key], msg } })
  }

  const { name, email, title, text } = req.body

  const newMessage = new Message({
    name,
    email,
    title,
    text,
    unread: true
  })

  const message = await newMessage.save()

  res.json(message)
})

module.exports = router
