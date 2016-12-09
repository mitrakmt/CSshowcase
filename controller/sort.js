let sortController = {}
let sortModel = require('../model/sort')
let request = require('request-promise')
var Promise = require("bluebird");

sortController.GET_DATA = (size) => {
    options = {
        method: 'POST',
        uri: 'https://api.random.org/json-rpc/1/invoke',
        body: {
            "jsonrpc": "2.0",
            "method": "generateIntegers",
            "params": {
                "apiKey": "e45aca68-dd22-4a38-91cb-b0d9a40df2b4",
                "n": size,
                "min": 1,
                "max": 10000
            },
            "id": 1
        },
        json: true
    }

    return new Promise(function(resolve) {            
        resolve(request(options)
            .then(response => {
                return response.result.random.data
            })
        )
    })
}

// Learn how to optimize bucket size for array length
sortController.BUCKET_SORT = (req, res) => {
    sortController.GET_DATA(req.body.size)
        .then(data => {
            let bucketSize = 50
            function bucketSort() {
                return new Promise(function(resolve) {
                    resolve(sortModel.BUCKET_SORT(data, bucketSize));
                })
            }

            bucketSort()
                .then(result => {
                    res.status(200).send({
                        result: result,
                        message: "",
                        timeComplexity: 'Worst case is O()'
                    })
                })
        })
}

sortController.BUBBLE_SORT = (req, res) => {
    sortController.GET_DATA(req.body.size)
        .then(data => {
            function bubbleSort() {
                return new Promise(function(resolve) {
                    resolve(sortModel.BUBBLE_SORT(data));
                })
            }

            bubbleSort()
                .then(result => {
                    res.status(200).send({
                        result: result,
                        message: "Bubble sort is wildly inneficient and should not normally be used in production code. There's almost always a more efficient sorting algorithm to use.",
                        timeComplexity: 'Worst case is O(n^2)'
                    })
                })
        })
}

sortController.QUICK_SORT = (req, res) => {
    sortController.GET_DATA(req.body.size)
        .then(data => {
            function quickSort() {
                return new Promise(function(resolve) {
                    resolve(sortModel.QUICK_SORT(data));
                })
            }

            quickSort()
                .then(result => {
                    res.status(200).send({
                        result: result,
                        message: "Does really poorly if it is an almost sorted list",
                        timeComplexity: 'Worst case is O(n log n)',
                        spaceComplexity: "Takes up less space than merge sort"
                    })
                })
        })
}

sortController.MERGE_SORT = (req, res) => {
    sortController.GET_DATA(req.body.size)
        .then(data => {
            function mergeSort() {
                return new Promise(function(resolve) {
                    resolve(sortModel.MERGE_SORT(data))
                })
            }

            let startTime = new Date()
            mergeSort()
                .then(result => {
                    let totalTime = new Date() - startTime
                    res.status(200).send({
                        result: result,
                        time: totalTime,
                        message: "",
                        timeComplexity: 'Worst case is O(n log n)',
                        spaceComplexity: 'O(n)'
                    })
                })
        })
}

sortController.INSERTION_SORT = (req, res) => {
    sortController.GET_DATA(req.body.size)
    .then(data => {
        function insertionSort() {
            return new Promise(function(resolve) {
                resolve(sortModel.INSERTION_SORT(data))
            })
        }

        insertionSort()
            .then(result => {
                res.status(200).send({
                    result: result,
                    message: "The worst case scenario for it is similar to bubble sort's but its best case makes it suited for times when you're pretty sure a list almost sorted or likely already sorted.",
                    timeComplexity: 'Worst case is O(n^2)'
                })
            })
    })
}

module.exports = sortController