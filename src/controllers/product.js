const posStyle = require('../models/product')
const myConnection = require('../helpers/status')
const { port } = require('../configs')
const uuidv4 = require('uuid/v4')
const uuid = require('uuid')

module.exports = {
  posAll: async (request, response) => {

    try {
      const limit = request.query.limit || 100
      const activePage = request.query.page || 1
      const searchName = request.query.name || ''
      const sortBy = request.query.sortBy || 'id'
      const orderBy = request.query.orderBy || 'ASC'
      const name_category = request.query.name_category || ''
      const idCat = request.query.idCat || ''
      const posId = request.params.posId
      const totalData = await posStyle.countData()
      const totalPages = Math.ceil(totalData / limit)
      const pager = {
        totalPages
      }

      const result = await posStyle.posAll(limit, activePage, searchName, sortBy, orderBy, name_category, idCat, posId)

      myConnection.customResponse(response, 200, result, pager)
    } catch (error) {
      myConnection.customErrorResponse(response, 404, 'Ups!!! you have problem at posAll')
    }
  },
  posDetail: async (request, response) => {
    try {
      const posId = request.params.posId
      const result = await posStyle.posDetail(posId)
      myConnection.response(response, 200, result)
    } catch (error) {
      myConnection.customErrorResponse(response, 404, 'Ups!!! you have problem at posDetail')
    }
  },
  insertData: async (request, response) => {

    try {
      const {
        name,
        description,
        price,
        stock,
        name_category
      } = request.body

      const data = {
        name,
        description,
        image: `http://localhost:${port}/uploads/${request.file.filename}`,
        price,
        stock,
        name_category
      }

      const result = await posStyle.insertData(data)

      myConnection.response(response, 200, result, 'Success Uploaded')
      // const id = uuidv4()

    } catch (error) {
      myConnection.customErrorResponse(response, 404, 'Ups!!! you have problem at insertData or File not recruitment')
    }
  },
  updateData: async (request, response) => {
    try {
      const id = request.params.posId
      const data = {
        id,
        name: request.body.name,
        description: request.body.description,
        image: `http://localhost:4000/uploads/${request.file.filename}`,
        price: request.body.price,
        stock: request.body.stock,
        name_category: request.body.name_category,
        updated_at: new Date()
      }

      const result = await posStyle.updateData(data)
      myConnection.response(response, 200, result)
    } catch (error) {
      myConnection.customErrorResponse(response, 404, 'Ups!!! you have problem at updateData')
    }
  },
  deleteData: async (request, response) => {
    try {
      const posId = request.params.posId
      const result = await posStyle.deleteData(posId)
      console.log(posId)
      const deleteData = {
        id: parseInt(posId)
      }
      myConnection.response(response, 200, deleteData)
    } catch (error) {
      myConnection.customErrorResponse(response, 404, 'Ups!!! you have problem at updateData')
    }
  }
}