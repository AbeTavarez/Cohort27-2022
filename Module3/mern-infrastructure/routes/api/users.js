const express = require('express')
const userCtr = require('../../controllers/api/users')
// Router for all users related end-points
const router = express.Router()

// POST /api/users
router.post('/', userCtr.create)

module.exports = router;