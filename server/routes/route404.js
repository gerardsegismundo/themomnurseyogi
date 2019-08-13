const express = require('express')
const router = express.Router()

// @route GET *
// @desc The 404 Route
router.get('*', (req, res) => null)

module.exports = router
