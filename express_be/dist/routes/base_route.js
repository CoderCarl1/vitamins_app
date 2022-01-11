//imports
const express = require('express')
const router = express.Router()
//controllers
const baseController = require('../controllers/base_controller.js')

//returning a hardcoded string
router.get('/api/base', baseController.hardEntry)
//return a specific post
router.get('/api/base/:id', baseController.getEntry)
//create 1 post
router.post('/api/base/new', baseController.createEntry)


module.exports = router
