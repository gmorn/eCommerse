import { tokenMiddleware } from '../middleware/jwt'

const Router = require('express')
const router = new Router()
const CookieController = require('../controller/cookie.controller')

router.get('/cookie/deleteJwt', tokenMiddleware, CookieController.deleteJwtCookie)

module.exports = router
