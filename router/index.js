const Router = require('express').Router()
const sort = require('./sort')
const ds = require('./ds')

Router.use('/sort', sort)
Router.use('/ds', ds)

module.exports = Router
