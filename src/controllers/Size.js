const models = require('../models/Size')
const myConnection = require('../helpers/status')

module.exports = {
    readSize: async (request, response) => {
        try {
            const type = request.query.type || ''
            const result = await models.readSize()
            myConnection.response(response, 200, result)
        } catch (error) {
            myConnection.customErrorResponse(response, 404, error)
        }
    }
}