const express = require('express')
const Route = express.Router()

const posRouter = require('./ClubStandings')
const standRouter = require('./RecordGame')

Route
  .use('/football', posRouter)
  .use('/football', standRouter)

module.exports = Route