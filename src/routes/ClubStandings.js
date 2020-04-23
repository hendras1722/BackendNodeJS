const express = require('express')
const Route = express.Router()

const {
    readRank,
    createRank,
    deleteRank,
    updateRank
} = require('../controllers/ClubStandings')

Route
    .get('/rank', readRank)
    .post('/rank', createRank)
    .delete('/rank/:Id', deleteRank)
    .patch('/rank/:Id', updateRank)
module.exports = Route