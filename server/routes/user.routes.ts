import { tokenMiddleware } from '../middleware/jwt'

const Router = require('express')
const router = new Router()
const userController = require('../controller/user.controller')

router.post('/user/login', userController.login)
router.post('/user/registration', userController.registration)
router.get('/user/getUserlogo', tokenMiddleware, userController.getUserLogo)
router.get('/user/userlogo/:userLogo', userController.userLogo)
router.get('/user/isUser', tokenMiddleware, userController.isUser)
router.get('/user/getRole', tokenMiddleware, userController.getUserRole)
router.get('/user/getUserOrg', tokenMiddleware, userController.getUserOrg)

module.exports = router
