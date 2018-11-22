const router = require('express').Router()
const packageController = require('../../controllers/packageControllers')

router.get('/', packageController.findAll)

module.exports = router