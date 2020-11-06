const express = require('express')
const Route = express.Router()

const {
    readSize
} = require('../controllers/Size')

Route
    .get('/size', readSize)
module.exports = Route