const router = require('express').Router()
const userController = require('../../controllers/userController')

router.get('/register', userController.renderRegisterUser)
router.post('/register', userController.registerUser)

router.get('/login', userController.renderLoginUser)
router.post('/login', userController.loginUser)

router.get('/profile/:username', userController.renderProfile)

module.exports = router