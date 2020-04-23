const models = require('../models/ClubStandings')
const myConnection = require('../helpers/status')

module.exports = {
    createRank: async (request, response) => {
        try {
            const {
                clubname,
                standing,
                points,
            } = request.body

            const data = {
                clubname,
                standing,
                points,
                created_at: new Date(),
                updated_at: new Date()
            }

            const result = await models.createRank(data)
            myConnection.response(response, 200, result, 'Success Added')
        } catch (error) {
            myConnection.customErrorResponse(response, 404, 'Ups!!! you have problem at InsertCategory')
        }
    },
    readRank: async (request, response) => {
        // const limit = request.query.limit || 100
        // const activePage = request.query.page || 1
        const clubname = request.query.clubname || ''
        // const sortBy = request.query.sortBy || 'id'
        // const orderBy = request.query.orderBy || 'ASC'
        const result = await models.readRank(clubname)
        myConnection.response(response, 200, result)
        try {

        } catch (error) {
            myConnection.customErrorResponse(response, 404, 'Ups!!! you have problem at AllCategory')
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
            myConnection.customErrorResponse(response, 404, 'Ups!!! you have problem at UpdateCategory')
        }
    },
    deleteRank: async (request, response) => {
        // try {
        const Id = request.params.Id
        const data = {
            Id
        }
        const result = await models.deleteRank(data)
        myConnection.response(response, 200, result)
        // } catch (error) {
        //     myConnection.customErrorResponse(response, 404, 'Ups!!! you have problem at DeleteCategory')
        // }
    }
}