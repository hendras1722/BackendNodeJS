const express = require('express')
const Route = express.Router()

const posRouter = require('./Barang')
const Type = require('./Type')
const Size = require('./SIze')

Route
  .use('/v1', posRouter)
  .use('/v1', Type)
  .use('/v1', Size)

module.exports = Route