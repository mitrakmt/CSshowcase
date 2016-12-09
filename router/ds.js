let dsRouter = require('express').Router()
let dsController = require('../controller/ds')

dsRouter.post('/', dsController.LINKED_LIST)

module.exports = dsRouter
