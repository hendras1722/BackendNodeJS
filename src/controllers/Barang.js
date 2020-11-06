const models = require('../models/Barang')
const myConnection = require('../helpers/status')

module.exports = {
    createBarang: async (request, response) => {
        try {
            const {
                No_Container,
                Size,
                Type,
                slot,
                Row,
                Tier
            } = request.body

            const data = {
                No_Container,
                Size,
                Type,
                slot,
                Row,
                Tier,
                created_at: new Date(),
                updated_at: new Date()
            }

            const result = await models.createBarang(data)
            myConnection.response(response, 200, result, 'Success Added')
        } catch (error) {
            myConnection.customErrorResponse(response, 404, 'Data Failed')
        }
    },
    readBarang: async (request, response) => {
        try {
            const barang = request.query.barang || ''
            const result = await models.readBarang(barang)
            myConnection.response(response, 200, result)
        } catch (error) {
            myConnection.customErrorResponse(response, 404, "Data Failed")
        }
    },
    readBarangUpdate: async (request, response) => {
        try {
            const barang = request.query.barang || ''
            const result = await models.readBarangUpdate(barang)
            myConnection.response(response, 200, result)
        } catch (error) {
            myConnection.customErrorResponse(response, 404, "Data Failed")
        }
    },
    readBarangAll: async (request, response) => {
        try {
            const result = await models.readBarangAll()
            myConnection.response(response, 200, result)
        } catch (error) {
            myConnection.customErrorResponse(response, 404, "Data Failed")
        }
    },
    updateBarang: async (request, response) => {
        try {
            const Id = request.params.No_Container
            const data = {
                No_Container: request.body.No_Container,
                Size: request.body.Size,
                Type: request.body.Type,
                Row: request.body.Row,
                Tier: request.body.Tier,
                updated_at: new Date()
            }

            const result = await models.updateBarang(data, Id)
            myConnection.response(response, 200, result)
        } catch (error) {
            myConnection.customErrorResponse(response, 404, 'Data Failed')
        }
    },
    deleteBarang: async (request, response) => {
        try {
            const Id = request.params.No_Container
            const data = {
                Id
            }
            const result = await models.deleteBarang(Id)
            myConnection.response(response, 200, result)
        } catch (error) {
            myConnection.customErrorResponse(response, 404, 'Data Failed')
        }
    }
}