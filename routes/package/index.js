const router = require('express').Router()
const packageController = require('../../controllers/packageControllers')

router.get('/', packageController.findAll)
router.get('/detail/:id', packageController.packageDetail)

module.exports = router