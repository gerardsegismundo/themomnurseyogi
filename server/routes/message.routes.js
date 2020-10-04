const express = require('express')
const router = express.Router()
const nodemailer = require('nodemailer')

const validateMessage = require('../validations/validateMessage')
const formatErrMsg = require('../utils/formatErrMsg')

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
    // const msg = formatErrMsg(error.details[0].message)
    console.log(error)
    return res.status(400)
    // .json({ error: { keys: [error.details[0].context.key], msg } })
  }

  const { title, email, body } = req.body

  let mailOptions = {
    from: process.env.EMAIL_SECONDARY,
    to: process.env.EMAIL_PRIMARY,
    subject: `${title} - ${email} (themomnurseyogi)`,
    text: body
  }

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      console.log(err)
      return res.status(400).json({ error: err })
    }
    console.log(data)
    res.status(200).json({ data })
  })
})

module.exports = router
