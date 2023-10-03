import db from '../index'
const fs = require('fs')

class ProductController {
	async createProduct(req, res) {
		const product = {
			name: '',
			price: '',
			categoryId: 0,
			description: '',
			gallery: [],
			orgId: 0,
			createDate: new Date()
		}

		const userId = req.id
		console.log(userId)

		if (userId) {
			const orgStaff = await db.query(
				`SELECT * FROM "staff" WHERE "user_id" = $1`,
				[userId]
			)
			if (orgStaff.rows.length > 0) {
				product.orgId = orgStaff.rows[0].organization_id

				const category = await db.query(
					`SELECT * FROM "categories" WHERE "name" = $1`,
					[req.body.category]
				)

				if (category.rows.length !== 0) {
					product.categoryId = category.rows[0].id
				} else {
					const newCategory = await db.query(
						`INSERT INTO "categories" (name) values ($1) RETURNING *`,
						[req.body.category]
					)
					product.categoryId = newCategory.rows[0].id
				}

				product.name = req.body.name
				product.price = req.body.price
				product.description = req.body.description
				product.gallery = req.files.map(
					(image) => `/product/image/${image.filename}`
				)

				console.log(product)

				const newProduct = await db.query(
					`INSERT INTO "products" (
            name, 
            price, 
            category_id, 
            description, 
            gallery, 
            organization_id, 
            data
            ) values ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
					[
						product.name,
						product.price,
						product.categoryId,
						product.description,
						product.gallery,
						product.orgId,
						product.createDate
					]
				)

				res.status(200).send('Продукт успешно сохранен')
			} else {
				res.status(404).send('Not Found')
			}
		} else {
			res.status(400).send('Not Found')
		}
	}
	async getProducts(req, res) {
		const pageCount = req.params.pageCount
		if (pageCount) {
			try {
				const offsetCount = (pageCount - 1) * 2

				const products = await db.query(
					`     SELECT * FROM "products"
				ORDER BY id
				LIMIT 2 OFFSET $1`,
					[offsetCount]
				)

				const productsWithGalleryArray = products.rows.map((product) => {
					const galleryStr = product.gallery.replace(/\{|\}/g, '').trim()
					product.gallery = galleryStr
						.split(',')
						.map((item) => item.replace(/"/g, ''))
					return product
				})

				res.status(200).json(productsWithGalleryArray)
			} catch (error) {
				res.status(404)
			}
		} else {
			res.status(400)
		}
	}
	// async getProductByOrgName(req, res) {
	// 	const id = req.params.orgName
	// }
	async productImage(req, res) {
		const imageName = req.params.imageName

		const filePath = `STORAGE/product_gallery/${imageName}`

		fs.readFile(filePath, (err, data) => {
			if (err) {
				console.error(err)
				res.status(404).send('Not Found')
			} else {
				res.setHeader('Content-Type', 'image/png')
				res.end(data)
			}
		})
	}
}

module.exports = new ProductController()
