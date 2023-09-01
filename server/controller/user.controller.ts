const { generateToken } = require('../middleware/jwt.ts')

import db from '../index'
const fs = require('fs')

class UserController {
	async login(req, res) {
		const { phone, password } = req.body
		const user = await db.query(`SELECT * FROM "users" WHERE phone = $1`, [
			phone
		])
		if (user.rows.length !== 0) {
			if (password === user.rows[0].password) {
				const userId = user.rows[0].id
				const jwt = generateToken(userId)
				res.json(jwt)
			} else {
				res.status(404).send('Not Found')
			}
		} else {
			res.status(400).send('Not Found')
		}
	}
	async registration(req, res) {
		const { firstName, lastName, phone, password } = req.body

		const check = await db.query(`SELECT * FROM "users" WHERE "phone" = $1`, [
			phone
		])

		if (check.rows.length === 0) {
			const newUser = await db.query(
				`INSERT INTO "users" 
				(first_name, last_name, phone, password, role_id, userlogo) 
				values ($1, $2, $3, $4, 1, 'default_user_logo.jpg') RETURNING *`,
				[firstName, lastName, phone, password]
			)
			const userId = newUser.rows[0].id
			const jwt = generateToken(userId)
			res.json(jwt)
		} else {
			res.status(400).send('Not Found')
		}
	}

	async isUser(req, res) {
		try {
			const userId = req.id
			if (userId) {
				res.json(true).status(200)
			} else {
				res.json(false).status(200)
			}
		} catch (error) {
			res.status(500).send()
		}
	}

	async getUserLogo(req, res) {
		try {
			const userId = req.id
			if (userId) {
				const user = await db.query(`SELECT * FROM "users" WHERE "id" = $1`, [
					userId
				])
				if (user.rows.length > 0) {
					const userLogo = user.rows[0].userlogo
					res.json(`/user/userlogo/${userLogo}`)
				} else {
					res.status(404)
				}
			}
		} catch (error) {
			res.status(500)
		}
	}
	async userLogo(req, res) {
		const userLogo = req.params.userLogo

		let filePath
		if (userLogo === 'default_user_logo.jpg') {
			filePath = 'STORAGE/user_images/default_logo/default_user_logo.jpg'
		} else {
			filePath = `STORAGE/user_images/${userLogo}`
		}

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
	async getUserRole(req, res) {
		const userId = req.id
		if (userId) {
			const user = await db.query(
				`SELECT * FROM "users" WHERE "id" = $1`,
				[userId]
			)
			res.json(user.rows[0].role_id)
		} else {
			res.status(400).send()
		}
	}
	async getUserOrg(req, res) {
		const userId = req.id
		if (userId) {
			const orgStaff = await db.query(
				`SELECT * FROM "staff" WHERE "user_id" = $1`,
				[userId]
			)
			const org = await db.query(
				`SELECT * FROM "organizations" WHERE "id" = $1`,
				[orgStaff.rows[0].organization_id]
			)
			res.json(org.rows[0].name)
		} else {
			res.status(400).send()
		}
	}
}

module.exports = new UserController()
