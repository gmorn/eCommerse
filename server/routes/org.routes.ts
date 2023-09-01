import { tokenMiddleware } from '../middleware/jwt'

const Router = require('express')
const router = new Router()
const orgController = require('../controller/org.controller')

router.post('/org/createOrg', tokenMiddleware, orgController.createOrg)
router.post('/org/getOrgByName', tokenMiddleware, orgController.getOrgByName)

module.exports = router
