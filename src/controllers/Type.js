const models = require('../models/Type')
const myConnection = require('../helpers/status')

module.exports = {
    readType: async (request, response) => {
        try {
            const type = request.query.type || ''
            const result = await models.readType()
            myConnection.response(response, 200, result)
        } catch (error) {
            myConnection.customErrorResponse(response, 404, 'Data Failed')
        }
    }
}