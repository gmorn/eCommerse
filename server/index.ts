const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const userRouter = require('./routes/user.routes')
const cookieParser = require('cookie-parser')
const cookieRouter = require('./routes/cookie.routes')
const orgRouter = require('./routes/org.routes')

const db = require('./db')
export default db

const PORT = process.env.PORT || 8080

const app = express()

app.use(
	cors({
		origin: 'http://localhost:3000',
		credentials: true
	})
)

app.use(cookieParser())
app.use(bodyParser.json())
app.use('/api', userRouter)
app.use('/api', orgRouter)
app.use('/api', cookieRouter)

app.listen(PORT, () => console.log('server start'))
