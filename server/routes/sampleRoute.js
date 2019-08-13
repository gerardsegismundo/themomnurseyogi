const express = require('express')
const router = express.Router()

// @route GET /
// @desc sample api
router.get('/', async (req, res) => {
  res.send('sample!')
})

module.exports = router
