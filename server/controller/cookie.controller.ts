class CookieController {
	async deleteJwtCookie(req, res) {
		console.log(1)

		res.clearCookie('jwt', {
			httpOnly: true,
			path: '/',
			domain: 'localhost'
		})
		res.send('Cookie cleared').status(200)
	}
}

module.exports = new CookieController()
