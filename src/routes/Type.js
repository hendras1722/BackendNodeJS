const express = require('express')
const Route = express.Router()

const {
    readType
} = require('../controllers/Type')

Route
    .get('/type', readType)
module.exports = Route