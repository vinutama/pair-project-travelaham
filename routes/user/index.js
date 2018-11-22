const router = require('express').Router()
const userController = require('../../controllers/userController')

router.get('/register', userController.renderRegisterUser)
router.post('/register', userController.registerUser)


module.exports = router