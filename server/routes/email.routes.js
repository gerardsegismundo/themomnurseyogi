const express = require('express')
const router = express.Router()
const nodemailer = require('nodemailer')

const validateMessage = require('../validations/validateMessage')
const getErrorDetails = require('../utils/getErrorDetails')

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_PRIMARY,
    pass: process.env.PASSWORD
  }
})

// @route  POST
// @desc   Send client's message to admin.
router.post('/', async (req, res) => {
  const { error } = validateMessage(req.body)

  if (error) {
    const errorDetails = getErrorDetails(error)

    return res.json({ success: false, errorDetails })
  }

  const { title, email, message } = req.body

  let mailOptions = {
    from: process.env.EMAIL_SECONDARY,
    to: process.env.EMAIL_PRIMARY,
    subject: `${title} - ${email} (themomnurseyogi)`,
    text: message
  }

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      console.log(err)
      return res.status(400).json({ error: err })
    }

    res.status(200).json({ data })
  })
})

module.exports = router
