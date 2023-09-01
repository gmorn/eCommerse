import db from '../index'

class OrgController {
	async createOrg(req, res) {
		const userId = req.id
		const { orgName } = req.body

		if (userId && orgName) {
			const check = await db.query(
				`SELECT * FROM "organizations" WHERE "name" = $1`,
				[orgName]
			)
			if (check.rows.length === 0) {
				console.log(1)

				try {
					const newOrg = await db.query(
						`INSERT INTO "organizations" (name, rating) values ($1, 0)  RETURNING *`,
						[orgName]
					)
					if (newOrg.rowCount === 1) {
						// заполнить таблицу сотрудников
						await db.query(
							`INSERT INTO "staff"
		          (organization_id, user_id)
		          values ($1, $2)`,
							[newOrg.rows[0].id, userId]
						)
						// изменить роль пользователя
						await db.query(`UPDATE users SET role_id = 4 WHERE id = $1;`, [
							userId
						])
						const data = {
							orgName: newOrg.rows[0].name,
							userRole: 4
						}
						res.json(data).status(200)
					} else {
						console.log('Запрос выполнен, но ни одна строка не была вставлена.')
					}
				} catch (error) {
					console.error('Произошла ошибка при выполнении запроса:', error)
				}
			} else {
				console.log(2)
				res.status(404).send()
			}
		} else {
			res.status(400).send()
		}
	}
	async getOrgByName(req, res) {
		const { orgName } = req.body
		if (orgName) {
			const orgData = await db.query(
				`SELECT * FROM "organizations" WHERE "name" = $1`,
				[orgName]
			)
			if (orgData.rows.length !== 0) {
				res.json(orgData.rows[0])
			} else {
			res.status(404).send()
			}
		} else {
			res.status(400).send()
		}
	}
}

module.exports = new OrgController()
