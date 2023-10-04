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
		const { category, sortMethod } = req.body
		const limitPage = 4
		const offsetCount = (pageCount - 1) * 2
		// что нужно добавить:
		//	- товары конкретной категории
		//	- список отсортированных товаров
		//	- товары конкретной категории + метод сортировки

		//	- товары конкретной категории

		//	- общая переменная для количесва товаров на одной стр.

		// if (category) {
		// 	const products = await db.query(
		// 		`SELECT * FROM "products" WHERE category_id = $1
		// 	ORDER BY id
		// 	LIMIT $2 OFFSET $3`,
		// 		[category, limitPage, offsetCount]
		// 	)

		// 	console.log(products.rows)
		// } else {
		// 	console.log(false)
		// }

		if (sortMethod) {
			const products = async () => {
				let orderByClause = ''
				switch (sortMethod) {
					case 0:
						orderByClause = 'ORDER BY price DESC'
						break
					case 1:
						orderByClause = 'ORDER BY price ASC'
						break
					case 2:
						orderByClause = 'ORDER BY rating DESC'
						break
					case 3:
						orderByClause = 'ORDER BY comment_count DESC'
						break
					case 4:
						orderByClause =
							'ORDER BY TO_TIMESTAMP(date, \'YYYY-MM-DD"T"HH24:MI:SS.USSTZH:TZM\') DESC'
						break
					case 5:
						orderByClause =
							'ORDER BY TO_TIMESTAMP(date, \'YYYY-MM-DD"T"HH24:MI:SS.USSTZH:TZM\') ASC'
						break
				}
				if (category) {
					const result = await db.query(
						`SELECT * FROM "products" WHERE category_id = $1 $2 LIMIT $3 OFFSET $4`,
						[category, orderByClause, limitPage, offsetCount]
					)

					return result
				} else {
					const result = await db.query(
						`SELECT * FROM "products" $1 LIMIT $2 OFFSET $3`,
						[orderByClause, limitPage, offsetCount]
					)
					return result
				}
			}
		}

		if (pageCount) {
			try {
				const products = await db.query(
					`SELECT * FROM "products"
					LIMIT $1 OFFSET $2`,
					[limitPage, offsetCount]
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
