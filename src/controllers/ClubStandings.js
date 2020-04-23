const models = require('../models/ClubStandings')
const myConnection = require('../helpers/status')

module.exports = {
    createRank: async (request, response) => {
        try {
            const {
                clubname,
                points,
            } = request.body

            const data = {
                clubname,
                points,
                created_at: new Date(),
                updated_at: new Date()
            }

            const result = await models.createRank(data)
            myConnection.response(response, 200, result, 'Success Added')
        } catch (error) {
            myConnection.customErrorResponse(response, 404, 'Data Failed')
        }
    },
    readRank: async (request, response) => {
        try {
            const clubname = request.query.clubname || ''
            const result = await models.readRank(clubname)
            myConnection.response(response, 200, result)
        } catch (error) {
            myConnection.customErrorResponse(response, 404, 'Data Failed')
        }
    },
    updateRank: async (request, response) => {
        try {
            const Id = request.params.Id
            const data = {
                clubname: request.body.clubname,
                standing: request.body.standing,
                points: request.body.points,
                updated_at: new Date()
            }

            const result = await models.updateRank(data, Id)
            myConnection.response(response, 200, result)
        } catch (error) {
            myConnection.customErrorResponse(response, 404, 'Data Failed')
        }
    },
    deleteRank: async (request, response) => {
        try {
            const Id = request.params.Id
            const data = {
                Id
            }
            const result = await models.deleteRank(data)
            myConnection.response(response, 200, result)
        } catch (error) {
            myConnection.customErrorResponse(response, 404, 'Data Failed')
        }
    }
}