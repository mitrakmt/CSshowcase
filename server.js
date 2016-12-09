const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const rootRouter = require('./router')
const logger = require('morgan')
const request = require('request')
const cors = require('cors')
const port = process.env.PORT || 8000

app.use(bodyParser.json())
app.use(cors())
app.use(logger('dev'))

app.use('/api', rootRouter)

app.listen(port)
console.log(`Server listening on port ${port}`)

module.exports = app