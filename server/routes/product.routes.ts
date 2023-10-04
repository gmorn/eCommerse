import { tokenMiddleware } from '../middleware/jwt'

const Router = require('express')
const multer = require('multer')
const ProductController = require('../controller/product.controller')
const router = new Router()
const randomstring = require('randomstring')

const storage = multer.diskStorage({
	destination: (req, file, callback) => {
		callback(null, 'STORAGE/product_gallery/')
	},
	filename: (req, file, callback) => {
		const name = file.originalname
		const extension = name.match(/\.([0-9a-z]+)(?:[\?#]|$)/i)[1]
		const fileName = `${randomstring.generate(10)}.${extension}`
		callback(null, fileName)
	}
})

const upload = multer({ storage })

router.post(
	'/product/createProduct',
	upload.any(),
	tokenMiddleware,
	ProductController.createProduct
)
// router.get(
// 	'/product/getProductByOrgName/:orgName',
// 	ProductController.getProducts
// )
router.post('/product/getProducts/:pageCount', ProductController.getProducts)
router.get('/product/image/:imageName', ProductController.productImage)
module.exports = router
