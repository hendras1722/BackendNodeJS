const models = require('../models/RecordGame')
const myConnection = require('../helpers/status')
const uuidv4 = require('uuid/v4')

module.exports = {
    postRecord: async (request, response) => {

        const loop = request.body
        await loop.hightlights.map(e => {
            const data = {
                clubhomename: e.clubhomename,
                clubawayname: e.clubawayname,
                score: e.score
            }
            models.postRecord(data)
            myConnection.response(response, 200, 'Success Added')
        })

        try {
        } catch (error) {
            // console.log(error)
            myConnection.response(response, 404, 'your request not found')
        }
    },
    readLeague: async (request, response) => {
        try {
            const result = await models.readLeague()
            // console.log(result)
            myConnection.response(response, 200, result)
        } catch (error) {
            myConnection.response(response, 404, 'your request not found')
        }
    }
}