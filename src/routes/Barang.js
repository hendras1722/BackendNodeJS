const express = require('express')
const Route = express.Router()

const {
    readBarang,
    readBarangAll,
    createBarang,
    deleteBarang,
    updateBarang,
    readBarangUpdate
} = require('../controllers/Barang')

Route
    .get('/read', readBarang)
    .get('/readUpdate', readBarangUpdate)
    .get('/readAll', readBarangAll)
    .post('/post', createBarang)
    .delete('/delete/:No_Container', deleteBarang)
    .patch('/update/:No_Container', updateBarang)
module.exports = Route