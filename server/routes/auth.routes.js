const express = require('express')
const passport = require('passport')
const router = express.Router()
const { redirectURL } = require('../config/keys').google

router.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
)

router.get(
  '/auth/google/callback',
  passport.authenticate('google'),
  (req, res) => {
    const { token } = req.user
    req.session.token = token
    res.redirect(`${redirectURL}?token=${token}`)
  }
)

router.get('/auth/google/*', passport.authenticate('google'), (req, res) => {
  res.send('tae')
})

router.get('/api/logout', (req, res) => {
  req.logout()
  req.session.token = null
  res.redirect('/')
})

module.exports = router
