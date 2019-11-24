const express = require('express')
const router = express.Router()
const { model } = require('mongoose')
const Message = model('message')

// @route  POST
// @desc   Send client's message to admin.
router.post('/', async (req, res) => {
  const { displayName, email, body } = req.body

  const newMessage = new Message({
    displayName,
    email,
    body
  })

  await newMessage.save()
  res.send('Message sent.')
})

module.exports = router
