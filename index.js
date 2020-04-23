const express = require('express')
const app = express()
const logger = require('morgan')
const bodyParser = require('body-parser')
const mainNavigation = require('./src/routes')
const { port } = require('./src/configs/')
const cors = require('cors')

app.listen(port, () => console.log(`This is server running ${port}`))
app.use(cors('*'))

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))

app.use('/', mainNavigation)