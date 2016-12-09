let sortRouter = require('express').Router()
let sortController = require('../controller/sort')

sortRouter.post('/bubble_sort', sortController.BUBBLE_SORT)
sortRouter.post('/bucket_sort', sortController.BUCKET_SORT)
sortRouter.post('/merge_sort', sortController.MERGE_SORT)
sortRouter.post('/insertion_sort', sortController.INSERTION_SORT)

module.exports = sortRouter
