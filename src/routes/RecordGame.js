const express = require('express')
const route = express.Router()

const { postRecord, readLeague } = require('../controllers/RecordGame')

route
    .get('/recordgame', readLeague)
    .post('/recordgame', postRecord)

module.exports = route