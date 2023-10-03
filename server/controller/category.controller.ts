import db from '../index'

class OrgController {
	async getCategories(req, res) {
		try {
			const category = await db.query(`SELECT * FROM "categories"`)
			res.status(200).json(category.rows)
		} catch (error) {
			res.status(404)
		}
	}
}
module.exports = new OrgController()
